import React from "react";
import style from "./appLayout.module.css";
import AppNavBarAsideLayout from "./App-Navbar-Aside-layouts/AppNavbar-Aside-Layout";
import AppNavbarTopLayout from "./AppNavbar-Top-Layout";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = function () {
  return (
    <main className={style.app_layout_main}>
      <AppNavBarAsideLayout />
      <AppNavbarTopLayout />
      <section className={style.app_layout_outlet_wrapper}>
        <div className={style.app_layout_outlet_container}>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default AppLayout;
