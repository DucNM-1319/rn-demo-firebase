import firebase from 'react-native-firebase'
import { select, call, put, take } from 'redux-saga/effects'

import * as ActionTypes from './../actionTypes'
import * as Firebase from './../../api/Firebase'

export function* loginWithEmail(action) {
  try {
    // console.log('userSaga action --', action)
    const state = yield select()
    // console.log('UserSaga state-- ', state)
    const response = yield call(Firebase.User.loginWithEmail, action);
    console.log('User Saga Response', JSON.stringify(response))
    yield put({ type: ActionTypes.LOGIN_SUCCESS, response })
  } catch (error) {
    console.log('UserSaga', JSON.stringify(error))
    yield put({ type: ActionTypes.LOGIN_FAIL, error })
  }
}