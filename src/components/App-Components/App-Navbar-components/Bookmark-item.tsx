import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BookmarkIcon } from "../../../assets/svg/bookmarkIcon.svg";
import style from "./app-navbar-component.module.css";

const BookmarkItem: React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.bookmark_item_container} aria-label="Bookmarks">
      {/* Bookmark Icon */}
      <BookmarkIcon aria-hidden="true" />
      {/* Text for Bookmarks */}
      <p className={style.bookmark_item_p}>Bookmarks</p>
    </NavLink>
  );
}

export default BookmarkItem;
