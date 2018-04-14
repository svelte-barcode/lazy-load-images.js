var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-rimraf');
var cssmin = require("gulp-minify-css");
var uglify = require('gulp-uglify');

gulp.task('clean', [], function() {
  console.log("Clean all files in lib folder");

  return gulp.src("lib/*", { read: false }).pipe(clean());
});

gulp.task('css', [], function() {
  console.log("Concat, move, and minify all the css files in styles folder");
  return gulp.src("css/**.css")
    .pipe(concat('lazy-load-images.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('lib/css'));
});

gulp.task('javascript', function () {
  console.log("Validate, Concat, Uglify, and Move all the javascript files");

  return gulp.src("src/**.js")
    .pipe(uglify())
    .pipe(concat('lazy-load-images.min.js'))
    .pipe(gulp.dest('lib/js'));
});

gulp.task('default', ['clean', 'css', 'javascript']);