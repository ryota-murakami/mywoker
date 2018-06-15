// @flow
import React, { Component } from 'react'
import { Input, Button, Text } from '../element'
import { Container, InputSlice } from './style'
import TodoList from './TodoList'
import type { Todo, TodoList as TodoListType } from '../type'

const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

type State = {
  todos: TodoListType,
  currentInput: string
}

class App extends Component<void, State> {
  inputRef: ?HTMLInputElement = React.createRef()
  state: State = { todos: [], currentInput: '' }

  addTodo = () => {
    console.log(this.state.currentInput)
    const text = this.state.currentInput
    const newTodo: Todo = { id: ID(), text: text }
    this.setState({ todos: [...this.state.todos, newTodo], currentInput: '' })
  }

  _onChange = e => {
    this.setState({ currentInput: e.target.value })
  }

  render() {
    return (
      <Container>
        <InputSlice style={{ height: '30%' }}>
          <Input value={this.state.currentInput} onChange={this._onChange} />
          <Button onClick={this.addTodo}>push</Button>
        </InputSlice>
        {this.state.todos.length < 1 ? (
          <Text>let's enter todo!</Text>
        ) : (
          <TodoList data={this.state.todos} style={{ height: '70%' }} />
        )}
      </Container>
    )
  }
}

export default App