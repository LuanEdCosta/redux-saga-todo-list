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
      userName: login,
      avatar: avatar_url,
    },
  }
}

export const removeTaskById = (taskId) => ({
  type: REMOVE_TASK_BY_ID,
  payload: taskId
})

export const requestFetchUser = (userName, task) => ({
  type: USER_FETCH_REQUESTED,
  payload: {
    userName,
    task,
  }
})

export const fetchUserFailed = () => ({
  type: USER_FETCH_FAILED,
})
