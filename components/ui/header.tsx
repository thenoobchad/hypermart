"use client";

import { categories } from "@/public/images";
import {
	ChevronDown,
	Clipboard,
	LayoutGrid,
	LocateIcon,
	LogIn,
	Menu,
	Search,
	ShoppingCart,
	Sun,
	User,
} from "lucide-react";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Breadcrumbs } from "./breadcrumbs";
import { CartBadge } from "./cart-badge";
import AuthModal from "../auth-modal";
import { ThemeSwitcher } from "../theme-switcher";
import Link from "next/link";

export const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const handleAuthModal = () => {
		setIsActive(true);
	};
	return (
		<>
			<header className=" p-4 flex flex-col gap-2 w-full">
				<div className="grid grid-cols-2 w-full">
					<div className="flex flex-col gap-2 md:flex-row justify-center md:justify-start">
						<div className="flex gap-4 items-center">
							<Menu className="md:hidden" />
							<Link href="/">Hyper</Link>
						</div>
						<div className="flex gap-2 items-center justify-start">
							<LocateIcon size={20} />
							<p className="text-sm">Port Harcourt, Rivers</p>
							<ChevronDown size={20} />
						</div>
					</div>
					<div className="flex flex-col md:flex-row-reverse items-end gap-2 justify-center  md:items-center">
						<div className="flex gap-4 items-center">
							<button onClick={handleAuthModal}>
								<User size={20} className="md:hidden" />
							</button>
							<ThemeSwitcher />
							<CartBadge />
							<button className="hidden md:flex  gap-2 items-center bg-blue-600/10 text-blue-600 text-sm px-4 py-1 rounded">
								<LogIn size={20} />
								Login
							</button>
						</div>
						<div className="flex-1 w-full">
							<div className="text-sm flex items-center justify-between w-full  p-2 bg-zinc-100 rounded-sm">
								<div className="flex items-center gap-6 overflow-hidden h-5">
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
				</div>

				{/* <Breadcrumbs /> */}
			</header>
			{isActive && (
				<div className="fixed z-90 top-0">
					<AuthModal isActive={isActive} setActive={setIsActive} />
				</div>
			)}
		</>
	);
};
