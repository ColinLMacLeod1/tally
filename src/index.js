import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './history'

import App from './App'
import Login from './login'
import Signup from './signup'
import Widgets from './widgets'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import IndexReducer from './index-reducer'
import IndexSagas from './index-sagas'

import { checkAuthorization } from './lib/check-auth'

const sagaMiddleware = createSagaMiddleware()

/*eslint-disable*/
const composeSetup =
	process.env.NODE_ENV !== 'production' &&
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose
/*eslint-enable*/

const store = createStore(
	IndexReducer,
	composeSetup(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(IndexSagas)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							checkAuthorization(store.dispatch) ? (
								<Redirect to={{ pathname: 'widgets' }} />
							) : (
								<Redirect to={{ pathname: 'login' }} />
							)
						}
					/>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route
						path="/widgets"
						render={() =>
							checkAuthorization(store.dispatch) ? (
								<Widgets />
							) : (
								<Redirect to={{ pathname: 'login' }} />
							)
						}
					/>
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById('root'),
)
registerServiceWorker()
