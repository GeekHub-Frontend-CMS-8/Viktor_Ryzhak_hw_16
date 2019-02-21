


const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const clean       = require('gulp-clean');


gulp.task('clean', function () {
    return gulp.src('build/*', {read: false})
        .pipe(clean());
});


gulp.task('css', function () {
    return gulp.src('assets/css/reset/*.css')
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src('assets/js/**/*.js')
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('assets/img/**/*')
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('fonts', function () {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("html", function () {
    return gulp.src("assets/**/*.html")
        .pipe(gulp.dest("build"))
        .pipe(browserSync.reload({stream: true}))
});



gulp.task("watch", ['css', 'sass', 'js', "html", 'img', 'fonts'], function () {
    browserSync.init({
        server: "./build",
        notify: false,
        ui: {
            port: 3000
        },
        // tunnel: true
    });
    gulp.watch('assets/css/**/*', ["css"]);
    gulp.watch('assets/sass/**/*.sass', ["sass"]);
    gulp.watch('assets/js/**/*.js', ["js"]);
    gulp.watch('assets/**/*.html' , ['html']);
    gulp.watch('assets/img/**/*', ["img"]);
    gulp.watch('assets/fonts/**/*', ["fonts"]);
});
