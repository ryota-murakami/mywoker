import React, { useReducer } from 'react'
import { Container, Layout } from './style'
import Icon from './Icon'
import DropZone from './DropZone'
import { ActionType, defaulState, reducer } from './reducer'

const DnDPage = () => {
  const [state, dispatch] = useReducer(reducer, defaulState)

  const onDragStart = (e: React.DragEvent) => {
    console.log('onDragStart')
    dispatch({ type: ActionType.ON_DRAG_START, payload: null })
  }

  const onDragEnter = (e: React.DragEvent) => {
    console.log('onDragEnter')
    dispatch({ type: ActionType.ON_DRAG_ENTER, payload: null })
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    console.log('onDragOver')
    dispatch({ type: ActionType.ON_DRAG_OVER, payload: null })
  }

  const onDrop = (e: React.DragEvent) => {
    console.log('onDrop')
    dispatch({ type: ActionType.ON_DROP, payload: null })
  }

  return (
    <Layout>
      <Container>
        <h1>drag and drop</h1>
        <main>
          <DropZone
            isDrop={state.isDrop}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            onDrop={onDrop}
            massage="Drop Here!"
          />
          {state.isDrop ? null : <Icon onDragStart={onDragStart} />}
        </main>
      </Container>
    </Layout>
  )
}

export default DnDPage
