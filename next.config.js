/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const path = require('path');
module.exports = withImages({
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   reactStrictMode: true,
   fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
   webpack(config, options) {
      return config;
   },
});
