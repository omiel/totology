// Gulpfile.js
var gulp = require('gulp')
  , bowerFiles = require('main-bower-files')
  , nodemon = require('gulp-nodemon')
  , inject = require('gulp-inject')
  , series = require('stream-series');

gulp.task('inject', function () {
  var target = gulp.src('./client/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./client/src/**/*.js', './client/resources/**/*.css'], {read: false});
  var deps = gulp.src(bowerFiles(), {read: false});

  return target
    .pipe(inject(series(deps, sources), { relative: true }))
    .pipe(gulp.dest('./client/.build/'));

});

gulp.task('dev', function () {
  nodemon({ script: 'server/server.js'
    , ext: 'html js css'
    , ignore: [
      'node_modules/**',
      'bower_components/**',
      '.vagrant/**'
    ]
    , tasks: ['inject']
    })
    .on('restart', function () {
      console.log('restarted!')
    });
});
