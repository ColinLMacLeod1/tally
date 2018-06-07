import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import client from './client/reducer'
import signup from './signup/reducer'
import login from './login/reducer'
import tallies from './tally/talliesreducer'
import profile from './tally/profilereducer'

const IndexReducer = combineReducers({
	form,
	client,
	signup,
	login,
	tallies,
	profile,
})

export default IndexReducer
