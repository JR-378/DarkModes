var gulp = require('gulp'),
    cssimport = require("gulp-cssimport")
    rename = require('gulp-rename');

var buildFolder = "./build/";

function css(fullPath, newFilename) {
  return gulp.src(fullPath)
    .pipe(cssimport())
    .pipe(rename(function(path) {
      path.basename = newFilename
      path.extname = ".css";
    }))
    .pipe(gulp.dest(buildFolder))
}

var fate = () => css(
  "./src/fandomwikia/fate_grand_order/main.css",
  "fate_grand_order"
)

exports.default = fate