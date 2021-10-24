/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
   reactStrictMode: true,
   fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
   webpack(config, options) {
      return config;
   },
});
