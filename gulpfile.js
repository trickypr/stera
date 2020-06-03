/* eslint-disable no-undef */
const { series, dest, src } = require('gulp')
const ts = require('gulp-typescript')
const minify = require('gulp-minify')

const deleteRecursive = require('./scripts/deleteRecursive.js')

const tsProject = ts.createProject('tsconfig.json')

function clean(cb) {
	deleteRecursive('dist')
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
