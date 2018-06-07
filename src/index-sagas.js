import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'
import ProfileSaga from './tally/profilesagas'

export default function* IndexSagas() {
	yield [SignupSaga(), LoginSaga(), ProfileSaga()]
}
