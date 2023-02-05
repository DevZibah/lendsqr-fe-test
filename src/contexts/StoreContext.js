import React, { createContext, useState } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }

  return (
    <StoreContext.Provider value={{ count, add }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
