import React from "react";
// import { NavLink } from "react-router-dom";
import style from "./authLayout.module.css";
// import RegisterFormUI from "../../UI/AuthPage-UI/Register-UI/Register-UI";
// import AuthLinks from "./Auth-Reg-Log-Layout/Auth-Links";
import { Outlet } from "react-router-dom";

const AuthFrame: React.FC<{}> = function () {
  return (
    <section className={style.frame_wrapper}>
        <Outlet/>
    </section>
  );
};

export default AuthFrame;
