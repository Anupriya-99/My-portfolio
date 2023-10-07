import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';

import Card from "./Card";

const Process = ()=>{
    return (
        <div className="m-4 h-[40rem] relative bg-processbackground bg-cover	bg-fixed	bg-no-repeat	">
            <h1 className="text-center text-4xl font-bold m-2 text-green-700 ">Our Process</h1>
            <div className='second'>
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
            clickable:true,
        }}
        loop={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        <SwiperSlide>
          <Card/>
        </SwiperSlide>
        
      </Swiper>
      </div>
        </div>
    )
}
export default Process;