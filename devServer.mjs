/* eslint-disable no-console */
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.js'
import subval1MockData from './mock-data/subval1.json'
import val1MockData from './mock-data/mockSubFolder/val1.json'

const app = express()
const isProxy = process.env.IS_PROXY === 'true'

const port = process.env.PORT || 4200
const compiler = webpack(config)

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
                    case 'val1':
                        {
                            res.send(val1MockData)
                        }
                        break
                    case 'val2':
                        {
                            switch (param2) {
                                case 'subval1':
                                    {
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
