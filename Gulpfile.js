var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var Builder = require('systemjs-builder');
var runSequence = require('run-sequence').use(gulp);
var jshint = require('gulp-jshint');
var path = require('path');

var config = {
    SOURCE_FILES : ['./src/**/*.js'],
    BABEL_DEST_DIR : 'systemBuild',
    BUNDLE_NAME : 'dist/app.js'
};

var options = {
    config : {
        baseURL : path.resolve('systemBuild')
    }
};

gulp.task('watch', function () {

    gulp.watch(config.SOURCE_FILES, ['build', 'lint']);
});

// Runs JSHint Report against all JS files in app
gulp.task('lint', function () {
    return gulp.src(config.SOURCE_FILES)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('babel', function () {

    return gulp.src(config.SOURCE_FILES)
        .pipe(babel({
            modules : "system"
        }))
        .pipe(gulp.dest(config.BABEL_DEST_DIR));
});

gulp.task('systemjs-build', function () {

    var builder = new Builder({
        baseURL : path.resolve(config.BABEL_DEST_DIR),

        // opt in to Babel for transpiling over Traceur
        transpiler: 'babel'
    });

    builder.buildSFX('app', config.BUNDLE_NAME, options)
        .then(function() {
            gutil.log('Build Bundle', gutil.colors.cyan('done'));
        })
        .catch(function(err) {
            gutil.log('Build Bundle Err', gutil.colors.red(err));
        });
});

gulp.task('build', function(cb) {
    runSequence('babel', ['systemjs-build'], cb);
});

gulp.task('default', ['build', 'watch', 'lint']);