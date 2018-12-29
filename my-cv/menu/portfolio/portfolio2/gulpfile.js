var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  gulp.src("./sassfile/**/*.scss")
  .pipe(sass())
  .pipe(sass().on("error",sass.logError))
  .pipe(gulp.dest("css"));
  });
