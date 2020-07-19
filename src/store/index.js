import { createStore, combineReducers } from 'redux'
import Task from './reducers/Task'

const Reducers = combineReducers({
  Task,
})

export default createStore(Reducers)
