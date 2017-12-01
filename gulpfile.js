const gulp = require('gulp')
const webpack = require('webpack')
const gutil = require('gulp-util')

const webpackConfig = require('./webpack.config.js')

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

gulp.task('js:watch', function() {
  gulp.watch('./src/script/**/*.js', ['bundle-js'])
})

gulp.task('default', ['bundle-js', 'js:watch'])