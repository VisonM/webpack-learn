const gulp = require("gulp");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");

gulp.task("minify-css", done => {
  gulp
    .src("dist/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      cleanCSS({ debug: true }, details => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
  done();
});

gulp.task(
  "default",
  gulp.series("minify-css", async function() {
    // Do something after a, b, and c are finished.
    console.log("minify-css 压缩完成啦！");
  })
);
