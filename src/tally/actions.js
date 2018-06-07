import {
	TALLIES_RECEIVED,
	TALLIES_REQUESTING,
	TALLIES_REQUEST_UNSUCCESSFUL,
	PROFILE_REQUESTING,
	PROFILE_RECEIVED,
} from './constants'

export function talliesRequest(user) {
	return {
		type: TALLIES_REQUESTING,
		user,
	}
}

export function talliesReceived(tallies) {
	return {
		type: TALLIES_RECEIVED,
		tallies,
	}
}

export function talliesUnsuccessful(error) {
	return {
		type: TALLIES_REQUEST_UNSUCCESSFUL,
		error,
	}
}

export function profileRequest(id) {
	return {
		type: PROFILE_REQUESTING,
		id,
	}
}

export function profileReceived(user) {
	console.log(user)
	return {
		type: PROFILE_RECEIVED,
		user,
	}
}
