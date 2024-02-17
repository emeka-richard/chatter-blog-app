import React from 'react'
import style from "./feeds-UI.module.css"
import FeedHeaderUI from './Feeds-header-UI'

const FeedsUI:React.FC = function () {
  return (
      <section className={style.feed_UI_wrapper}>
        <FeedHeaderUI />
      </section>
  )
}

export default FeedsUI