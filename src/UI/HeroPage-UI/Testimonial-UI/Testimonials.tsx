import React from 'react';
import user1 from '../../../assets/images/user-1.png';
import style from "./testimonials.module.css"

interface TestimonialProps {
  name: string;
  workPlace: string;
  img: string;
  testimony: string;
}

const Testimonials: React.FC = () => {
  const userTestimonialProp: TestimonialProps = {
    name: 'Adebobola Muhydeen',
    workPlace: 'Software Developer at Apple',
    img: user1,
    testimony:
      'Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.',
  };

  return (
    <section className={style.testimonial_wrapper}>
      <img src={userTestimonialProp.img} alt="avi.png" className={style.testimonial_user_img}/>
      <div className={style.testimonial_texts_section}>
        <div className={style.testimonial_texts}>
          <p className={style.testimonial_texts_p1}>"{userTestimonialProp.testimony}"</p>
          <p className={style.testimonial_texts_p2}>
            <span className={style.testimonial_texts_span}>{userTestimonialProp.name}, </span>
            {userTestimonialProp.workPlace}
          </p>
        </div>
        <button className={style.testimonial_btn}>Join chatter</button>
      </div>
    </section>
  );
};

export default Testimonials;
