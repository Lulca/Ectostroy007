var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	concat			= require('gulp-concat'),
	uglify			= require('gulp-uglifyjs'),
	cssnano			= require('gulp-cssnano'),
	rename			= require('gulp-rename'),
	autoprefixer	= require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/libs/bootstrap/dist/js/bootstrap.min.js',
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest('app/css'))
});

gulp.task('css-main', function() {
	return gulp.src('app/css/main.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		// notify: false
	});
});

gulp.task('watch', ['browserSync', 'css-libs', 'css-main', 'scripts'], function() {
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
}); 

