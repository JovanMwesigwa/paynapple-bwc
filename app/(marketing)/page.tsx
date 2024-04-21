"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import SwiperScreen from "./swiper-screen";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-1 bg-green-500 p-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SwiperScreen
            title="Struggling to track your onchain payments? 🥵"
            subTilte="Generate invoices for your customers and track payments onchain."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperScreen
            title="Don't send your wallet address 🤡"
            subTilte="Organise and account for all your payments with Paynapple."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperScreen
            title="Organises and puts every in one place 🥰"
            subTilte="There's no need to see and track onchain transaction hashes when you can use Paynapple's invoicing"
            btn
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePage;
