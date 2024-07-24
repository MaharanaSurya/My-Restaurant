import React from 'react'
import Layouts from './Components/Layout/Layouts'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import PaheNotfount from './Pages/PaheNotfount'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<PaheNotfount/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
