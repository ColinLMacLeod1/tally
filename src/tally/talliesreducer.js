import {
	TALLIES_REQUESTING,
	TALLIES_RECEIVED,
	TALLIES_REQUEST_UNSUCCESSFUL,
} from './constants'

const initialState = {
	talliesRequesting: false,
	tallies: [],
	errors: [],
}

const reducer = function talliesReducer(state = initialState, action) {
	switch (action.type) {
		case TALLIES_REQUESTING:
			return {
				talliesRequesting: true,
				tallies: [],
				errors: [],
			}
		case TALLIES_RECEIVED:
			return {
				talliesRequesting: false,
				tallies: action.tallies,
				errors: [],
			}
		case TALLIES_REQUEST_UNSUCCESSFUL:
			return {
				talliesRequesting: false,
				tallies: ['test'],
				errors: action.errors,
			}
		default:
			return state
	}
}

export default reducer
