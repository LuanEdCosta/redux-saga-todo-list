import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTaskById, requestFetchUser } from 'store/ducks/task'
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
  Error,
} from './styles'

const App = () => {
  const userNameRef = useRef(null)
  const [username, setUserName] = useState('')
  const [task, setTask] = useState('')

  const dispatch = useDispatch()
  const { taskList, showError } = useSelector(({ Task }) => Task)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !task.trim()) return

    const fetchUserAction = requestFetchUser(username, task)
    dispatch(fetchUserAction)

    setUserName('')
    setTask('')

    userNameRef.current.focus()
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
            ref={userNameRef}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Github Username"
          />

          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task"
          />
        </InputContainer>

        <AddButton type="submit">Add Task +</AddButton>

        {!!showError && <Error text="Uer not found!" />}

        <TodoListContainer>
          {!taskList.length && (
            <EmptyListMessage>No Task to Show</EmptyListMessage>
          )}

          {
            taskList.map((taskItem) => {
              const { id, userName, task, name, avatar } = taskItem
              const onRemove = () => handleRemoveTask(id)

              return (
                <TaskItem
                  key={id}
                  task={task}
                  imageSrc={avatar}
                  onRemoveClick={onRemove}
                  userName={name || userName}
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
