/* eslint-disable no-console */
const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const isProxy = process.env.IS_PROXY === 'true'

const port = process.env.PORT || 4200
const config = require('./webpack.config.js')
const compiler = webpack(config)

const subval1MockData = require('./mock-data/subval1.json')
const val1MockData = require('./mock-data/mockSubFolder/val1.json')

app.use(webpackDevMiddleware(compiler, { logLevel: 'warn', publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({ type: '*/*' }))
app.use(cookieParser())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

const throttleTime = 200

if (!isProxy) {
    app.get('/test', (req, res, next) => {
        try {
            setTimeout(() => {
                const { param1, param2 } = req.query

                switch (param1) {
                    case 'val1': {
                        res.send(val1MockData)
                    }
                        break
                    case 'val2': {
                        switch (param2) {
                            case 'subval1': {
                                res.send(subval1MockData)
                            }
                                break
                            default: {
                                next()
                            }
                        }
                    }
                        break
                    default: {
                        next()
                    }
                }
            }, throttleTime)
        } catch (error) {
            res.status(500).send(error.stack)
        }
    })
}

app.use('/*', (req, res) => {
    res.sendFile(path.resolve('app/', 'index.html'))
})

app.listen(port, error => {
    if (error) {
        throw error
    }

    console.log('Express server listening on port', port)
})
