//config
//var fs=require('fs');

var gulp = require('gulp');
var jade = require('gulp-jade');
var server = require('gulp-server-livereload');
var stylus=require('gulp-stylus');
var sourcemaps=require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

//---------------------------------------


//TASKS

//jade compile
gulp.task('jade-compile',function(){
  gulp.src('source/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/'));
});
//--------------------------------

//stylus-compile
gulp.task('stylus-compile',function(){
  gulp.src('source/styles/main.styl')
    .pipe(sourcemaps.init())
      .pipe(stylus({
        compress:true
      }))
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest('dist/css/'))
});
//------------------------------------

//uglify
gulp.task('uglify',function(){
  gulp.src('source/js/lib/app/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/lib/app'))
});
//----------------------------------------

//web-server
gulp.task('web-server',function(){
  gulp.src('dist')
    .pipe(server({
      livereload:true,
      open:true,
      host:'localhost',
      port:'8000',
      defaultfile:'index.html',
      log:'debug'
    }));
});
//-----------------------------------------

//PRODUCTION TASKS
//min css
gulp.task('min-css',['sass-compile'],function(){
  gulp.src('dist/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css/'));
});
//---------------------------------------------

//watch changes
gulp.task('watch',function(){
  //watch jade
  gulp.watch(['source/templates/*.jade',
              'source/templates/layout/*.jade'],
              ['jade-compile']);
  //watch sass
  gulp.watch(['source/styles/*.styl'],
              ['stylus-compile']);

  gulp.watch(['source/js/lib/app/*.js'],['uglify'])
});
//-----------------------------------

//run gulp for start all task in that array
gulp.task('default',['watch','web-server']);
