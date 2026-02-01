"use client"

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SearchInput = () => {
  return (
      <Swiper
          direction={"vertical"}
          slidesPerView={1}
          loop={true}
          autoplay={{
              delay: 3500,
              disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ height: "100%" }}>
          <SwiperSlide>
              <p className="text-zinc-500">Search &quot;Milk&quot;</p>
          </SwiperSlide>
          <SwiperSlide>
              <p className="text-zinc-500">Search &quot;Tea&quot;</p>
          </SwiperSlide>
          <SwiperSlide>
              <p className="text-zinc-500">Search &quot;Milk&quot;</p>
          </SwiperSlide>
          <SwiperSlide>
              <p className="text-zinc-500">Search &quot;Sweet&quot;</p>
          </SwiperSlide>
      </Swiper>
  )
}
