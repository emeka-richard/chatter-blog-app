import React from "react";
import style from "./analytics.module.css";
import { ReactComponent as OpenBookIcon } from "../../../assets/svg/openbook.svg";
import { writerProps } from "../Feeds-UIs/Feeds-WriterProps";
import { NavLink } from "react-router-dom";

const AnalyticsAllArticleUI: React.FC = function () {
  // Function to handle triggering each post activity
  const handleEachPostActivityTrigger = () => {
    // Implement functionality here if needed
  };

  return (
    <>
      {/* Map over each article to display analytics */}
      {writerProps.map((article, i) => (
        <article className={style.analytics_all_articles_wrapper} key={i}>
          {/* Display writer avatar */}
          <img
            src={article.writerAVI}
            alt="Writer Avatar"
            className={style.analytics_all_articles_img}
          />
          <div className={style.analytics_all_articles_container}>
            <div className={style.analytics_all_articles_inner_container}>
              {/* Display article title */}
              <h1 className={style.analytics_all_articles_h1}>
                {article.publicatonArticleTitle}
              </h1>
              {/* Display article reading time */}
              <div className={style.analytics_all_articles_readTime_container}>
                <OpenBookIcon />
                <small className={style.analytics_all_articles_readTime_small}>
                  {article.readingTime} mins read
                </small>
              </div>
              {/* Display article summary */}
              <p className={style.analytics_all_articles_p}>
                {article.publicationArticle.split(".", 2).join(".") + "."}
              </p>
            </div>
            {/* Link to view post activity */}
            <NavLink
              to={`/analytics/${article.id}`}
              className={style.analytics_all_articles_btn}
              onClick={handleEachPostActivityTrigger}
            >
              View post activity
            </NavLink>
          </div>
        </article>
      ))}
    </>
  );
};

export default AnalyticsAllArticleUI;
