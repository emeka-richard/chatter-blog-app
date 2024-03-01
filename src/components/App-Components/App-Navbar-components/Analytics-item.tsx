import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BlurChartIcon } from "../../../assets/svg/blurChartIcon.svg";
import style from "./app-navbar-component.module.css";

const AnalyticsItem: React.FC = function () {
  return (
    <NavLink to={"/analytics"} className={style.analytics_item_container} aria-label="Analytics">
      {/* Analytics Icon */}
      <BlurChartIcon aria-hidden="true" />
      {/* Text for Analytics */}
      <p className={style.analytics_item_p}>Analytics</p>
    </NavLink>
  );
}

export default AnalyticsItem;
