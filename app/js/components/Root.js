import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { NotificationContainer } from 'react-notifications'
import { Helmet } from 'react-helmet'
import { configureStore } from 'store/createStore'
import { withTracker } from 'higherOrderComponents'
import { SiteLoaderContainer } from 'containers'
import { SplashPage, Header, Footer, NotFound } from '.'
import { SPLASH_PAGE } from 'constants/navigation'
import { getLink } from 'utils/getLink'
import { isProduction } from 'utils/utils'

const buildVersion = process.env.BUILD_VERSION

const history = createHistory()

export const configureStoreWithBrowserHistory = () => configureStore(history)

export const defaultStore = configureStoreWithBrowserHistory()

export const createRoot = (store = defaultStore, name = 'Root') => {
    return class Root extends Component {
        render () {
            return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <div className="siteWrapper">
                            <Helmet>
                                {isProduction()
                                    ? null
                                    : <meta name="robots" content="noindex, nofollow" />
                                }
                            </Helmet>
                            <NotificationContainer />
                            <SiteLoaderContainer />
                            <Header />
                            <Switch>
                                <Redirect exact from="/" to={getLink(SPLASH_PAGE)} />
                                <Route path={getLink(SPLASH_PAGE)} component={withTracker(SplashPage)} />
                                <Route component={withTracker(NotFound)} />
                            </Switch>
                            <Footer />
                            <div className="d-none">{buildVersion}</div>
                        </div>
                    </ConnectedRouter>
                </Provider>
            )
        }

        // noinspection JSUnusedGlobalSymbols
        static displayName = name
    }
}
