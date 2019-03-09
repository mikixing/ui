let gulp = require('gulp');
let path = require('path');
let browserify = require('browserify');
let fs = require('fs');
let uglify = require('uglify-js');

let taskArr = ['html', 'js', 'css']
let src = path.join(__dirname, 'index.html')
let ENV = process.env.NODE_ENV;

gulp.task('default',taskArr);
gulp.task('html', e => {
	return gulp.src([src])
		.pipe(gulp.dest('dist'))
		
});
gulp.task('js', e => {
	let b = browserify({
		debug: ENV === 'dev',
		extensions: ['.js', '/index.js'],
		paths: ['./js'],

	});
	return b.add(path.join(__dirname, 'js/index.js'))
		.transform('babelify')
		.bundle((err, code) => {
			fs.writeFileSync(
				path.join(__dirname, 'dist/index.bundle.js'),
				ENV === 'product' ? uglify.minify(code.toString()).code : code
			);
		})

})
gulp.task('css', e => {
	return gulp.src('./**/*.css')
		.pipe(gulp.dest('dist'))		
});
