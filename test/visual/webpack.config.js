const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassModuleImporter = require('sass-module-importer'); // eslint-disable-line import/no-unresolved

module.exports = {
    entry: resolve(__dirname, 'scripts/entry.js'),
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            { test: /\.twig$/, use: 'twig-loader' },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                importer: sassModuleImporter(),
                            },
                        },
                    ],
                }),
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'views/index.twig'),
        }),
        new ExtractTextPlugin('styles.css'),
    ],
};
