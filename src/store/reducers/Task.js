import { ADD_TASK, REMOVE_TASK_BY_ID } from '../ActionTypes'

const initialState = {
  taskList: []
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_TASK: {
      const newState = { ...state }
      newState.taskList.push(payload)
      return newState
    }

    case REMOVE_TASK_BY_ID: {
      const newState = { ...state }
      newState.taskList = newState.taskList.filter(({ id }) => id !== payload)
      return newState
    }

    default: return state
  }
}
