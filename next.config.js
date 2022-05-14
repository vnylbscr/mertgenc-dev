/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = withImages({
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   reactStrictMode: true,
   fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
   webpack(config, _options) {
      return config;
   },
   i18n,
});
