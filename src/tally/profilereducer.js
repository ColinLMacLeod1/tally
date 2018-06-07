import { PROFILE_REQUESTING, PROFILE_RECEIVED } from './constants'

const initialState = {
	profileRequesting: false,
	user: 'test',
}

const reducer = function profileReducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case PROFILE_REQUESTING:
			return {
				profileRequesting: true,
				user: '',
			}
		case PROFILE_RECEIVED:
			console.log(action)
			return {
				profileRequesting: false,
				user: action.user,
			}
		default:
			return state
	}
}

export default reducer
