var gulp    = require('gulp'),
    copy  = require('gulp-copy'),
    clean  = require('gulp-clean'),
    uglify  = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    concat  = require('gulp-concat');

var bower_path = 'assets/bower';

gulp.task('js:app', function(){
    return gulp.src('assets/js-src/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('js:plugins', function(){
    return gulp.src([
            bower_path + '/jquery/dist/jquery.js',
            bower_path + '/bootstrap/js/**/*.js',
            bower_path + '/holderjs/holder.js',
            bower_path + '/underscore/underscore.js',
            bower_path + '/d3/d3.js',
            bower_path + '/c3/c3.js'
        ]).pipe(concat('plugins.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('css:plugins', function(){
    return gulp.src([
            bower_path + '/font-awesome/css/font-awesome.css',
            bower_path + '/c3/c3.css',
            bower_path + '/animate.css/animate.css'
        ]).pipe(concat('plugins.css'))
          .pipe(minifyCss())
          .pipe(gulp.dest('assets/css/'));
});

gulp.task('fonts:plugins', function(){
    return gulp.src([
        bower_path + '/bootstrap/fonts/**/*.{ttf,woff,eof,svg}',
        bower_path + '/font-awesome/fonts/**/*.{otf,ttf,woff,woff2,eof,svg}'
        ]).pipe(gulp.dest('assets/fonts/'));
});


gulp.task('clean:site', function(){
    return gulp.src('_site', {read: false})
               .pipe(clean());
});

gulp.task('clean:bower', function(){
    return gulp.src(bower_path, {read: false})
               .pipe(clean());
});

gulp.task('clean:npm', function(){
    return gulp.src('node_modules', {read: false})
               .pipe(clean());
});

gulp.task('clean:sass', function(){
    return gulp.src('.sass-cache', {read: false})
               .pipe(clean());
});

gulp.task('clean:js', function(){
    return gulp.src('assets/js/', {read: false})
               .pipe(clean());
});

gulp.task('clean:fonts', function(){
    return gulp.src('assets/fonts/', {read: false})
               .pipe(clean());
});

gulp.task('default', ['js:app', 'js:plugins', 'css:plugins', 'fonts:plugins']);

gulp.task('clean', ['clean:site', 'clean:js', 'clean:fonts', 'clean:npm',
                    'clean:bower', 'clean:sass']);
