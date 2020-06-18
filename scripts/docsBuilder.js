/* eslint-disable no-undef */
const { mkdirSync, readdirSync } = require('fs')
const { removeSync, copySync, emptyDirSync, moveSync } = require('fs-extra')
const { exec } = require('child_process')

const { series, parallel, dest, src } = require('gulp')
const minify = require('gulp-minify')
const merge = require('merge-stream')

const examples = require('../examples/examples')

// Filesystem functions
function preClean(cb) {
	emptyDirSync('../pages')
	emptyDirSync('../tmp')

	cb()
}

function postClean(cb) {
	removeSync('../tmp')
	
	cb()
}

// Docs build
function vuepress(cb) {
	exec('yarn docs:build', () => {
		copySync('../docs/.vuepress/dist', '../pages/docs')
		cb()
	})
}

// Copy static examples
function staticExamples() {
	const tasks = examples.static.map(example => {
		return src(`${example.src}/*.js`)
			.pipe(minify({
				noSource: true
			}))
			.pipe(dest(`../pages/examples/${example.name}`))
	})
	
	return merge(tasks)
}

// Build examples that need a build tool
function parcelExamples() {
	const tasks = examples.parcel.map(example => {
		return series(
			cb => parcelExamplesSetup(cb, example),
			cb => parcelExamplesBuild(cb, example)
		)
	})

	return parallel(
		...tasks
	)
}

function parcelExamplesSetup(cb, example) {
	const { src, tmp } = example

	copySync(src, tmp)

	exec(`cd ${tmp} && yarn install  --network-concurrency 1 --frozen-lockfile`, cb)
}

function parcelExamplesBuild(cb, example) {
	const { tmp, name } = example

	exec(`cd ${tmp} && yarn build`, () => {
		copySync(`${tmp}/dist`, `../pages/examples/${name}`)
		console.log(`Parcel build '${name}' has finished`)
		cb()
	})
}

// Copy the landing page over
function migrateHome(cb) {
	const { home } = examples

	const files = readdirSync(`../pages/examples/${home}`)

	files.forEach(file => {
		copySync(`../pages/examples/${home}/${file}`, `../pages/${file}`, { overwrite: true })
	})

	cb()
}

exports.default = 
	series(
		preClean,
		parallel(
			vuepress,
			staticExamples,
			parcelExamples()
		),
		migrateHome,
		postClean
	)
