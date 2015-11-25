'use strict';

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	changed = require('gulp-changed'),
	connect = require('gulp-connect'),
	clean = require('del'),
	bower = require('gulp-bower'),
	jshint = require('gulp-jshint'),
	jsdoc = require("gulp-jsdoc"),
	template = require('gulp-template'),
	runSequence = require('run-sequence'),

	dir = require('require-dir')('./gulp-tasks');


gulp.task('default', function () {
	runSequence('bower', 'dev');
});

gulp.task('build', function () {
	runSequence('bower', 'prod');
});
gulp.task('dev', ['clean'], function () {
	gulp.start('scripts.app:dev', 'scripts.vendor', 'styles', 'themes',
			'templates.direct', 'server', 'watch', 'fonts', 'images', 'config', 'locales');
});

gulp.task('prod', ['clean'], function () {
	gulp.start('scripts.app', 'scripts.vendor', 'styles', 'themes',
			'templates.direct', 'fonts', 'images', 'config', 'locales', 'test');
	gutil.log('tasks is completed');
});


gulp.task('server', function () {
	connect.server({
		root: '',
		port: 9090,
		livereload: true
	});
});