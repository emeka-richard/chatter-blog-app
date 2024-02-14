import React from 'react'
import user3 from '../../../assets/images/user-3.png';
import user4 from '../../../assets/images/user-4.png';
import user2 from '../../../assets/images/user-2.png';
import style from "./blog-footer.module.css"


const Blogs: React.FC = function () {
    const title:string = "Write, read and connect with great minds on chatter"
    const note1:string = "Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals"

  return (
    <section className={style.blog_wrapper}>
        <div className={style.blog_container}>
            <div className={style.blog_img_section}>
                <div className={style.blog_two_imgs}>
                    <img src={user3} alt='avi1.png' className={style.blog_img_3}/>
                    <img src={user4} alt='avi2.png' className={style.blog_img_4}/>
                </div>
                <img src={user2} alt='avi3.png' className={style.blog_img_2}/>
            </div>
            <div className={style.blog_text_section}>
                <h2 className={style.blog_text_h2}>{title}</h2>
                <p className={style.blog_text_p}>{note1}</p>
                <button className={style.blog_btn}>Get started</button>
            </div>
        </div>
    </section>
  )
}

export default Blogs