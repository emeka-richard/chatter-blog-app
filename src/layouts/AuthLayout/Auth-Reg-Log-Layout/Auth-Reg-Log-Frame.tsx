import React from "react";
// import { NavLink } from "react-router-dom";
import style from "./authLayout.module.css";
// import RegisterFormUI from "../../UI/AuthPage-UI/Register-UI/Register-UI";
import AuthLinks from "./Auth-Links";
import { Outlet } from "react-router-dom";

const AuthRegLogFrame: React.FC<{}> = function () {
  return (
    // <section className={style.frame_wrapper}>
      <div className={style.frame_inner_wrapper}>
        <AuthLinks />
        <Outlet/>
      </div>
    // </section>
  );
};

export default AuthRegLogFrame;
