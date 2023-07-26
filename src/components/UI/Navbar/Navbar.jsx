import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Index'
import MyButton from '../Button/MyButton'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
        <MyButton style={{color: 'white', borderColor: 'white'}} onClick={logout}>Выйти</MyButton>
        <div className="navbar__links">
          <Link to={'/about'}>О Приложении</Link>
          <Link to={'/posts'}>Посты</Link>
        </div>
      </div>
  )
}

export default Navbar