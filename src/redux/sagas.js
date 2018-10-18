import {all, takeLatest, takeEvery} from 'redux-saga/effects';

import * as ActionTypes from './actionTypes'
import * as UserSaga from './../redux/user/saga'

export default function* rootSaga() {
    yield all([
        yield takeLatest(ActionTypes.LOGIN, UserSaga.loginWithEmail)
    ])
}