import React from 'react';
import { ReactComponent as TrendUpIcon } from "../../../assets/svg/trendUp.svg";
import TrendingTagItem from '../../../components/App-Components/App-Navbar-components/TrendingTag-item';
import style from "./appNavbar-aside.module.css";

const AppNavbarTrendTagChamber: React.FC = function () {
  return (
    <nav className={style.appNav_trendTag_wrapper}>
      {/* Trending Tags header */}
      <div className={style.appNav_trendTag_header}>
        <h3 className={style.appNav_trendTag_h3}>Trending Tags</h3>
        {/* Trending tags icon */}
        <TrendUpIcon aria-label="Trending" role="img" />
      </div>
      {/* Trending tags container */}
      <div className={style.appNav_trendTag_container}>
        <TrendingTagItem />
      </div>
    </nav>
  );
}

export default AppNavbarTrendTagChamber;
