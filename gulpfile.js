var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var gutil = require('gulp-util')

var dev = gutil.env.env !== 'prod'

gulp.task('build', function () {
  return browserify({entries: './app/components/', extensions: ['.jsx'], debug: dev})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('app/public/js'))
})

gulp.task('watch', ['build'], function () {
  gulp.watch('./app/components/*.jsx', ['build'])
})

gulp.task('default', ['watch'])
