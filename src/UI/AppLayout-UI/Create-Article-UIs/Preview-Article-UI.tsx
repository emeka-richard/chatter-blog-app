import React from "react";
import style from "./preview.module.css";
import { NavLink } from "react-router-dom";

// interface ArticlePreviewProps {
//   content: string;
//   image?: File | null;
// }



const ArticlePreview: React.FC = () => {
  return (
    <>
      <div className={style.create_post_header}>
        <NavLink
          to={"/article/preview"}
          className={style.create_post_header_btn}
        >
          Preview
        </NavLink>
        <NavLink
          to={"/article/publish"}
          className={style.create_post_header_btn}
        >
          Publish
        </NavLink>
      </div>
      <section className={style.preview_article_container}>
        <h2>Article Preview</h2>
      </section>
    </>
  );
};

export default ArticlePreview;
