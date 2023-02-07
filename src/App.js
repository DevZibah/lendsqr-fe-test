import React, { useReducer } from 'react'

const App = () => {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state, action) {
    if (action.type === 'increment') {
      return { count: state.count + 1 }
    } else if (action.type === 'decrement') {
      return { count: state.count - 1 }
    } else {
      return state
    }
  }

  return (
    <div>
      <p onClick={() => dispatch({ type: 'increment' })}>Increase</p>
      <p onClick={() => dispatch({ type: 'decrement' })}>Decrease</p>
      <h1>{state.count}</h1>
    </div>
  )
}

export default App
