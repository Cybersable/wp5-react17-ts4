const paths = require('./paths')
const { EsbuildPlugin } = require('esbuild-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: paths.entryPoint,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      widgets: paths.widgets,
    },
  },
  output: {
    path: paths.build,
    clean: true,
    filename: '[name].[contenthash].js',
    // assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      // Use esbuild to compile JavaScript & TypeScript
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        css: true, // Apply minification to CSS assets
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexHtml,
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['**/*.map'],
      protectWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: `${paths.public}/*.(ico|png|svg|json)`, to: '[name][ext]' },
      ],
    }),
  ],
}
