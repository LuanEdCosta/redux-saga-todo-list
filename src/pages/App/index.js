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
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from 'store/actions/Task'
import TodoItem from 'components/TodoItem'

const App = () => {
  const [username, setUsername] = useState('')
  const [task, setTask] = useState('')

  const dispatch = useDispatch()
  const { taskList } = useSelector(({ Task }) => Task)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: new Date().getTime(),
      username,
      task,
    }

    const addTaskAction = addTask(newTask)
    dispatch(addTaskAction)
  }

  return (
    <Container>
      <TodoContainer onSubmit={onSubmit}>
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
              const { id, task } = taskItem
              return <TodoItem key={id} task={task} />
            })
          }
        </TodoListContainer>
      </TodoContainer>
    </Container>
  )
}

export default App
