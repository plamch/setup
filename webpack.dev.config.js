const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const dotEnvVarsObj = require('dotenv').config()

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

const API_PATH = '/v1' // only preceding slash '/', e.g. '/my/api/path'
const HOST_URL = '/'

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: [
        'webpack-hot-middleware/client', // second entry for hot module middleware
        '@babel/polyfill',
        './app/js',
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/',
    },
    stats: {
        colors: true,
        reasons: false,
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
                test: /\.css$/,
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BUILD_VERSION: JSON.stringify(buildVersion),
                API_URL: JSON.stringify(API_URL),
                API_PATH: JSON.stringify(API_PATH),
                HOST_URL: JSON.stringify(HOST_URL),
            },
        }),
        new ExtractTextPlugin(`bundle.css`),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false,
        }),
        new CopyWebpackPlugin([
            {
                from: `${path.join(__dirname, 'app', 'img')}`,
                to: 'img',
            },
            {
                from: `${path.join(__dirname, 'build-assets', 'favicon.ico')}`,
                to: './',
            },
        ]),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.png', '.jpg'],
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
    },
}
