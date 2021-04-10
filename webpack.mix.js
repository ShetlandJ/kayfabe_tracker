let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix.browserSync({
  proxy: 'localhost:8000',
  notify: false
});

mix.react('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .purgeCss()
  .tailwind('tailwind.config.js')
  .options({
    hmrOptions: {
      port: 7000
    }
  })
  .webpackConfig({
    externals: [
      'child_process'
    ],
    node: {
      fs: 'empty'
    },
    output: {
      chunkFilename: 'assets/js/[name].js',
      publicPath: mix.config.hmr ? '//localhost:8080/' : '/'
    }
  }).sourceMaps();
