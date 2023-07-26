import React, { useContext } from 'react'
import MyButton from '../components/UI/Button/MyButton'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context/Index'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = e =>{
    e.preventDefault()
    setIsAuth(true)
  }
  return (
    <form onSubmit={login}>
        <h1>Страница для Авторизации</h1>
        <MyInput type='text' placeholder='Введите логин'></MyInput>
        <MyInput type='password'placeholder='Введите пароль'></MyInput>
        <MyButton>Войти</MyButton>
    </form>
  )
}

export default Login