import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Labs } from '../pages/Labs/Labs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/labs' element={<Labs />}/>
        <Route path='*' element={<p>Not Found</p>}/>
      </Routes>
    </BrowserRouter>
  )
}

export { App }