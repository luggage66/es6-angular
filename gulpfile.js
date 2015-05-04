var gulp  = require('gulp')
	, babel = require('gulp-babel')
	, watch = require('gup-watch');

gulp.task('default', function() {
	return gulp.src('src/**/*.js').
		pipe(babel()).
		pipe(gulp.dest('app/'))
});
