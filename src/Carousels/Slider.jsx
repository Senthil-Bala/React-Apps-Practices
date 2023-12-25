import React from 'react';
import Hero from "../assests/hero.png";
import Right from "../assests/right.png";
import Left from "../assests/left.png";
import "./Slider.css";
// import "./swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    <div className='main'>
      <Swiper
        className='swiper'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="fade" 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={Hero} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Right} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Left} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider;
