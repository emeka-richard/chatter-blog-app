import React from "react";
import style from "./feeds-UI.module.css";
import ArticleUI from "./Article-UI";
import { WriterProps } from "./Feeds-WriterProps";


const FeedsFeaturedContentUI: React.FC = function () {
  const noItemMsg: string = "featured"

  const writerProps: WriterProps[] = [];

  return (
    <>
      {writerProps.length ? (
        writerProps.map((article) => (
          <section key={article.id} className={style._wrapper}>
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        <section className={style._no_article_wrapper}>
          <p className={style._no_article_p}>
            There's no {noItemMsg} publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsFeaturedContentUI;
