import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as BlurChartIcon } from "../../../assets/svg/blurChartIcon.svg"
import style from "./app-navbar-component.module.css"

const AnalyticsItem:React.FC = function () {
  return (
    <NavLink to={"/feeds"} className={style.analytics_item_container}>
      <BlurChartIcon />
      <p className={style.analytics_item_p}>Analytics</p>
    </NavLink>
  )
}

export default AnalyticsItem