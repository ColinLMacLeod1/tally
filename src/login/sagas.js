import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import history from '../history'
//import { handleApiErrors } from '../lib/api-errors'

import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants'
import { setClient, unsetClient } from '../client/actions'
import { CLIENT_UNSET } from '../client/constants'

//const loginUrl = `${process.env.REACT_APP_API_URL}/api/Clients/login`
// function loginApi(email, password) {
// 	return fetch(loginUrl, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ email, password }),
// 	})
// 		.then(handleApiErrors)
// 		.then(response => response.json())
// 		.then(json => json)
// 		.catch(error => {
// 			throw error
// 		})
// }

function* logout() {
	yield put(unsetClient())
	localStorage.removeItem('token')
	history.push('/login')
}

function* loginFlow(email, password) {
	let token
	try {
		token = {
			id: 'iABHwh3hXLqBKFsMyNDjJFWEuBYBUIQsuIV2rvI3m6p99BjWnHKZHRyx6x75fDhO',
			ttl: 1209600,
			created: '2018-07-06T20:11:24.577Z',
			userId: 1,
		} //yield call(loginApi, email, password)
		yield put(setClient(token))
		yield put({ type: LOGIN_SUCCESS })
		localStorage.setItem('token', JSON.stringify(token))
		history.push('/tally')
	} catch (error) {
		yield put({ type: LOGIN_ERROR, error })
	} finally {
		if (yield cancelled()) {
			history.push('/login')
		}
	}
	return token
}

function* loginWatcher() {
	while (true) {
		const { email, password } = yield take(LOGIN_REQUESTING)
		const task = yield fork(loginFlow, email, password)
		const action = yield take([CLIENT_UNSET, LOGIN_ERROR])
		if (action.type === CLIENT_UNSET) yield cancel(task)
		yield call(logout)
	}
}

export default loginWatcher
