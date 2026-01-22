"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { useEffect, useState } from "react";
import { fetchActiveBanners, fetchAllProducts } from "@/lib/query";
import Image from "next/image";

type BannerType = {
	id: string;
	imageUrl: string;
};

type BannerArr = BannerType[];

export const HeroBanners = ({ banners }: { banners: BannerArr }) => {
	const [allBanners, setAllBanners] = useState([]);
	

	useEffect(() => {
		const initializeStore = async () => {	
			setAllBanners(banners);
		
		};
		initializeStore();
	}, [banners]);

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={4}
			modules={[Pagination]}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			className="mySwiper">
			{allBanners.map((banner) => (
				<SwiperSlide key={banner.id}>
					<div className=" rounded-sm overflow-hidden w-full h-70 sm:h-90 lg:h-100 relative">
						<Image
							fill
							src={`${banner.imageUrl}`}
							alt="slige-image"
							className="h-full w-full object-cover bg-bottom"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
