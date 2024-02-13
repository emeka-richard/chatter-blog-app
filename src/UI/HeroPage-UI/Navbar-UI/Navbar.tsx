import React from 'react'
import style from "./Navbar.module.css"
import NavbarTitle from './Navbar-Title'
import NavbarLinks from './Navbar-Links'
import NavbarAuths from './Navbar-Auths'

const Navbar: React.FC = function () {
  return (
    <nav className={style.navbar_wrapper}>
        <NavbarTitle />
        <div className={style.navbar_link_section}>
            <NavbarLinks />
            <NavbarAuths />
        </div>
    </nav>
  )
}


export default Navbar