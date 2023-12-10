import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/error'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Productos' element={<ItemListContainer/>}/>
          <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
