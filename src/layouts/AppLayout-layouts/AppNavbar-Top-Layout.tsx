import React from 'react'
import SearchBar from '../../components/App-Components/App-Top-Components/Search-bar'
import { ReactComponent as NotificationIcon } from "../../assets/svg/notificationBell.svg"
// import userImg from "../../assets/images/user-2.png"
import style from "./appLayout.module.css"

const AppNavbarTopLayout:React.FC = function () {
  return (
    <section className={style.appNav_top_layout_wrapper}>
      <div className={style.appNav_top_layout_searchbar_container}>
      <SearchBar />
      </div>
        <div className={style.appNav_top_layout_container}>
            <div className={style.appNav_top_layout_notificationIcon_container}>
                <NotificationIcon />
            </div>
            <div className={style.appNav_top_layout_img}></div>
        </div>
    </section>
  )
}

export default AppNavbarTopLayout