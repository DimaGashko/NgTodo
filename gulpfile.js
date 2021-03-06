'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

//PATHS
const SRC = {
   style: 'src/**/*.sass',
   html: ['src/**/*.{jade,pug}', '!src/styles/**/*.*'],
}
const DST = {
   style: 'src/',
   html: 'src/',
}

//TASKS
gulp.task('style', () => {
   return gulp.src(SRC.style)
      .pipe($.sass())
      .on('error', $.notify.onError((err) => {
         return {title: 'Sass', message: err}
      }))
      .pipe(gulp.dest(DST.style))
});

gulp.task('html', () => {
   return gulp.src(SRC.html)
      .pipe($.pug({pretty: true}))
      .on('error', $.notify.onError((err) => {
         return {title: 'Jade', message: err}
      }))
      .pipe(gulp.dest(DST.html))
});

//WATCH
gulp.task('watch', () => {
   gulp.watch(SRC.style, gulp.parallel('style'));
   gulp.watch(SRC.html, gulp.parallel('html'));
});

//DEFAULT
gulp.task('default', gulp.series(
   gulp.parallel('style', 'html'),
   gulp.parallel('watch'),
));