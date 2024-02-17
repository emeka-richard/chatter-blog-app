import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as BookmarkIcon } from "../../../assets/svg/bookmarkIcon.svg"
import style from "./app-navbar-component.module.css"

const BookmarkItem:React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.bookmark_item_container}>
      <BookmarkIcon />
      <p className={style.bookmark_item_p}>Bookmarks</p>
    </NavLink>
  )
}

export default BookmarkItem