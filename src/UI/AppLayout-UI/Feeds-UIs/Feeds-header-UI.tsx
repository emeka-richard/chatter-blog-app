import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as PenIcon } from "../../../assets/svg/penIcon.svg"
import style from "./feeds-UI.module.css"

const FeedHeaderUI:React.FC = function () {
  return (
    <div className={style.feed_header_wrapper}>
        <div className={style.feed_header_texts_container}>
            <h3 className={style.feed_header_texts_h3}>FEED</h3>
            <p className={style.feed_header_texts_p}>Explore different content you’d love</p>
        </div>
        <NavLink to={"/publish"} className={style.feed_header_btn}>
            <PenIcon />
            <p className={style.feed_header_btn_p}>Post a content</p>
        </NavLink>
    </div>
  )
}

export default FeedHeaderUI