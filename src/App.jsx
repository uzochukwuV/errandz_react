
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import {BrowserRouter, Routes, Route, Link
  } from "react-router-dom"
import { useState } from 'react'
import Login from './pages/login/login';
import Home from './pages/home/home';
import Customer from './pages/signup/customer/customer';
import Vendor from "./pages/signup/vendor/vendor"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="sign/" element={<Customer />} />
        <Route path="signup/" element={<Vendor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
