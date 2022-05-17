const { src, dest, watch, series, parallel } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const auto = require('gulp-autoprefixer');
const sync = require('browser-sync');

const cssSass = () => {
  return src('./assets/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(auto({
      cascade: false
    }))
    .pipe(dest('./assets/css/'))
}

const syncFunc = () => {
  sync.init(syncOption);
}

const syncOption = {
  server: true,
  open: true,
  reloadOnStart: true,
  startPath: './',
  baseDir: './',
}

const syncReload = (done) => {
  sync.reload();
  done();
}

const watchFiles = () => {
  watch( './**/*.html', series(syncReload))
  watch( './**/*.js', series(syncReload))
  watch( './assets/sass/**/*.scss', series(cssSass, syncReload))
  watch( './assets/css/**/*', series(syncReload))
}

exports.default = series(series(cssSass), parallel(watchFiles, syncFunc));
