const { src, dest, watch, parallel, series } = require('gulp');

const scss           = require('gulp-sass');
const concat         = require('gulp-concat');
const browserSyns    = require('browser-sync').create();
const uglify         = require('gulp-uglify-es').default;
const autoprefixer   = require('gulp-autoprefixer');
const imagemin       = require('gulp-imagemin');
const del            = require('del');

function browsersyns(){
   browserSyns.init({
      server: {
         baseDir:'app/'
      }
   });
}
function images(){
   return src('app/img/**/*')
   .pipe(imagemin(
      [
         imagemin.gifsicle({interlaced: true}),
         imagemin.mozjpeg({quality: 75, progressive: true}),
         imagemin.optipng({optimizationLevel: 5 }),
         imagemin.svgo({
            plugins: [
               {removeViewBox: true},
               {cleanupIDs: false}
            ]
         })
      ]
   ))
   .pipe(dest('dist/img'))
}
 function cleanDist(){
   return del('dist')
 }

function scripts(){
   return src([
      'node_modules/jquery/dist/jquery.js',
      'app/js/main.js'
   ])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(dest('app/js'))
      .pipe(browserSyns.stream())
}

function build() {
   return src ([
      'app/css/style.min.css',
      'app/fonts/**/*',
      'app/js/main.min.js',
      'app/*.html',
   ], {base: 'app'})
      .pipe(dest('dist'))
}

function styles(){
   return src('app/scss/style.scss')
      .pipe(scss({outputStyle: 'compressed'}))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 10 version']
      }))
      .pipe(dest('app/css'))
      .pipe(browserSyns.stream())
}

function watching(){
   watch(['app/scss/**/*.scss'], styles);
   watch(['app/js/main.js', '!app/js/main.min.js'], scripts);
   watch(['app/*.html']).on('change',  browserSyns.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersyns = browsersyns;
exports.scripts = scripts;
exports.build = build;
exports.images = images;
exports.cleanDist = cleanDist

exports.build = series(cleanDist, images, build)
exports.default = parallel(styles, scripts, browsersyns, watching);


