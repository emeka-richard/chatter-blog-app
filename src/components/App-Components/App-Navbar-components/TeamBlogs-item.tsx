import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as TeamBlogIcon } from "../../../assets/svg/teamblogIcon.svg"
import style from "./app-navbar-component.module.css"

const TeamBlogsItem:React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.team_blog_item_container}>
      <TeamBlogIcon />
      <p className={style.team_blog_item_p}>Team blogs</p>
    </NavLink>
  )
}

export default TeamBlogsItem