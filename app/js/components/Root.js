import React, { PureComponent } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { NotificationContainer } from 'react-notifications'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'
import { configureStore } from '~store/createStore'
import { withTracker } from '~higherOrderComponents'
import { SiteLoaderContainer, ServicesPageContainer } from '~containers'
import { SPLASH_PAGE, HOME_PAGE, SERVICE_PAGE } from '~constants/navigation'
import { getLink } from '~utils/getLink'
import { isProduction } from '~utils/utils'
import { Header, Footer, NotFound, Loader } from '.'

const buildVersion = process.env.BUILD_VERSION

const history = createHistory()

export const configureStoreWithBrowserHistory = () => configureStore(history)

export const defaultStore = configureStoreWithBrowserHistory()

const loadPage = pageName =>
    withTracker(
        Loadable({
            loader: () => import(`../containers/${pageName}Container`),
            loading() {
                return <Loader />
            },
        })
    )

export class Root extends PureComponent {
    render() {
        return (
            <Provider store={defaultStore}>
                <ConnectedRouter history={history}>
                    <div className="siteWrapper">
                        <Helmet>
                            {!isProduction() ? (
                                <meta name="robots" content="noindex, nofollow" />
                            ) : (
                                <link rel="stylesheet" href={'./bundle.css'} />
                            )}
                        </Helmet>
                        <NotificationContainer />
                        <SiteLoaderContainer />
                        <Header />
                        <Switch>
                            <Redirect exact from="/" to={getLink(SPLASH_PAGE)} />
                            <Route path={getLink(SPLASH_PAGE)} component={loadPage(SPLASH_PAGE)} />
                            <Route path={getLink(HOME_PAGE)} component={loadPage(HOME_PAGE)} />
                            <Route
                                path={getLink(`${SERVICE_PAGE}/:service`)}
                                component={withTracker(ServicesPageContainer)}
                            />
                            <Route component={withTracker(NotFound)} />
                        </Switch>
                        <Footer />
                        <div className="d-none">{buildVersion}</div>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}
