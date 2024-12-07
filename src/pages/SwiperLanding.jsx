import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import img1 from "../assets/burgutkoz_1.png";
import img2 from "../assets/zamindar.png";
import img3 from "../assets/boyqush_4.png";

const SwiperLanding = () => {
  return (
    <div className="vertical-swiper-container">
      <Swiper
        direction="vertical"
        spaceBetween={20}
        slidesPerView={1} 
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        loop={true} 
        modules={[Autoplay, Pagination, Scrollbar]} 
        className="custom-swiper"
      >
        {[img1, img2, img3].map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <a href={`/project/${index + 1}`} className="slide-link">
              <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
              <p className="view-more-text">ko'proq ko'rish</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperLanding;
