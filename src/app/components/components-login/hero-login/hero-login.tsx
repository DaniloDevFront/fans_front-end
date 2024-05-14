import "./hero-login.scss";
import "swiper/css";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FAN_TOKEN, WORDS_FLAG } from "@/core/mocks/hero-login";

const HeroLogin = () => {
  return (
    <div className="hero-login">
      <div className="hero-login-content">
        <Image src={"/assets/svg/logo-letter.svg"} className="logo-hero" alt="logo" width={1000} height={1000}></Image>

        <Swiper spaceBetween={0} slidesPerView={"auto"} loop={true} className="swiper-fans-token">
          {FAN_TOKEN.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.src} className="fan-token" width={1000} height={1000} alt="fan-token"></Image>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper slidesPerView={"auto"} className="swiper-words-flag">
          {WORDS_FLAG.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="word-item d-center">
                {index > 0 && <i className="bi bi-circle-fill"></i>}
                <span>{item.text}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroLogin;
