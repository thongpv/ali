var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var minify      = require('gulp-minify');
var minifyCss   = require('gulp-minify-css');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var sass        = require('gulp-sass');

// Values: nested, expanded, compact, compressed
gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'})) // Using gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {
    browserSync({
        notify: true,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
    gulp.watch(['css/*.css'], reload);
    gulp.watch("scss/*.scss", ['sass'], reload);
    gulp.watch("scss/*/*.scss", ['sass'], reload);
    gulp.watch("scss/*/*/*.scss", ['sass'], reload);
    gulp.watch("scss/*/*/*/*.scss", ['sass'], reload);
    gulp.watch("scss/*/*/*/*/*.scss", ['sass'], reload);
});

gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist/js'));

  gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));

  // gulp.src('img/*')
  //   .pipe(imagemin({
  //       progressive: true,
  //       svgoPlugins: [{removeViewBox: false}],
  //       use: [pngquant()]
  //   }))
  //   .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['serve']);