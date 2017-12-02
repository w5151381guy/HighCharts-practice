const gulp = require('gulp')
const sass = require('gulp-sass')
const webpack = require('webpack')
const gutil = require('gulp-util')

const webpackConfig = require('./webpack.config.js')

gulp.task('compile-sass', () => {
    return gulp
      .src('./src/style/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/style'))
  })

gulp.task('bundle-js', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }

    gutil.log(
      '[webpack]',
      stats.toString({
        // output options
      })
    )
    callback()
  })
})

gulp.task('sass:watch', function() {
    gulp.watch('./src/style/**/*.scss', ['compile-sass'])
  })

gulp.task('js:watch', function() {
  gulp.watch('./src/script/**/*.js', ['bundle-js'])
})

gulp.task('default', ['compile-sass', 'bundle-js', 'sass:watch', 'js:watch'])