import React from 'react'
import Header from './Header'

const Layouts = ({children}) => {
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  )
}

export default Layouts
