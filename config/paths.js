const path = require('path')
const root = path.resolve(__dirname, '..')

module.exports = {
  entryPoint: path.resolve(root, 'src', 'index.tsx'),
  build: path.resolve(root, 'build'),
  src: path.resolve(root, 'src'),
  public: path.resolve(root, 'src/app/public'),
  indexHtml: path.resolve(root, 'src/app/public/index.html'),
  app: path.resolve(root, 'src', 'app'),
  widgets: path.resolve(root, 'src', 'widgets'),
  shared: path.resolve(root, 'src', 'shared'),
  pages: path.resolve(root, 'src', 'pages'),
  entities: path.resolve(root, 'src', 'entities'),
  store: path.resolve(root, 'src', 'store'),
  features: path.resolve(root, 'src', 'features'),
}
