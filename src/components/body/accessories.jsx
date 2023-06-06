import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./accessories.module.css";

const Accessories = () => {
  return (
    <div className={styles.accessories}>
      <h2>Accessories</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        className={styles.container}
      >
        <SwiperSlide>
          <section className={styles.swipe}>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className={styles.swipe}>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
            <div className={styles.box}>

            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Accessories;
