/* eslint-disable no-undef */
const { mkdirSync, readdirSync } = require('fs')
const { removeSync, copySync, emptyDirSync, moveSync } = require('fs-extra')
const { exec } = require('child_process')

const { series, parallel, dest, src } = require('gulp')
const minify = require('gulp-minify')
const merge = require('merge-stream')

const examples = require('../examples/examples')

function preClean(cb) {
	removeSync('../tmp')

	emptyDirSync('../pages')
	mkdirSync('../tmp')

	cb()
}

function vuepress(cb) {
	exec('yarn docs:build', () => {
		copySync('../docs/.vuepress/dist', '../pages/docs')
		cb()
	})
}

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

function home() {
	const { home } = examples

	return series(
		cb => parcelExamplesSetup(cb, home),
		cb => parcelExamplesBuild(cb, home),
		migrateHome
	)
}

function migrateHome(cb) {
	const { home } = examples

	const files = readdirSync(`../tmp/${home.name}/dist`)

	files.forEach(file => {
		moveSync(`../tmp/${home.name}/dist/${file}`, `../pages/${file}`, { overwrite: true })
	})

	cb()
}

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

	exec(`cd ${tmp} && yarn install --frozen-lockfile`, cb)
}

function parcelExamplesBuild(cb, example) {
	const { tmp, name } = example

	exec(`cd ${tmp} && yarn build`, () => {
		copySync(`${tmp}/dist`, `../pages/examples/${name}`)
		console.log(`Parcel build '${name}' has finished`)
		cb()
	})
}

function postClean(cb) {
	removeSync('../tmp')
	
	cb()
}

exports.default = 
	series(
		preClean,
		home(),
		parallel(
			vuepress,
			staticExamples,
			parcelExamples()
		),
		postClean
	)
