"use client";

import { Button } from "@/components/ui/button";
import {
	Headphones,
	LayoutGrid,
	
	LocateFixed,
	RotateCcw,
	Shield,
	ShoppingBag,
	Sparkles,
	Store,
	Truck,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";


import Image from "next/image";

import { brands, categories, products } from "@/public/images";
import { fashionbg } from "@/public/images";
import Footer from "@/components/ui/footer";
import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchActiveBanners, fetchAllProducts } from "@/lib/query";


export default function Home() {
	const [banners, setBanners] = useState([]);
	const [products, setProducts] = useState([])

	useEffect(() => {
		const initializeStore = async () => {
			const banners = await fetchActiveBanners();
			const products = await fetchAllProducts()
			setBanners(banners);
			setProducts(products)
			console.log(products);
		};
		initializeStore();
	}, []);
	return (
		<main className="min-h-screen w-full">
			{/* CATEGORIES */}
			<section className=" px-4 flex flex-col gap-2 w-full pb-4">
				<div className="flex w-full overflow-hidden">
					<div className="flex flex-col items-center gap-1 mr-6 border-b-3">
						<div className="p-2 mt-1 bg-zinc-100 rounded-sm">
							<LayoutGrid size={20} />
						</div>
						<span className="text-sm">All</span>
					</div>
					<div className="flex gap-6 overflow-x-auto py-1">
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
											<div className="w-5 h-5 flex">
												<img
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
					</div>
				</div>
			</section>

			{/* BANNERS */}
			<section className=" px-4 flex flex-col gap-2 w-full">
				<div className="h-full w-full">
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
								<div className=" rounded-sm overflow-hidden w-full h-70">
									<img
										src={`${banner.imageUrl}`}
										alt="slige-image"
										className="h-full w-full object-cover"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* FEATURED BRANDS */}
			<section className=" px-4 flex flex-col gap-2 w-full">
				<div className="py-4 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-blue-500 rounded-full">
							<Sparkles className="text-white" size={20} />
						</div>
						<div>
							<h3 className="font-semibold">Featured Brands</h3>
							<p className="text-sm text-zinc-500">Trusted by millions</p>
						</div>
					</div>
					<span className="text-">See All</span>
				</div>
				<div className="h-full w-full">
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
								<div className=" rounded-sm overflow-hidden h-20 w-20 bg-zinc-100  flex items-center justify-center border border-zinc-300 ">
									<img
										src={brand.logo.src}
										alt="slige-image"
										className="h-15 w-15 object-contain"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* BROWSE STORES */}
			<section className=" px-4 flex flex-col gap-2 w-full h-full ">
				<div className="py-4 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-blue-500 rounded-full">
							<Store className="text-white" size={20} />
						</div>
						<div>
							<h3 className="font-semibold">Browse Stores</h3>
							<p className="text-sm text-zinc-500">
								Explore trusted local vendors near you
							</p>
						</div>
					</div>
					<span className="text-">See All</span>
				</div>
				<div className="h-full">
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
				</div>
			</section>

			{/* PRODUCTS */}
			<section className=" px-4 flex flex-col gap-2 w-full h-full ">
				<div className="py-2 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-blue-500 rounded-full">
							<Store className="text-white" size={20} />
						</div>
						<div>
							<h3 className="font-semibold">Wholesome Beginnings</h3>
							<p className="text-sm text-zinc-500">
								Healthy, tasty and ready in minutes.
							</p>
						</div>
					</div>
					<Link href="/products" className="text-">
						See All
					</Link>
				</div>
				<div className="h-full">
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
						{products.map((item, index) => (
							<SwiperSlide key={index}>
								<ProductCard  item={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			{/* Features */}
			<section className="my-10 px-4 flex flex-col gap-2 w-full h-full ">
				<div className="grid grid-cols-2 gap-4 grid-rows-2">
					<div className="flex flex-col gap-2 items-center">
						<div className="bg-blue-500 p-4 rounded-full text-white">
							<Truck />
						</div>
						<h1 className="text-md">Fast Delivery</h1>
						<p className="text-sm text-center text-zinc-600 w-60">
							Get your orders within 10-60 minutes. We ensure quick and reliable
							service to your doorstep
						</p>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="bg-blue-500 p-4 rounded-full text-white">
							<RotateCcw />
						</div>
						<h1 className="text-md">Easy Returns</h1>
						<p className="text-sm text-center text-zinc-600 w-60">
							Hassle-free returns within 24 hours. We prioritize your
							satisfaction with our flexible return policy.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="bg-blue-500 p-4 rounded-full text-white">
							<Shield />
						</div>
						<h1 className="text-md">Safe & Secure</h1>
						<p className="text-xs text-center text-zinc-600 w-60">
							Your data and payments are protected with industry standard
							security measures. Shop with confidence.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<div className="bg-blue-500 p-4 rounded-full text-white">
							<Headphones />
						</div>
						<h1 className="text-md">24/7 Support</h1>
						<p className="text-sm text-center text-zinc-600 w-60">
							Our dedicated support team is always ready to help you. Reach{" "}
							<br /> out anytime for assistance.
						</p>
					</div>
				</div>
			</section>
			{/* Delivery Info */}
			<section className="my-10 px-1 flex flex-col gap-2 w-full h-full">
				<div className="bg-blue-600 px-3 pt-4  rounded-sm flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<div className="p-2 bg-blue-500 rounded-full">
							<Truck className="text-zinc-50" />
						</div>
						<span className="text-zinc-50">Fast & Reliable</span>
					</div>
					<div>
						<h1 className="text-zinc-50 text-4xl font-semibold py-2">
							Fast & Reliable <span className="text-yellow-300">Delivery</span>
						</h1>
						<p className="text-zinc-50 mb-6">
							Safe, secure and timely shipping for every order
						</p>
						<button className="flex gap-2 px-6  py-2 bg-zinc-50 rounded-full items-center">
							<ShoppingBag size={16} />
							<span>Order Now</span>
						</button>
						<div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-150">
							<p className="flex gap-2 items-center whitespace-nowrap  text-zinc-50 text-sm">
								{" "}
								<span className="h-2 w-2 rounded-full bg-green-400 " />
								Real-time tracking
							</p>

							<p className="flex gap-2 items-center whitespace-nowrap text-zinc-50 text-sm">
								{" "}
								<span className="h-2 w-2 rounded-full bg-blue-400" />
								Secure packaging
							</p>

							<p className="flex gap-2 items-center whitespace-nowrap text-zinc-50 text-sm">
								{" "}
								<span className="h-2 w-2 rounded-full bg-red-400" />
								Contact-free delivery
							</p>
						</div>
						<div className="flex items-center justify-center h-70 ">
							<img
								src="/images/background.png"
								alt="delivery image"
								className=" h-full -my-18 object-cover "
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
