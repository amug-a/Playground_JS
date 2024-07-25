const { watch } = require('browser-sync');

var gulp = require('gulp'),
  config = require('./config/gulp'),
  nodemone = require('gulp-nodemon'),
  del = require('del');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// gulp task to clear the dit directory
gulp.task('clean', function () {
  return del(config.paths.dist_dir);
})

// gulp task to watch the views directory
gulp.task('dev:views', function () {
  return gulp.src(config.paths.views.src)/* To process the views */.pipe(gulp.dest(config.paths.views.dist))
})

// gulp task to watch for styles in the styles directory
gulp.task('watch:styles', function () {
  return gulp.src(config.paths.styles.dist)/* To process the styles*/.pipe(gulp.dest(config.paths.styles.dist))
})

// gulp task to watch for scripts in the scripts directory
gulp.task('watch:styles', function () {
  gulp.watch(config.paths.styles.src, gulp.series('dev:styles'));
  done();
})

// gulp task to serve the files
gulp.task('server', function () {
  var called = false;
  return nodemon(config.plugins.nodemon).on('start', function (serve) {
    if (!called) {
      called = true;
      console.log('Server started....');
      serve();
    }
  })
});

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