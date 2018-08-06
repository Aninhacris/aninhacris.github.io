var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var svgSprite = require('gulp-svg-sprite');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./out/assets/css'))
    .pipe(connect.reload())
    .pipe(browserSync.stream());

});

gulp.task('js',function(){
	gulp.src('./out/assets/js/*.js')
	.pipe(connect.reload())
	.pipe(browserSync.stream());
})


gulp.task('html',function(){
	gulp.src('./out/*.html')
	.pipe(connect.reload())
})



// Ouvindo arquivos
gulp.task('watch', function () {
  gulp.watch(['./src/sass/**/*.sass'], ['sass']);
  gulp.watch(['./out/*.html'], ['html']);
  gulp.watch(['./out/assets/js/*.js'], ['js']);
});


//servidor
gulp.task('serve', function(){
	connect.server({
		root: './out',
		livereload: true
	})
})

gulp.task('server', ['serve', 'watch']);


//Compatando imagens
gulp.task('imagemin', function(){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/assets/img/'))
});


//Criação de sprites SVG

var config = {
	mode: {
		symbol:{
			dest: 'sprite-svg',
			sprite: 'sprite.svg',
			example: true
		},

		svg: {
			xmlDeclaration: false,
			doctypeDeclaration: false,
		},

		shape:{
			dimension: {
				maxWidth	: 32,
				maxHeight	: 32
			}
		},
	}
};

gulp.task('sprites',function(){
	gulp.src('src/icons-svg/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('out/'))
});




// bowersyc


var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var connectPHP  = require('gulp-connect-php');

var paths = {
      php:['out/*.php'],
    };

gulp.task('php', function(){
    gulp.src(paths.php)
    .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
    gulp.watch(paths.php).on('change', function () {
      browserSync.reload();
    });

    gulp.watch(['./src/sass/**/*.sass'], ['sass']);
    gulp.watch(['./out/assets/js/*.js'], ['js']);
});

gulp.task('php', function() {
  connectPHP.server({
  	base: "out/"
  }, function (){
    browserSync({
      proxy: 'localhost:8000'
    });
  });
});

gulp.task('serverphp', ['php', 'watcher']);

