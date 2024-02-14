import React from "react";
import contentCreationIcon from "../../../assets/images/content-1.png";
import style from "./about.module.css";

const AboutContentCreation: React.FC = function () {
  const title: string = "Content Creation";
  const note1: string = "Write nice and appealing with our in-built markdown, a rich text editor"

  return (
    <section className={style.content_creation_wrapper}>
      <div className={style.content_creation_icon_container}>
        <img
          src={contentCreationIcon}
          alt="analytic.png"
          className={style.content_creation_icon}
        />
      </div>
      <h3 className={style.content_creation_h3}>{title}</h3>
      <p className={style.content_creation_p}>{note1}</p>
    </section>
  );
};

export default AboutContentCreation;
