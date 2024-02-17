import React from 'react'
import AccountItem from '../../../components/App-Components/App-Navbar-components/Account-item'
import NotificationItem from '../../../components/App-Components/App-Navbar-components/Notification-item'
import LogoutItem from '../../../components/App-Components/App-Navbar-components/Logout-item'
import style from "./appNavbar-aside.module.css"


const AppNavbarPersonalChamber:React.FC = function() {
  return (
    <nav className={style.appNav_personal_wrapper}>
      <h3 className={style.appNav_personal_h3}>Personal</h3>
      <div className={style.appNav_personal_container}>
        <AccountItem />
        <NotificationItem />
        <LogoutItem />
      </div>
    </nav>
  )
}

export default AppNavbarPersonalChamber