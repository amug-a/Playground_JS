var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  gulp.watch("./src/**/*.css").on("change", reload);
  gulp.watch("./src/**/*.js").on("change", reload);
  // gulp.watch("./src/**/*.html").on("change", reload); // Watch for changes in HTML files
});