import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '/src/Home.jsx'
import Create from '/src/Create.jsx'
import Update from '/src/Update.jsx'
import Read from '/src/Read.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
    <BrowserRouter basename="/vite-crud-project/">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
      <Route path='/read/:id' element={<Read />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
