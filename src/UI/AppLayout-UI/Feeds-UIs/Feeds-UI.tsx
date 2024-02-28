import React from 'react'
import style from "./feeds-UI.module.css"
import FeedHeaderUI from './Feeds-header-UI'
import FeedsNavLinkUI from './Feeds-NavLink-UI'
import { Outlet } from 'react-router-dom'


const FeedsUI:React.FC = function () {
  return (
      <section className={style.feed_UI_wrapper}>
        <div className={style.feed_UI_container}>
          <FeedHeaderUI />
          <FeedsNavLinkUI />
          <Outlet />
        </div>
      </section>
  )
}

export default FeedsUI