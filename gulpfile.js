'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');

// scripts
gulp.task('scripts', function() {
  browserify({entries: ['src/js/index.js'], debug: true})
    .transform('babelify', {presets: ['es2015'], sourceMaps: true})
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

// templates
gulp.task('assets', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

// sass
gulp.task('sass', function() {
  gulp.src('src/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(concat('styles.css'))
      .pipe(minify())
      .pipe(rename({
       basename: "styles",
        suffix: ".min",
        extname: ".css"
       }))
      .pipe(gulp.dest('build/css'));
});

// watch
gulp.task('watch', function() {
  gulp.watch(['src/**/*.html'], ['assets']);
  gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['scripts']);
  gulp.watch(['src/**/*.scss'], ['sass']);
});

// dev server
gulp.task('serve', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('default', ['scripts', 'assets', 'sass', 'serve', 'watch']);
