var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
/*
 * Variables
 */
// Sass Source
var scssFiles = './sass/styles.scss';

// CSS destination
var cssDest = './css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
      .pipe(sass(sassDevOptions).on('error', sass.logError))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(cssDest));
  });

  // Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
    gulp.watch(scssFiles, gulp.series('sassdev'));
});


gulp.task('sassprod', function() {
return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssMinDest));
});

// gulp.task('default', ['sassdev', 'sassprod', 'watch']);

