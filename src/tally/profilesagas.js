import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import { profileReceived } from './actions'
import { PROFILE_REQUESTING, PROFILE_RECEIVED } from './constants'

function getProfile(id) {
	if (id == 5) {
		return 'Colin'
	} else {
		return 'Not 5'
	}
}

function* profileFlow(id) {
	const user = yield call(getProfile, id)
	yield put({ type: PROFILE_RECEIVED, user })
}

function* profileWatcher() {
	while (true) {
		const { id } = yield take(PROFILE_REQUESTING)

		const task = yield fork(profileFlow, id)
	}
}
export default profileWatcher
