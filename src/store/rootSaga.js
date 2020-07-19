import { all } from 'redux-saga/effects'
import { watchFetchUser } from './ducks/task'

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
  ])
}
