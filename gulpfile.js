const gulp = require('gulp')
const postcss = require('gulp-postcss')

const options = {
  env: process.NODE_ENV,
}

gulp.task('css', () =>
  gulp
    .src('./src/style.css')
    .pipe(postcss(options))
    .pipe(gulp.dest('./build')),
)

gulp.task('watch', ['css'], () =>
  gulp.watch(['./src/**/*.css', 'postcss.config.js'], ['css']),
)

gulp.task('default', ['css'])
