import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountIcon } from "../../../assets/svg/humanAvatarIcon.svg";
import style from "./app-navbar-component.module.css";

const AccountItem: React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.account_item_container} aria-label="Account">
      {/* Account Icon */}
      <AccountIcon aria-hidden="true" />
      {/* Text for Account */}
      <p className={style.account_item_p}>Account</p>
    </NavLink>
  );
}

export default AccountItem;
