import styles from './women.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useState } from 'react';
import helper from '../../helper/helper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Women = () => {
    const [slides, setSlides] = useState(
        [
            {
                id: 1,img: helper.Woman,alt: 'woman clothing',price:1234
            },
            {
                id: 2,img: helper.WomanBlack,alt: 'woman clothing',price:1234
            },
            {
                id: 3,img: helper.WomanBrown,alt: 'woman clothing',price:1234
            },
            {
                id: 4,img: helper.Woman,alt: 'woman clothing',price:1234
            },
        ]
    )
  return (
    <div className={styles.women}>
        <h2>Women</h2>
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
    loop
    slidesPerView={1}
    modules={[Pagination,Navigation]}
    className={styles.container}
  >
    {
        slides.map((slide) => {
            return(
                <SwiperSlide key={slide.id}>
                <div className={styles.swipe}>
                    <img src={slide.img} alt={slide.alt}  className={styles.img}/>
                </div>
            </SwiperSlide>
            )
        }
        )

        
    }
    
  </Swiper>
  </div>

  )
}

export default Women