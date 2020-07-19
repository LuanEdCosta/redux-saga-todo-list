import React from 'react'
import { Container } from './styles'

const ErrorBox = (props) => {
  const { className, text } = props
  return <Container className={className}>{text}</Container>
}

export default ErrorBox
