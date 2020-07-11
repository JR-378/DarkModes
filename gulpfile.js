var gulp = require('gulp'),
    cssimport = require("gulp-cssimport")
    rename = require('gulp-rename');

var buildFolder = "./build/";

function buildAsSingleCss(fullPath, newFilename) {
  return gulp.src(fullPath)
    .pipe(cssimport())
    .pipe(rename(function(path) {
      path.basename = newFilename
      path.extname = ".css";
    }))
    .pipe(gulp.dest(buildFolder))
}

// Task to build Fate CSS file
var fate = () => buildAsSingleCss(
  "./src/fandomwikia/fate_grand_order/main.css",
  "fate_grand_order"
)

// Basically => gulp.parallel(example1, example2, example3)
exports.default = gulp.parallel(fate)