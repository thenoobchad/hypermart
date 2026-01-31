import {
	Headphones,
	LayoutGrid,
	RotateCcw,
	Shield,
	ShoppingBag,
	Sparkles,
	Store,
	Truck,
} from "lucide-react";

import Link from "next/link";

import { HeroBanners } from "@/components/hero-banners";
import { ProductsShowcase } from "@/components/products-showcase";
import { BrandsBanner } from "@/components/brands-banner";
import { VendorShowcase } from "@/components/vendor-showcase";
import { Categories } from "@/components/categories";
import { fetchActiveBanners, fetchAllProducts } from "@/lib/query";
import Image from "next/image";

export default async function Home() {
	const products = await fetchAllProducts()
	const banners = await fetchActiveBanners()
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
						<Categories />
					</div>
				</div>
			</section>

			{/* BANNERS */}
			<section className=" px-4 flex flex-col gap-2 w-full">
				<div className="h-full w-full">
					<HeroBanners banners={banners} />
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
					<BrandsBanner />
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
					<VendorShowcase />
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
					<ProductsShowcase products={products} />
				</div>
			</section>


			<section className="my-10 flex flex-col gap-2 w-full h-[40vh] lg:h-[60vh] relative overflow-hidden">
				<Image
					src="/images/backgrounds/fashionbg.jpg"
					fill
					alt="banner_large"
					className="object-cover bg-auto bg-top"
				/> <div className="absolute text-center h-full w-full flex flex-col items-start justify-center pl-10 lg:pl-30 ">
					<h4 className="text-5xl lg:text-7xl text-white">23<sup>%</sup>Off Sales</h4>
					<p className="uppercase text-white font-semibold">Special Offers</p>
					<button className="bg-blue-600 px-5 py-2 mt-5 text-white rounded-sm">
Shop Now
					</button>
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
