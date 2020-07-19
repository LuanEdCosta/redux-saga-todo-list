import {
  ADD_TASK,
  REMOVE_TASK_BY_ID,
  USER_FETCH_REQUESTED,
  USER_FETCH_FAILED,
} from './types'

export const addTask = (userData, task) => {
  const { avatar_url, name, login } = userData
  const id = new Date().getTime()

  return {
    type: ADD_TASK,
    payload: {
      id,
      task,
      name,
      username: login,
      avatar: avatar_url,
    },
  }
}

export const removeTaskById = (taskId) => ({
  type: REMOVE_TASK_BY_ID,
  payload: taskId
})

export const requestFetchUser = (username, task) => ({
  type: USER_FETCH_REQUESTED,
  payload: {
    username,
    task,
  }
})

export const fetchUserFailed = () => ({
  type: USER_FETCH_FAILED,
})
