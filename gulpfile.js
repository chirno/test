/*Every module that gulp uses has to be referenced here so that the system knows where to go to get stuff and what it is supposed to use.*/

const gulp = require('gulp');
/*For browser-sync documentations go here 
https://www.browsersync.io/docs*/
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/*Since we will be using a static server working off localhost:3000 we will be using the following to set up browser-sync.*/

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	/*A reload method that will watch for changes to any html file in our baseDir and reload the page when we perform changes.*/
	gulp.watch("*.html").on("change", reload);
});

gulp.task('default', ['browser-sync']);