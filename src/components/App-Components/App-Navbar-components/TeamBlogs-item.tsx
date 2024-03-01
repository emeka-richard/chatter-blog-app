import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as TeamBlogIcon } from "../../../assets/svg/teamblogIcon.svg";
import style from "./app-navbar-component.module.css";

const TeamBlogsItem: React.FC = function () {
  return (
    // Use NavLink for navigation with consistent styling and accessibility
    <NavLink to={"/feeds"} className={style.team_blog_item_container} aria-label="Team Blogs">
      {/* Team Blog Icon */}
      <TeamBlogIcon aaria-hidden="true" />
      {/* Text for Team blogs */}
      <p className={style.team_blog_item_p}>Team blogs</p>
    </NavLink>
  );
}

export default TeamBlogsItem;
