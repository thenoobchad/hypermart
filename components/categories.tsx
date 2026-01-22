"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { brands, categories, products } from "@/public/images";
import Image from "next/image";



export const Categories = () => {
  return (
		<Swiper
			slidesPerView={5}
			spaceBetween={30}
			breakpoints={{
				620: {
					slidesPerView: 6,
					spaceBetween: 25,
				},
			}}
			modules={[Pagination]}
			className="mySwiper">
			{categories.map((cat, index) => (
				<SwiperSlide key={index}>
					<div className="flex flex-col items-center gap-1">
						<div className="p-2 bg-zinc-100 rounded-sm w-fit">
							<div className="w-5 h-5 flex relative">
                                <Image
                                    fill
									src={`${cat?.img.src}`}
									alt="category image"
									className="object-cover"
								/>
							</div>
						</div>
						<span className="text-sm capitalize">{cat.name}</span>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
