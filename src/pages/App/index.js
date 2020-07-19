import React, { useState } from 'react'
import {
  Container,
  InputContainer,
  Input,
  TodoListContainer,
  TodoContainer,
  Title,
  EmptyListMessage,
  AddButton,
  TaskItem,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { removeTaskById, requestFetchUser } from 'store/ducks/task'

const App = () => {
  const [username, setUsername] = useState('')
  const [task, setTask] = useState('')

  const dispatch = useDispatch()
  const { taskList } = useSelector(({ Task }) => Task)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !task.trim()) return
    const fetchUserAction = requestFetchUser(username, task)
    dispatch(fetchUserAction)
  }

  const handleRemoveTask = (id) => {
    const removeTaskAction = removeTaskById(id)
    dispatch(removeTaskAction)
  }

  return (
    <Container>
      <TodoContainer onSubmit={handleSubmit}>
        <Title>Redux Saga Todo List</Title>

        <InputContainer>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Github Username"
          />

          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task"
          />
        </InputContainer>

        <AddButton type="submit">Add Task +</AddButton>

        <TodoListContainer>
          {!taskList.length && (
            <EmptyListMessage>No Task to Show</EmptyListMessage>
          )}

          {
            taskList.map((taskItem) => {
              const { id, username, task, name, avatar } = taskItem
              const onRemove = () => handleRemoveTask(id)

              return (
                <TaskItem
                  key={id}
                  task={task}
                  imageSrc={avatar}
                  onRemoveClick={onRemove}
                  username={name || username}
                />
              )
            })
          }
        </TodoListContainer>
      </TodoContainer>
    </Container>
  )
}

export default App
