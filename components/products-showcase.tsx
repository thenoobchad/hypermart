"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { ProductCard } from "@/components/ui/product-card";

import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/lib/query";

type ProductType = {
	id: string;
	imageUrl: string;
	title: string;
	description: string;
	slug: string;
	price: string;
	stock: number;
	category: string;
};

type ProductsArr = ProductType[];

export const ProductsShowcase = ({ products }: { products: ProductsArr }) => {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		const initializeStore = async () => {
			setAllProducts(products);
		};
		initializeStore();
    }, [products]);
    
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
			{allProducts.map((item, index) => (
				<SwiperSlide key={index}>
					<ProductCard item={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
