import React from "react";
import style from "./authLayout.module.css";
import { Outlet } from "react-router-dom";

const AuthFrame: React.FC<{}> = function () {
  return (
    <section className={style.frame_wrapper}>
      {/* Outlet renders the child routes */}
      <Outlet />
    </section>
  );
};

export default AuthFrame;
