import React from 'react'
import { ReactComponent as AccountIcon } from "../../../assets/svg/humanAvatarIcon.svg"
import { NavLink } from 'react-router-dom'
import style from "./app-navbar-component.module.css"

const AccountItem:React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.account_item_container}>
      <AccountIcon />
      <p className={style.account_item_p}>Account</p>
    </NavLink>
  )
}

export default AccountItem  