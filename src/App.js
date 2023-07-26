import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'
import { AuthContext } from './context/Index'

function App() {
  const [isAuth,setIsAuth] = useState(false)
  const [isLoading,setLoading] = useState(true)
  useEffect(()=>{
    if(localStorage.getItem('auth'))
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
      setLoading(false)
  })
  return(
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
    
  )
}

export default App