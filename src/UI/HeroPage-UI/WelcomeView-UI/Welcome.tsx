import React from "react";
import style from "./welcome.module.css";
import { NavLink } from "react-router-dom";

const Welcome: React.FC = function () {
  const firstNote: string =
    "Welcome to Chatter: A Haven for Text-Based Content";
  const secondNote: string =
    "Unleash the Power of Words, Connect with Like-minded Readers and Writers";

  return (
    <section className={style.welcome_wrapper}>
      <div className={style.welcome_container}>
      <div className={style.welcome_inner_container}>
        <h2 className={style.welcome_h2}>{firstNote}</h2>
        <p className={style.welcome_p}>{secondNote}</p>
        <NavLink to={"/auth/sign/register"} className={style.welcome_button}>Get started</NavLink>
      </div>
      </div>
    </section>
  );
};

export default Welcome;
