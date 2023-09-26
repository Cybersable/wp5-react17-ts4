const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entryPoint: path.resolve(root, 'src', 'index.tsx'),
  build: path.resolve(root, 'build'),
  src: path.resolve(root, 'src'),
  public: path.resolve(root, 'src/app/public'),
  indexHtml: path.resolve(root, 'src/app/public/index.html'),
  widgets: path.resolve(root, 'src', 'widgets'),
}
