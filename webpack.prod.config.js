const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const chalk = require('chalk')
const dotEnvVarsObj = require('dotenv').config()
const CleanWebpackPlugin = require('clean-webpack-plugin')

const buildVersion = '0.0.0'

const aliasObjectFactory = () => {
    dotEnvVarsObj.alias = {}

    if (dotEnvVarsObj.parsed) {
        const envVarsWithOriginalKeys = dotEnvVarsObj.parsed

        dotEnvVarsObj.alias = Object.keys(envVarsWithOriginalKeys).reduce(
            (acc, key) =>
                Object.assign({}, acc, {
                    [key
                        .toLowerCase()
                        .split('_')
                        .join('-')
                        .substring('path-to-'.length)]: envVarsWithOriginalKeys[key],
                }),
            {}
        )
    }

    return dotEnvVarsObj
}

const API_URL = '' // on the same server

const API_PATH = '/cep' // only preceding slash '/', e.g. '/my/api/path'
const HOST_URL = '/'

module.exports = {
    mode: 'production',
    context: __dirname,
    entry: ['@babel/polyfill', './app/js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader?name=[name].[ext]',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'plam',
            template: './app/index.ejs',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BUILD_VERSION: JSON.stringify(buildVersion),
                API_URL: JSON.stringify(API_URL),
                API_PATH: JSON.stringify(API_PATH),
                HOST_URL: JSON.stringify(HOST_URL),
            },
        }),
        new ExtractTextPlugin({ filename: 'bundle.css', disable: false }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false,
        }),
        new CopyWebpackPlugin([
            {
                from: `${path.join(__dirname, 'build-assets', '.htaccess')}`,
                to: './',
            },
            {
                from: `${path.join(__dirname, 'build-assets', 'favicon.ico')}`,
                to: './',
            },
            {
                from: `${path.join(__dirname, 'app', 'img')}`,
                to: 'img',
            },
        ]),
        new GenerateSW(),
    ],
    resolve: {
        extensions: ['.js', '.css', '.png', '.jpg'],
        alias: Object.assign({}, aliasObjectFactory().alias, {
            '~actions': path.resolve(__dirname, 'app/js/actions/'),
            '~components': path.resolve(__dirname, 'app/js/components/'),
            '~constants': path.resolve(__dirname, 'app/js/constants/'),
            '~containers': path.resolve(__dirname, 'app/js/containers/'),
            '~higherOrderComponents': path.resolve(__dirname, 'app/js/higherOrderComponents/'),
            '~reducers': path.resolve(__dirname, 'app/js/reducers/'),
            '~saga': path.resolve(__dirname, 'app/js/saga/'),
            '~store': path.resolve(__dirname, 'app/js/store/'),
            '~utils': path.resolve(__dirname, 'app/js/utils/'),
        }),
        symlinks: false,
    },
}
