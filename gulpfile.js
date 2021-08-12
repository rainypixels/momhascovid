const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
var postcss = require('gulp-postcss');
var cssnano = require('gulp-cssnano');
var access = require('gulp-accessibility');
var rename = require("gulp-rename");
var assert = require("assert");
var pa11y = require('pa11y');

function htmlTask(cb) {
    return src("./src/*.html") 
        .pipe(dest("./build")) 
        .pipe(browserSync.stream());
    cb();
}

// Task for compiling our CSS files using PostCSS
function cssTask(cb) {
    return src("./src/css/*.css") 
        .pipe(postcss())
        .pipe(cssnano())
        .pipe(dest("./build/css")) 
        .pipe(browserSync.stream());
    cb();
}

function docsTask(cb) {
    return src("./src/docs/*") 
        .pipe(dest("./build/docs")) 
        .pipe(browserSync.stream());
    cb();
}

function imagesTask(cb) {
    return src("./src/images/*") 
        .pipe(dest("./build/images")) 
        .pipe(browserSync.stream());
    cb();
}

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: "./build",
        },
    });
    cb();
}

// Reload the browser
function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Test accessibility using gulp-accessibility
function testAccessibility() {
    return src('./**/*.html')
    .pipe(access({
      force: true
    }))
    .on('error', console.log)
    .pipe(access.report({reportType: 'txt'}))
    .pipe(rename({
      extname: '.txt'
    }))
    .pipe(dest('reports/txt'));
}

// Test accessibility using pa11y
function testAccessibility2() {
    return pa11y("./build/index.html").then((results) => { 
        console.log(results);
    })
}

// Watch and reload
function watchTask() {
    watch("./src/*.html", series(htmlTask, cssTask, browsersyncReload));
    watch(["./src/css/*.css"], series(cssTask, browsersyncReload));
    watch("./src/docs", series(docsTask, browsersyncReload));
    watch("./src/images", series(imagesTask, browsersyncReload));
}

// Exports
exports.default = series(cssTask, htmlTask, docsTask, imagesTask, browsersyncServe, watchTask);
// exports.css = cssTask;
exports.accessibility = testAccessibility;
exports.accessibility2 = testAccessibility2;