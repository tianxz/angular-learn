var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['copy']);

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
});

gulp.task('copy', function () {
    //angular
    gulp.src(
        [
            createPath.bower_components('angular/angular.js')
            , createPath.bower_components('angular/angular.min.js')
            , createPath.bower_components('angular/angular.min.js.map')
        ])
        .pipe(gulp.dest(createPath.vendor('/angular')));

    // jquery: {pathName: 'jquery', pathValue: 'vendor/jquery/jquery'},
});

var createPath = {
    bower_components: function (name) {
        return 'node_modules/' + name;
    },
    vendor: function (name) {
        return 'src/vendor/' + name;
    }
};