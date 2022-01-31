let mix = require('laravel-mix');

//mix.js('src/app.js', 'dist').setPublicPath('dist').version();
mix.js('src/app.js', 'dist').vue({ version: 2 });