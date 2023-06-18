import styles from "./header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay,Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Header = () => {
  return (
    <section className={styles.headerWrapper}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect={'fade'}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true }
        navigation={true}
        slidesPerView={1}
        // effect="fade"
        modules={[Pagination,Navigation,Autoplay,EffectFade]}
        className={styles.container}
      >
        <SwiperSlide className={styles.swiprSlide}>
          <div className={styles.box}>
            <div className={styles.text}>
              <h1>
              Home of all your needs
              </h1>
            </div>
            <div className={styles.img}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores vel quisquam ab facere earum velit accusantium ut recusandae molestias aspernatur similique quod, tempore possimus, unde nulla impedit hic. Est ab ratione excepturi in sit iure hic quia veniam quidem.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiprSlide}>
          <div className={styles.box}>
            <div className={styles.text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, tenetur, cum quae deserunt quos pariatur natus, maiores quia sunt ducimus recusandae obcaecati quam amet qui aut ut illo assumenda? Enim!
            </div>
            <div className={styles.img}>
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Header;
