import styles from "./header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Header = () => {
  return (
    <section >
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true }
        slidesPerView={1}
        // effect="fade"
        modules={[Pagination,Autoplay,EffectFade]}
        className={styles.container}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.header}>
            <h1>Home of all your needs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloremque minima perspiciatis exercitationem, porro praesentium
              reiciendis quasi illo aut delectus!
            </p>
            <button className={styles.btn}>see more</button>
          </div>
          <div className={styles.col2}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide2}>
          <div className={styles.header}>
            <h1>Home of all your needs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloremque minima perspiciatis exercitationem, porro praesentium
              reiciendis quasi illo aut delectus!
            </p>
            <button className={styles.btn}>see more</button>
          </div>
          <div className={styles.col2}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.header}>
            <h1>Home of all your needs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloremque minima perspiciatis exercitationem, porro praesentium
              reiciendis quasi illo aut delectus!
            </p>
            <button className={styles.btn}>see more</button>
          </div>
          <div className={styles.col2}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.header}>
            <h1>Home of all your needs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloremque minima perspiciatis exercitationem, porro praesentium
              reiciendis quasi illo aut delectus!
            </p>
            <button className={styles.btn}>see more</button>
          </div>
          <div className={styles.col2}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.header}>
            <h1>Home of all your needs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloremque minima perspiciatis exercitationem, porro praesentium
              reiciendis quasi illo aut delectus!
            </p>
            <button className={styles.btn}>see more</button>
          </div>
          <div className={styles.col2}></div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.header}>
            <h1>Home of all your needs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              doloremque minima perspiciatis exercitationem, porro praesentium
              reiciendis quasi illo aut delectus!
            </p>
            <button className={styles.btn}>see more</button>
          </div>
          <div className={styles.col2}></div>
        </SwiperSlide>

       
      </Swiper>
    </section>
  );
};

export default Header;
