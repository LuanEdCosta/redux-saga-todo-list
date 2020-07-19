import { takeEvery, put, call } from 'redux-saga/effects'
import { USER_FETCH_REQUESTED } from './types'
import { addTask, fetchUserFailed } from './actions'
import { Server } from 'services'

export function* fetchUser(action) {
  try {
    const { userName, task } = action.payload
    const { data } = yield call(Server.get, `users/${userName}`)
    const addTaskAction = addTask(data, task)
    yield put(addTaskAction)
  } catch (e) {
    yield put(fetchUserFailed())
  }
}

export function* watchFetchUser() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser)
}
