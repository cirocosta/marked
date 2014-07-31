'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
	gulp.src('lib/marked.js')
		.pipe(uglify({mangle:true}))
		.pipe(gulp.dest('dist'));
});
