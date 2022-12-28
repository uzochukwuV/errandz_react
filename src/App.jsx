
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import {BrowserRouter, Routes, Route, Link
  } from "react-router-dom"
import { useState } from 'react'
import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user.account/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
