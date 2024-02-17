import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const NavbarAuths: React.FC = function () {
  return (
    <div className={style.navbar_auths_wrapper}>
        <Link to={'/auth/sign/login'} className={style.auth_login}>Log In</Link>
        <Link to={'/auth/sign/register'} className={style.auth_signup}>Sign Up</Link>
    </div>
  )
}


export default NavbarAuths