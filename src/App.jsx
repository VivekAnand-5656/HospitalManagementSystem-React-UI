import { useState } from 'react'  
import { BrowserRouter, Form, Route, Router, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Patients from './Pages/Patients'
import Doctors from './Pages/Doctors'
import Appointments from './Pages/Appointments'
import Home from './Pages/Home'
import Billing from './Pages/Billing'
import Forms from './Pages/Forms'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() { 

  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='patients' element={<Patients/>} />
      <Route path='doctors' element={<Doctors/>} />
      <Route path='appointments' element={<Appointments/>} />
      <Route path='billing' element={<Billing/>} />
      <Route path='forms' element={<Forms/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />

      </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
