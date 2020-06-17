/* eslint-disable no-undef */
const { series, dest, src } = require('gulp')
const ts = require('gulp-typescript')
const minify = require('gulp-minify')

const { removeSync } = require('fs-extra')

const tsProject = ts.createProject('tsconfig.json')

function clean(cb) {
	removeSync('dist')
	cb()
}

function typescript() {
	return src('src/**/*.ts')
		.pipe(tsProject())
		.pipe(minify({
			ext:{
				src:'.debug.js',
				min:'.js'
			}
		}))
		.pipe(dest('dist'))
}

exports.default = series(clean, typescript)
