import React from "react";
import socialInteractionIcon from "../../../assets/images/community-1.png";
import style from "./about.module.css";

const AboutSocialInteraction: React.FC = function () {
  const title: string = "Social Interactions";
  const note1: string = "Users on the platform can interact with posts they like, comment and engage in discussions"

  return (
    <section className={style.social_interaction_wrapper}>
      <div className={style.social_interaction_icon_container}>
        <img
          src={socialInteractionIcon}
          alt="analytic.png"
          className={style.social_interaction_icon}
        />
      </div>
      <h3 className={style.social_interaction_h3}>{title}</h3>
      <p className={style.social_interaction_p}>{note1}</p>
    </section>
  );
};

export default AboutSocialInteraction;
