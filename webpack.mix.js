let mix = require('laravel-mix');

mix.js('src/flujo-svg/app.js', 'flujo-svg').setPublicPath('flujo-svg').version();
//mix.js('src/app.js', 'dist').vue({ version: 2 });
//mix.js('src/formulario.js', 'dist').vue({ version: 2 });