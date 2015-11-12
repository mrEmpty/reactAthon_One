/*  
    This is a basic Gulp file. Gulp is a task runner.
    Here we are using it to convert our source from
    ES6 and JSX into current day ES5 JS, HTML, and CSS.
*/

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

gulp.task('default', function () {
    browserify('./src/main.js', { debug: true })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('browserify', function () {
    browserify('./src/main.js', { debug: true })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'))
});