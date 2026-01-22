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
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const initializeStore = async () => {
			const banners = await fetchActiveBanners();
			const products = await fetchAllProducts();
			setAllBanners(banners);
			setProducts(products);
			console.log(products);
		};
		initializeStore();
	}, []);

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
			{banners.map((banner) => (
				<SwiperSlide key={banner.id}>
					<div className=" rounded-sm overflow-hidden w-full h-70 relative">
						<Image
							fill
							src={`${banner.imageUrl}`}
							alt="slige-image"
							className="h-full w-full object-cover"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
