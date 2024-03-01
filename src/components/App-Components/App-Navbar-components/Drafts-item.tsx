import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as EnvelopIcon } from "../../../assets/svg/envelopIcon.svg";
import style from "./app-navbar-component.module.css";

const DraftsItem: React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.draft_item_container} aria-label="Drafts">
      {/* Envelop Icon */}
      <EnvelopIcon aria-hidden="true" />
      {/* Text for Drafts */}
      <p className={style.draft_item_p}>Drafts</p>
    </NavLink>
  );
}

export default DraftsItem;
