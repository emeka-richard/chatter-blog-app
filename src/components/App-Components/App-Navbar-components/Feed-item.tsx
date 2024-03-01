import React from 'react';
import { ReactComponent as FeedIcon } from "../../../assets/svg/feedIcon.svg";
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css";

const FeedItem: React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.feed_item_container} aria-label="Feed">
      {/* Feed Icon */}
      <FeedIcon aria-hidden="true" />
      {/* Text for Feed */}
      <p className={style.feed_item_p}>Feed</p>
    </NavLink>
  );
}

export default FeedItem;
