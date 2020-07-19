import React from 'react'
import {
  Container,
  Image,
  UserName,
  Task,
  RemoveButton,
  Content,
} from './styles'

const App = (props) => {
  const { className, imageSrc, userName, task, onRemoveClick } = props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>

      <Image src={imageSrc} alt={userName} />

      <Content>
        <UserName>{userName}</UserName>
        <Task>{task}</Task>
      </Content>
    </Container>
  )
}

export default App
