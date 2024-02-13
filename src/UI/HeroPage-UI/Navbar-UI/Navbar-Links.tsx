import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const NavbarLinks: React.FC = function () {
  return (
    <div className={style.navbar_links_wrapper}>
        <Link to="#home" className={style.links_item}>Home</Link>
        <Link to="#about" className={style.links_item}>About Us</Link>
        <Link to="#contact" className={style.links_item}>Contact</Link>
        <Link to="#blogs" className={style.links_item}>Blogs</Link>
    </div>
  )
}


export default NavbarLinks