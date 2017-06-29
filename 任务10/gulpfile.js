var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
// var browsersync = require('browser-sync').create();

gulp.task('default',['clean','baidujs','images','baiducss','auto','baiduhtml'], function() {
  // 将你的默认的任务代码放在这
  console.log('default');
});
// 压缩百度首页js
gulp.task('baidujs', function() {
  gulp.src('./app/workone.js')
	  .pipe(browserify())
	  .pipe(uglify())
	  .pipe(gulp.dest('./dest'));
});
// 压缩百度首页css
gulp.task('baiducss', function() {
  gulp.src('./app/workone.css')
	  .pipe(minifyCSS())
	  .pipe(gulp.dest('./dest'));
});

// 图片
gulp.task('images', () =>
    gulp.src('./app/img/*.+(navigation|vidio)/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dest/img'))
);
//压缩html
gulp.task('baiduhtml', function() {
	var options = {
		collapseWhitespace:true,
		removeComments:true,//清除html中注释的部分
	};
    return gulp.src('./app/*.html')
	    .pipe(htmlmin(options))
	    .pipe(gulp.dest('./dest'));
});
//自动刷新浏览器

gulp.task('auto', function () {
// 监听文件修改，当文件被修改则执行 css/js 任务
	gulp.watch('./app/workone.css', ['baiducss'])
	gulp.watch('./app/workone.js', ['baidujs'])
	gulp.watch('./app/workone.html', ['baiduhtml'])
	gulp.watch('./app/img/*', ['images'])
});
//清理文件
gulp.task('clean',function(){
	del([
		'./dest/*.js',
		'./dest/*.css',
		'./dest/*.html'
	]);
});




