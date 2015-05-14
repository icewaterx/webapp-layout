var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function(){
	return sass('sass/').pipe(gulp.dest('build/'));
})

gulp.task('prefix',function(){
    return gulp.src('build/app.css').pipe(autoprefixer({
        browsers:['last 4 versions'],
        cascade: false
    }))
        .pipe(gulp.dest('build/prefix'));
})

gulp.task('watch',function(){
	gulp.watch('sass/*',['sass']);
	gulp.watch('build/app.css',['prefix']);
})

