const withTM = require('next-transpile-modules')([
  '@ionic/react',
  '@ionic/core',
  '@stencil/core',
]);

module.exports = withTM({
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
});
