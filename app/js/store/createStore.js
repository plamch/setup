/* eslint-env browser */
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import Immutable from 'immutable'
import { actionCreators } from 'actions'
import { rootReducer } from 'reducers/index'
import { rootSaga } from 'saga'

export const configureStore = history => {
    let middlewares = []
    let enhancers = []

    const sagaMiddleware = createSagaMiddleware()

    middlewares.push(sagaMiddleware, routerMiddleware(history))
    enhancers.push(applyMiddleware(...middlewares))

    const composeEnhancers = composeWithDevTools({
        name: 'plam',
        serialize: { immutable: Immutable },
        actionCreators
    })
    const storeEnhancers = composeEnhancers(...enhancers)
    const store = createStore(rootReducer, storeEnhancers)

    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('reducers/index')

            store.replaceReducer(nextRootReducer)
        })
    }

    sagaMiddleware.run(rootSaga)

    return store
}
