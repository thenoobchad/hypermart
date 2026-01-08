"use client";

import { Button } from "@/components/ui/button";
import {
	ChevronDown,
	Clipboard,
	LayoutGrid,
	Locate,
	LocateFixed,
	LocateIcon,
	Menu,
	Search,
	Sparkles,
	Store,
	User,
} from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<header className=" p-4 flex flex-col gap-2 w-full">
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Menu />
						<span>Hyper</span>
					</div>
					<div>
						<User />
					</div>
				</div>
				<div className="flex w-full items-center gap-2">
					<div className="flex gap-2 ">
						<LocateIcon size={20} />
						<p className="text-sm">Port Harcourt, Rivers</p>
						<ChevronDown size={20} />
					</div>
					<div className="flex-1 w-full">
						<div className="text-sm flex items-center justify-between w-full  p-2 bg-zinc-100 rounded-sm">
							<div className="flex items-center gap-2 overflow-hidden h-5">
								<Search size={20} />
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
							</div>
							<Clipboard size={20} />
						</div>
					</div>
				</div>
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
									slidesPerView: 7,
									spaceBetween: 20,
								},
								820: {
									slidesPerView: 9,
									spaceBetween: 25,
								},

								1120: {
									slidesPerView: 12,
									spaceBetween: 25,
								},
							}}
							modules={[Pagination]}
							className="mySwiper">
							{Array.from({ length: 20 }).map((_, index) => (
								<SwiperSlide key={index}>
									<div className="flex flex-col items-center gap-1">
										<div className="p-2 bg-zinc-100 rounded-sm w-fit">
											<LayoutGrid size={20} />
										</div>
										<span className="text-sm">Electronics</span>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</header>
			<section className=" px-4 flex flex-col gap-2 w-full">
				<div className="h-full w-full">
					<Swiper
						slidesPerView={1}
						spaceBetween={4}
						modules={[Pagination]}
						className="mySwiper">
						{Array.from({ length: 20 }).map((_, index) => (
							<SwiperSlide key={index}>
								<div className=" rounded-sm overflow-hidden w-full md:max-h-100">
									<img
										src="/images/amori.jpg"
										alt="slige-image"
										className="h-full w-full "
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			<section className=" px-4 flex flex-col gap-2 w-full">
				<div className="py-4 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-blue-500 rounded-full">
							<Sparkles className="text-white" size={20} />
						</div>
						<div>
							<h3 className="font-semibold">Featured Brands</h3>
							<p className="text-xs text-zinc-500">Trusted by millions</p>
						</div>
					</div>
					<span className="text-">See All</span>
				</div>
				<div className="h-full w-full">
					<Swiper
						spaceBetween={4}
						modules={[Pagination]}
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
						{Array.from({ length: 20 }).map((_, index) => (
							<SwiperSlide key={index}>
								<div className=" rounded-sm overflow-hidden h-20 w-full">
									<img
										src="/images/amori.jpg"
										alt="slige-image"
										className="h-full w-full "
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<section className=" px-4 flex flex-col gap-2 w-full h-full py-9">
				<div className="py-4 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-blue-500 rounded-full">
							<Store className="text-white" size={20} />
						</div>
						<div>
							<h3 className="font-semibold">Browse Stores</h3>
							<p className="text-xs text-zinc-500">
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
											
												<p className="text-xs flex whitespace-nowrap gap-2 text-zinc-500 pb-4">
													<span>
														<LocateFixed size={18} />
													</span>
												<span>Kilimanjaro iwofe</span>
												<span className="bg-green-200 mx-4 px-2 rounded-md">Open</span>
												</p>
											
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div>hey there</div>
				</div>
			</section>
		</main>
	);
}
