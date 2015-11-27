'use strict';

var gulp = require('gulp'),
	tracer = require('gulp-tracer'),
	connect = require('gulp-connect'),
	clean = require('gulp-clean'),
	bower = require('gulp-bower'),
	runSequence = require('run-sequence'),
	changed = require('gulp-changed'),
	componentDir = "bower_components/",
	rootDir = 'public/',
	vendorDir = 'vendor/',
	srcDir = "src/",
	distDir = "dist/";

gulp.task('default', function () {
	runSequence('bower', 'dev');
});
gulp.task('bower', ['default'], function () {
	return bower();
});
gulp.task('build', function () {
	runSequence('bower', 'prod');
});
gulp.task('dev', ['clean'], function () {
	gulp.start('scripts:vendor', 'scripts', 'styles', 'server');
});

gulp.task('prod', ['clean'], function () {
	gulp.start('scripts:prod', 'styles:prod');
	tracer.log('tasks is completed');
});


gulp.task('server', function () {
	connect.server({
		root: '',
		port: 9090,
		livereload: true
	});
});

gulp.task('styles:prod', function () {
	var source = [
		'dropdown.css'
	].map(function (dir) {
		return srcDir + dir;
	});

	return gulp.src(source)
		.pipe(gulp.dest(distDir))
		.pipe(connect.reload());
});
gulp.task('scripts:prod', function () {
	var source = [
		'dropdown.js'
	].map(function (dir) {
		return srcDir + dir;
	});

	return gulp.src(source)
		.pipe(gulp.dest(distDir))
		.pipe(connect.reload());
});
gulp.task('styles', function () {
	var source = [
		'dropdown.css'
	].map(function (dir) {
		return srcDir + dir;
	});

	return gulp.src(source)
		.pipe(gulp.dest(rootDir + vendorDir))
		.pipe(connect.reload());
});
gulp.task('scripts', function () {
	var source = [
		'**/**.js'
	].map(function (dir) {
		return srcDir + dir;
	});

	return gulp.src(source)
		.pipe(gulp.dest(rootDir + vendorDir))
		.pipe(connect.reload());
});
gulp.task('scripts:vendor', function () {
	var source = [
		'jquery/dist/jquery.js'
	].map(function (dir) {
		return componentDir + dir;
	});

	return gulp.src(source)
		.pipe(gulp.dest(rootDir + vendorDir))
		.pipe(connect.reload());
});

gulp.task('watch', ['clean'], function () {
	gulp.watch(srcDir + '*.css', ['styles']);
	gulp.watch(srcDir + '*.js', ['scripts']);
});

gulp.task('clean', function () {
	return gulp.src(rootDir + vendorDir, {read: false})
		.pipe(clean());
});