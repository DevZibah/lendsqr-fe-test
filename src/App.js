import React, { useContext } from 'react'
import { StoreContext } from './contexts/StoreContext'

const App = () => {
  const { count, add } = useContext(StoreContext)

  return (
    <div>
      <p onClick={add}>count</p>
      <h1>{count}</h1>
    </div>
  )
}

export default App
