var gulp = require('gulp'),
    cssimport = require("gulp-cssimport")
    rename = require('gulp-rename')
    path  = require('path');

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

var srcPath = "./src"
    fandomWikiaPath = "fandomwikia"
    // Note: joining as POSIX as some package does not like '\' in place of '/'
    fgoPath = path.posix.join(srcPath, fandomWikiaPath, "fate_grand_order")

// Task to build Fate CSS file
var fate = () => buildAsSingleCss(
  path.posix.join(fgoPath, "main.css"),
  "fate_grand_order"
)

var fateUserStyles = () => buildAsSingleCss(
  path.posix.join(fgoPath, "main_userstyles.css"),
  "fate_grand_order_userstyles"
)

// Basically => gulp.parallel(example1, example2, example3)
exports.default = gulp.parallel(fate, fateUserStyles)