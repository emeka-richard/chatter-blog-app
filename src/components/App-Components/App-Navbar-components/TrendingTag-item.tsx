import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css"

const TrendingTagItem: React.FC = function () {
  const trendingTags: string[] = ["Programming", "Data science", "Technology", "Machine Learning", "Politics"];

  return (
    <div className={style.trend_tag_item_container}>
      {trendingTags.map((tag, i) => (
        <NavLink to={"/feeds"} className={style.trend_tag_item_p} key={i}>{tag}</NavLink>
      ))}
      <div className={style.trend_tag_item_see_all_container}>
        <p className={style.trend_tag_item_see_all_p}>See all</p>
      </div>
    </div>
  );
}

export default TrendingTagItem;
