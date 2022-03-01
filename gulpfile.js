var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass'));
var postcss = require('gulp-postcss');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var wait = require('gulp-wait');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var zip = require('gulp-zip');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
    return gulp.src(['./assets/scss/screen.scss'], { allowEmpty: true })
    .pipe(wait(100))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
    .pipe(cleanCSS({
        level: {1: {specialComments: 0}},
        compatibility: 'ie9'}))
    .pipe(rename({ suffix: '.min'}))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('copy-plugin-js', function() {
    var pluginJs = [
        './node_modules/disqusLoader.js/disqusloader.js',
        './node_modules/prismjs/prism.js',
        './node_modules/reframe.js/dist/reframe.min.js',
        './node_modules/searchinghost/dist/searchinghost.min.js',
        './node_modules/medium-zoom/dist/medium-zoom.min.js',
        './node_modules/clipboard/dist/clipboard.min.js',
    ]
    return gulp.src(pluginJs).pipe(gulp.dest('./assets/js/plugin/'));
});

gulp.task('concat-js', function() {
    return gulp.src([
        'assets/js/plugin/**',
        // exclude optional plugins files from combining.
        // these will be copied separately in 'copy-optional-plugins' task
        '!assets/js/plugin/prism.js',
        // add index.js file at last
        './assets/js/index.js'
    ])
    .pipe(concat('app.bundle.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', gulp.series('css', 'copy-plugin-js', 'concat-js', function() {
    browserSync.init({
        proxy: "http://localhost:2368"
    });
    gulp.watch(['./assets/scss/**/*.scss'], { allowEmpty: true }).on('change', gulp.series('css'));
    gulp.watch(['./assets/js/**/*.js', '!./assets/js/app.bundle.min.js', '!./assets/js/app.bundle.js'], { allowEmpty: true }).on('change', gulp.series('concat-js', browserSync.reload));
    gulp.watch('./**/*.hbs').on('change', browserSync.reload);
}));

gulp.task('clean', function() {
    return del(['./build', './dist']);
});

gulp.task('build', gulp.series('clean', 'css', 'copy-plugin-js', 'concat-js', function () {
    var targetDir = 'build/';
    var nonOptionalPlugins = ''
    return gulp.src([
        '**',
        '!assets/scss', '!assets/scss/**/*',
        // exclude plugins which are already added in app.bundle
        '!./assets/js/plugin/{disqusloader.js,medium-zoom.min.js,reframe.min.js,searchinghost.min.js,clipboard.min.js}',
        
        '!node_modules', '!node_modules/**',
        '!build', '!build/**',
        '!dist', '!dist/**'
    ])
    .pipe(gulp.dest(targetDir));
}));

gulp.task('zip', function () {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        './build/**/*'
    ])
    .pipe(zip(filename))
    .pipe(gulp.dest(targetDir));
});

gulp.task('default', gulp.parallel('watch'));