const colors = require('./colors');
const fontFamily = require('./fontFamily');
const spacing = require('./spacing');

module.exports = {
   mode: 'jit',
   purge: [
      './src/*.{css,js}',
      './src/**/*.{css,js}',
   ],
   theme: {
      extend: {
         colors,
         fontFamily,
         spacing,
      },
   },
}
