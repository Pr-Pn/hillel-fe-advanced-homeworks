const { task, src, dest, watch, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

task('js', () => {
    return src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify())
        .pipe(dest('dist'));
});

task('sass', () => {
    return src(['./src/**/*.scss','./src/**/*.sass'])
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'))
});

task('watch', () => {
    watch('./src/**/*.js', series('js'))
    watch(['./src/**/*.sass','./src/**/*.scss'], series('sass'));
});

task('build', parallel(['js','sass']));

task('default', series('watch'));
