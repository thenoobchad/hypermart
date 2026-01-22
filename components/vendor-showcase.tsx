"use client"

import { brands, categories, products } from "@/public/images";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { LocateFixed } from "lucide-react";


export const VendorShowcase = () => {
  return (
		<Swiper
			slidesPerView={2}
			spaceBetween={10}
			modules={[Pagination]}
			className="mySwiper"
			breakpoints={{
				320: {
					slidesPerView: 2,
					spaceBetween: 4,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 4,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 6,
				},
			}}>
			{Array.from({ length: 9 }).map((_, index) => (
				<SwiperSlide key={index}>
					<div className="w-full rounded-md overflow-hidden border border-zinc-300 mb-4">
						<img src="/images/amori.jpg" alt="slige-image" />
						<div className="relative">
							<div className="w-10 h-10 bg-amber-400 absolute -top-[50%] left-[5%] rounded-full outline-[3px] outline-amber-50" />
							<div className="flex flex-col p-2 mt-4">
								<h1 className="my-1 font-semibold text-sm">
									TechSphere Electronics
								</h1>

								<p className="text-xs flex whitespace-nowrap gap-2 text-zinc-500 pb-1 justify-between">
									<span className="flex gap-2">
										<LocateFixed size={18} />
										Kilimanjaro iwofe
									</span>
									<span className="bg-green-600/20 mx-4 px-1 rounded-sm">
										0 m
									</span>
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
