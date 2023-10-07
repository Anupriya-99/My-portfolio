import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import {Autoplay,Navigation} from 'swiper/modules';

export default function App() {
  return (
    <div className='first'>
      <Swiper 
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Navigation]} className="mySwiper">
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
        <SwiperSlide><img className="h-96" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="dhale"></img></SwiperSlide>
      </Swiper>
    <div/>
    </div>
  );
}
