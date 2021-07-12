const { writeTailwindToSass }   = require('./tailwind.export.js');

writeTailwindToSass();

// postcss.config.js
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }