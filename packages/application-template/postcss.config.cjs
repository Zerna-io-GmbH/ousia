const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const plugins = {
  tailwindcss: {},
  autoprefixer: {},
}
if (!dev) {
  plugins['cssnano'] = {
    preset: 'default'
  }
}

module.exports = {
  plugins
}
