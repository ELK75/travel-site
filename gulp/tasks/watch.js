
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSynch = require('browser-sync').create();

gulp.task('watch', function() {

    browserSynch.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browserSynch.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSynch.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSynch.reload();
})