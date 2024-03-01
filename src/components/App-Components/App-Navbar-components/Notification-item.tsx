import React from 'react';
import { ReactComponent as NotificationIcon } from "../../../assets/svg/notificationBell.svg";
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css";

const NotificationItem: React.FC = function () {
  return (
    <NavLink
      to={"/feeds"}
      className={style.notification_item_wrapper}
      aria-label="Notifications"
    >
      {/* Notification Icon */}
      <NotificationIcon aria-hidden="true" />
      {/* Text for Notifications */}
      <p className={style.notification_item_p}>Notifications</p>
    </NavLink>
  );
}

export default NotificationItem;
