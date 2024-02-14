import React from "react";
import style from "./welcome.module.css";

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
        <button className={style.welcome_button}>Get started</button>
      </div>
      </div>
    </section>
  );
};

export default Welcome;
