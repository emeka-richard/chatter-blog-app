import React from 'react';
import FeedItem from '../../../components/App-Components/App-Navbar-components/Feed-item';
import BookmarkItem from '../../../components/App-Components/App-Navbar-components/Bookmark-item';
import TeamBlogsItem from '../../../components/App-Components/App-Navbar-components/TeamBlogs-item';
import DraftsItem from '../../../components/App-Components/App-Navbar-components/Drafts-item';
import AnalyticsItem from '../../../components/App-Components/App-Navbar-components/Analytics-item';
import style from "./appNavbar-aside.module.css";

const AppNavbarTopChamber: React.FC = function () {
  return (
    <nav className={style.appNav_overview_wrapper}>
      {/* Overview section header */}
      <h3 className={style.appNav_overview_h3}>Overview</h3>
      {/* Overview section container */}
      <div className={style.appNav_overview_container}>
        {/* Feed item */}
        <FeedItem />
        {/* Bookmark item */}
        <BookmarkItem />
        {/* Team blogs item */}
        <TeamBlogsItem />
        {/* Drafts item */}
        <DraftsItem />
        {/* Analytics item */}
        <AnalyticsItem />
      </div>
    </nav>
  );
}

export default AppNavbarTopChamber;
