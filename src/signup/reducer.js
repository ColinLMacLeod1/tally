import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './constants'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

const reducer = function signupReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return {
        requesting: true,
        seccessful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      }
    case SIGNUP_SUCCESS:
      return {
        requesting: false,
        successful: true,
        messages: [{
          body: `Successfully created account for ${action.response.email}`,
          time: new Date()
        }],
        errors: [],
      }
    case SIGNUP_ERROR:
    return {
      requesting: false,
      successful: false,
      messages: [],
      errors: state.errors.concat([{
        body: action.error.toString(),
        time: new Date(),
      }]),
    }
    default:
      return state
  }
}

export default reducer
