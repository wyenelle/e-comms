import styles from "./men.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Men = () => {
  return (
    <div className={styles.men}>
        <h2>Men</h2>
      <Swiper
        pagination={{
            dynamicBullets: true,
            clickable: true
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation
        slidesPerView={1}
        modules={[Pagination,Navigation]}
        className={styles.container}
      >
        <SwiperSlide>
            <div className={styles.swipe}>
                <h1 className="">1</h1> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.swipe}>
                <h1>2</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.swipe}>
                <h1>3</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.swipe}>
                <h1>4</h1> 
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>

  );
};

export default Men;
