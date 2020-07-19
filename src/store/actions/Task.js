import { ADD_TASK, REMOVE_TASK_BY_ID } from '../ActionTypes'

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
})

export const removeTaskById = (taskId) => ({
  type: REMOVE_TASK_BY_ID,
  payload: taskId
})
