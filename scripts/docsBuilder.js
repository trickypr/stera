/* eslint-disable no-undef */
const { mkdirSync } = require('fs')
const { removeSync, copySync } = require('fs-extra')
const { exec } = require('child_process')

const { series, parallel, dest, src } = require('gulp')
const minify = require('gulp-minify')
const merge = require('merge-stream')

const examples = require('../examples/examples')

function preClean(cb) {
	removeSync('../pages')
	removeSync('../tmp')

	mkdirSync('../pages')
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
		parallel(
			vuepress,
			staticExamples,
			parcelExamples()
		),
		postClean
	)
