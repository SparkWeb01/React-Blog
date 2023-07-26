import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/Index'

import { privateRoutes, publicRoutes } from '../router/routes'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if(isLoading){
    return <Loader/>
  }
  return (
    isAuth
      ?
      <Routes>
      {privateRoutes.map(route => 
        <Route key={route.path} path = {route.path} element={<route.element />}/> 
      )}
      <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
      :
      <Routes>
      {publicRoutes.map(route => 
        <Route key={route.path} path = {route.path} element={<route.element />}/> 
      )}
      <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    
  )
}

export default AppRouter