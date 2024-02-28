import React, { useContext } from "react";
import style from "./preview.module.css";
import MDEditor from "@uiw/react-md-editor";
import { ArticleContext } from "../../../layouts/PublishArticleLayout";

import "./mdeditor.css";

const ArticlePreview: React.FC = () => {
  // Accessing the article context to get the article data
  const articleProps = useContext(ArticleContext);

  // If the article context is not available, throw an error
  if (!articleProps) {
    throw new Error("useContext must be used within a Provider");
  }

  // Destructuring articleData from articleProps
  const { articleData } = articleProps;

  return (
    <>
      {/* Section for previewing the article */}
      <section className={style.preview_article_wrapper}>
        <h2 className={style.preview_article_wrapper_h2}>Preview</h2>
        <div className={style.preview_article_container}>
          <div>
            {/* Display the article title */}
            <h2 className={style.preview_article_container_h2}>
              Title: {articleData && articleData["articleTitle"]}
            </h2>
            {/* Display the article tags */}
            <div className={style.each_tag_container}>
              <p className={style.each_tag_p}>
                Tags:
                {/* Iterate over the article tags and display each one */}
                {articleData.articleTag &&
                  articleData.articleTag.map((tag: any, i: number) => (
                    <span className={style.each_tag_span} key={i}>
                      {" "}
                      {tag} |{" "}
                    </span>
                  ))}
              </p>
            </div>
          </div>
          {articleData["coverImgUrl"] && articleData["articleContent"] && (
            <section className={style.preview_markdown_section}>
              {/* Display the article cover image */}
              {articleData["coverImgUrl"] && (
                <div
                  style={{
                    backgroundImage: `url(${articleData["coverImgUrl"]})`,
                  }}
                  className={style.img_holder}
                ></div>
              )}
              {/* Display the article content */}
              {articleData["articleContent"] && (
                <MDEditor.Markdown source={articleData.articleContent} />
              )}
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticlePreview;
