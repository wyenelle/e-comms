import styles from "./men.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import helper from "../../helper/helper";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Men = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,img: helper.Men,alt: 'woman clothing',price:1234
  },
  {
      id: 2,img: helper.MenBlack,alt: 'woman clothing',price:1234
  },
  {
      id: 3,img: helper.MenBrown,alt: 'woman clothing',price:1234
  },
  {
      id: 4,img: helper.Men,alt: 'woman clothing',price:1234
  },
  ]);
  return (
    <div className={styles.men}>
      <h2>Men</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        slidesPerView={1}
        loop
        modules={[Pagination, Navigation]}
        className={styles.container}
      >
        {/* first horizontal slide */}
       {
        slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
            <div className={styles.swipe}>
              <img src={slide.img} alt={slide.alt} className={styles.img}/>
            </div>
          </SwiperSlide>
          )
        }
        )
       }

        
      </Swiper>
    </div>
  );    
};

export default Men;
