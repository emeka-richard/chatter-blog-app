import React, { useState } from "react";
import style from "./feeds-UI.module.css";
import graceIMG from "../../../assets/images/grace-article-img.png";
import oluwatobiIMG from "../../../assets/images/oluwatobi-article-img.png";
import adebobolaIMG from "../../../assets/images/adebobola-article-img.pmg.png";
import adebobolaAVI from "../../../assets/images/user-2.png";
import oluwatobiAVI from "../../../assets/images/user-4.png";
import graceAVI from "../../../assets/images/user-3.png";
import { ReactComponent as OpenBookIcon } from "../../../assets/svg/openbook.svg";
import { ReactComponent as CommentIcon } from "../../../assets/svg/commentIcon.svg";
import { ReactComponent as LikeIcon } from "../../../assets/svg/heartLoveIcon.svg";
import { ReactComponent as DarkChart } from "../../../assets/svg/darkClearChartIcon.svg";

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

const FeedsForYouContentUI: React.FC = function () {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleViewEnter = (): void => {
    setIsHovered(!isHovered);
  };

  // const handleMouseLeave = (): void => {
  //   setIsHovered(false);
  // };

  const getDate = (date: string) => {
    return new Date(date).toDateString().slice(4, 15);
  };

  const writerProps: WriterProps[] = [
    {
      id: 1,
      name: "Grace Ikpang",
      writerAVI: graceAVI,
      occupation: "Product designer",
      publicationTime: getDate("May 25, 2023"),
      readingTime: "10",
      publicatonArticleTitle: "Starting out as a Product designer",
      publicationArticle:
        "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.",
      publicationIMG: graceIMG,
      publicationComments: 200,
      publicationLikes: 120,
      publicationViews: 2980,
    },
    {
      id: 2,
      name: "Oluwatobi Ogunniyi",
      writerAVI: oluwatobiAVI,
      occupation: "Software developer",
      publicationTime: getDate("May 22, 2023"),
      readingTime: "10",
      publicatonArticleTitle: "Using CSS Selectors",
      publicationArticle:
        "Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages.",
      publicationIMG: oluwatobiIMG,
      publicationComments: 200,
      publicationLikes: 120,
      publicationViews: 2980,
    },
    {
      id: 3,
      name: "Adebobola Muhydeen",
      writerAVI: adebobolaAVI,
      occupation: "Political analyst",
      publicationTime: getDate("May 21, 2023"),
      readingTime: "10",
      publicatonArticleTitle:
        "The Impact of social media on Political discourse",
      publicationArticle:
        "In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world.",
      publicationIMG: adebobolaIMG,
      publicationComments: 200,
      publicationLikes: 120,
      publicationViews: 2980,
    },
  ];

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
                  <div title="View post analytics"
                    className={style._article_views_prop_container}
                  >
                    <DarkChart
                    />
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
            There's no publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsForYouContentUI;