"use client"

import { brands } from "@/public/images";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

export const BrandsBanner = () => {

  return (
		<Swiper
			spaceBetween={4}
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			className="mySwiper"
			breakpoints={{
				320: {
					slidesPerView: 5,
					spaceBetween: 4,
				},
				640: {
					slidesPerView: 6,
					spaceBetween: 4,
				},
				768: {
					slidesPerView: 7,
					spaceBetween: 4,
				},
			}}>
			{brands.map((brand, index) => (
				<SwiperSlide key={index}>
					<div className=" rounded-sm overflow-hidden h-20 w-20 bg-zinc-100  flex items-center justify-center border border-zinc-300 relative">
						<Image
							fill
							src={brand.logo.src}
							alt="slige-image"
							className="h-15 w-15 object-contain"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
