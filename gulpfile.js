var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    prettify = require('gulp-html-prettify'),
    jade = require('gulp-jade'),
    pngquant = require('imagemin-pngquant'),
	rename = require('gulp-rename');

gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    return gulp.src('./public/template/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(prettify({indent_char: ' ', indent_size: 3}))
        .pipe(gulp.dest('./'))
})