/* eslint-disable no-undef */
const { mkdirSync } = require('fs')
const { removeSync, copySync, copy } = require('fs-extra')
const {exec} = require('child_process')

const { series, parallel, dest, src } = require('gulp')

const examples = require('../examples/examples')
const minify = require('gulp-minify')
const merge = require('merge-stream')

function preClean(cb) {
	removeSync('../pages')
	removeSync('../tmp')

	mkdirSync('../pages')
	mkdirSync('../tmp')

	cb()
}

function vuepress(cb) {
	exec('yarn docs:build', () => cb())
	copySync('../docs/.vuepress/dist', '../pages/docs')

	cb()
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

function parcelExampleSetup(cb) {
	examples.parcel.forEach(({ src, tmp }) => {
		copySync(src, tmp)
	})

	examples.parcel.forEach(({ tmp }) => {
		return src(`${tmp}/package.json`)
			.pipe(yarn)
	})

	cb()
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
			parcelExampleSetup
		),
		// postClean
	)
