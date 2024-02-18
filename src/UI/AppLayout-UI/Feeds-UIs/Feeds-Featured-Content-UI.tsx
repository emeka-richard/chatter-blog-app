import React from "react";
import style from "./feeds-UI.module.css";
// import adebobolaIMG from "../../../assets/images/adebobola-article-img.pmg.png";
import { ReactComponent as OpenBookIcon } from "../../../assets/svg/openbook.svg";
import { ReactComponent as CommentIcon } from "../../../assets/svg/commentIcon.svg";
import { ReactComponent as LikeIcon } from "../../../assets/svg/heartLoveIcon.svg";
import { ReactComponent as DarkChart } from "../../../assets/svg/darkClearChartIcon.svg";
// import adebobolaAVI from "../../../assets/images/user-2.png";

interface WriterProps {
  id: number;
  name: string;
  writerAVI: string;
  occupation: string;
  publicationTime: string;
  readingTime: string;
  publicatonArticleTitle: string;
  publicationArticle: string;
  publicationIMG: string;
  publicationComments: number;
  publicationLikes: number;
  publicationViews: number;
}
const FeedsFeaturedContentUI: React.FC = function () {
  const noItemMsg: string = "featured"


  // const getDate = (date: string) => {
  //   return new Date(date).toDateString().slice(4, 15);
  // };

  const writerProps: WriterProps[] = [];

  return (
    <>
      {writerProps.length ? (
        writerProps.map((article) => (
          <section key={article.id} className={style._wrapper}>
            <div className={style._inner_wrapper}>
              <header className={style._header_container}>
                <div className={style._writer_infos_container}>
                  <img
                    src={article.writerAVI}
                    alt="writer.png"
                    className={style._writer_img}
                  />
                  <div className={style._writerTxt_infos}>
                    <h3 className={style._writerTxt_h3}>{article.name}</h3>
                    <p className={style._writerTxt_p}>
                      {article.occupation} .{article.publicationTime}
                    </p>
                  </div>
                </div>
                {/* <div className={style._article_title_container}> */}
                <h1 className={style._article_title}>
                  {article.publicatonArticleTitle}
                </h1>
                <div className={style._article_readTime_container}>
                  <OpenBookIcon />
                  <small className={style._article_readTime}>
                    {article.readingTime} mins read
                  </small>
                </div>
                {/* </div> */}
              </header>
              <article className={style._article_container}>
                <p className={style._article_main}>
                  {article.publicationArticle}
                </p>
                <div
                  className={style._article_img_div}
                  style={{ backgroundImage: `url(${article.publicationIMG})` }}
                ></div>
                <div className={style._article_props_wrapper}>
                  <div className={style._article_comment_prop_container}>
                    <CommentIcon />
                    <p className={style._article_comment_prop}>
                      {article.publicationComments}
                    </p>
                  </div>
                  <div className={style._article_likes_prop_container}>
                    <LikeIcon />
                    <p className={style._article_likes_prop}>
                      {article.publicationLikes}
                    </p>
                  </div>
                  <div className={style._article_views_prop_container}>
                    <DarkChart />
                    <p className={style._article_views_prop}>
                      {article.publicationViews}
                    </p>
                  </div>
                </div>
              </article>
            </div>
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
