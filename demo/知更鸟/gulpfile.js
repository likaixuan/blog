const gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'), //压缩js
    autoprefixer = require('gulp-autoprefixer'),//添加前缀
    browserSync = require('browser-sync').create();
gulp.task('default', function () {
    // 将你的默认的任务代码放在这
    console.log(444);
});

//编译less
gulp.task('compileLess', function () {
    gulp.src('src/css/*.less')
        .pipe(less()).pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }));
})

//压缩js
gulp.task('compressJs', function () {
    gulp.src(['src/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));

})

//打包
gulp.task('build', ['compileLess,compressJs']);

//服务
gulp.task('server', function () {
    console.log(browserSync);
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


    gulp.watch('src/css/*.less', ['compileLess']);
    gulp.watch('src/js/*.js', ['compressJs']);
    gulp.watch("*.html").on("change", browserSync.reload);

})

gulp.task('default', ['server']);