const
  autoprefixer = require('gulp-autoprefixer'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  concat = require('gulp-concat'),
  gulp = require('gulp'),
  notifier = require('node-notifier'),
  rework = require('gulp-rework'),
  sfx = require('sfx'),
  source = require('vinyl-source-stream'),
  sourcemaps = require('gulp-sourcemaps'),
  tap = require('gulp-tap'),
  util = require('gulp-util'),
  watch = require('gulp-watch')

const SRC_DIR = './src'
const DIST_DIR = './dist'

gulp.task('scripts', function () {

  return browserify(SRC_DIR + '/firegrid.js', {
      standalone: 'Firegrid'
    })
    .transform(babelify)
    .bundle()
    .on('error', browserifyError)
    .pipe(source('firegrid.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIST_DIR))
    .pipe(successSound())

})

// gulp.task('styles', function () {

//   gulp
//     .src(SRC_DIR + '/styles/index.css')
//     .on('error', reworkError)
//     .pipe(sourcemaps.init())
//     .pipe(rework(
//       require('rework-npm')(),
//       require('rework-import')(),
//       require('rework-vars')()
//     ))
//     .pipe(autoprefixer({ browsers: ['last 4 versions'] }))
//     .pipe(concat('bundle.css')) // rename
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(DIST_DIR))
//     .pipe(successSound())

// })

gulp.task('default', [
  'scripts',
  'styles'
])

gulp.task('watch', function () {

  watch(SRC_DIR + '/*.js', start('scripts'))
  // watch(SRC_DIR + '/*.css', start('styles'))

})

function successSound () {
  return tap(function(){ sfx.play('glass', 30) })
}

function errorSound () {
  return sfx.play('funk', 50)
}

function start (task) {
  return function(){ gulp.start(task) }
}

function error (err, prefix) {
  notifier.notify({
    message: 'Error: ' + err.message,
    title: prefix || 'Error'
  })
  util.log(util.colors.red.bold(prefix || 'Error'), err.message)
  this.end()
  errorSound()
}

function browserifyError (err) {
  error.call(this, err, 'Browserify error')
}

// function reworkError (err) {
//   error.call(this, err, 'Rework error')
// }