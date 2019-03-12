const gulp = require("gulp");
const sass = require("gulp-sass");



gulp.task('rabotai', function () {
    return gulp.src('app/scss/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/sass/style.scss', gulp.series('sass'));
});