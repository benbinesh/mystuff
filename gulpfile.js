/* eslint-env node, browser:false */
/* eslint no-console: 0 */
"use strict";
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('default', function () {
  // place code for your default task here
});

//ERRORS
var reportError = function (error) {
  var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

  notify({
    title: 'Task Failed [' + error.plugin + ']',
    message: lineNumber + 'See console.',
    sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
  }).write(error);

  gutil.beep();

  // Pretty error reporting
  var report = '';
  var chalk = gutil.colors.white.bgRed;

  report += chalk('TASK:') + ' [' + error.plugin + ']\n';
  report += chalk('PROB:') + ' ' + error.message + '\n';
  if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
  if (error.fileName) { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
  console.error(report);

  // Prevent the 'watch' task from stopping
  this.emit('end');
}
//lint task
gulp.task('lint', function () {
  return gulp.src(['./js/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(notify({ message: 'JS Hinting task complete' }));
})

//script task
gulp.task('scripts', function () {
  return gulp.src('./js/*.js')
    .pipe(plumber({
      errorHandler: reportError
    }))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./js/min'))
    .pipe(notify({ message: 'Scripts task complete' }))
})

/** task to run on plan styles sheet  */
gulp.task('styles', function () {
  return gulp.src('./css/style.css')
    .pipe(plumber({
      errorHandler: reportError
    }))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(postcss([autoprefixer({ browsers: ['> 1%'], remove: false })]))
    .pipe(gulp.dest('./css/min'))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Styles task complete' }))
})

gulp.task('less', function () {
  return gulp.src('./less/master.less')
    .pipe(plumber({
      errorHandler: reportError
    }))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(postcss([autoprefixer({ browsers: ['> 1%'], remove: false })]))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Less task complete' }))
})

// This handles watching and running tasks as well as telling our LiveReload server to refresh things
gulp.task('watch', function () {
  // Whenever a stylesheet is changed, recompile
  gulp.watch('./css/*.css', ['styles']);
  //Whenever a less files are changed, recompile
  gulp.watch('./less/**/*.less', ['less']);
  // If user-developed Javascript is modified, re-run our hinter and scripts tasks
  gulp.watch('./js/*.js', ['lint', 'scripts']);

});
gulp.task('default', ['lint', 'scripts', 'styles', 'less', 'watch']);
