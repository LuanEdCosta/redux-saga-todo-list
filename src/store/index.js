import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default Store
