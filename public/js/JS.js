var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
	rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('css', function () {
    return gulp.src('./public/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/build/'));
});