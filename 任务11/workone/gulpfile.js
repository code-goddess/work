var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('default',['clean','html','sass','css','watch','image','cooperCompany','train','vipClass'], function() {
  // 将你的默认的任务代码放在这
});
// 压缩html
gulp.task('html', function() {
  // 将你的默认的任务代码放在这
  var options = {
		collapseWhitespace:true,
		removeComments:true,//清除html中注释的部分
	};
    return gulp.src('./app/*.html')
	    .pipe(htmlmin(options))
	    .pipe(gulp.dest('./dest'));
});
//压缩css
gulp.task('css',function(){
	gulp.src('./app/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./dest'));
});
//压缩sass
gulp.task('sass', function () {
  return gulp.src('./app/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dest'));
});
//压缩图片
gulp.task('image',function(){
	gulp.src('./app/image/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dest/image'));
});
gulp.task('cooperCompany',function(){
	gulp.src('./app/cooperCompany/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dest/cooperCompany'));
});
gulp.task('train',function(){
	gulp.src('./app/train/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dest/train'));
});
gulp.task('vipClass',function(){
	gulp.src('./app/vipClass/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dest/vipClass'));
});
// 监听
gulp.task('watch',function(){
	gulp.watch('./app/*.html',['html']);
	gulp.watch('./app/*.css',['css']);
	gulp.watch('./app/image/*',['image']);
	gulp.watch('./app/cooperCompany/*',['cooperCompany']);
	gulp.watch('./app/train/*',['train']);
	gulp.watch('./app/vipClass/*',['vipClass']);
	gulp.watch('./app/*.scss',['sass']);
});
//清理文件
gulp.task('clean',function(){
	del([
		'./dest/*.html',
		'./dest/*.css',
		'./dest/image/*',
		'./dest/cooperCompany/*',
		'./dest/train/*',
		'./dest/vipClass/*',
		'./dest/*.scss'
		]);
});