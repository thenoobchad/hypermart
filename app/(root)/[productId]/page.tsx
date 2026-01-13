"use client";
import { AArrowDown, ArrowRight, ClipboardList, Clock, HelpCircle, Minus, Plus, Receipt, ShoppingBag, Star, Store, Timer } from "lucide-react";
import { use, useState } from "react";

export default function ProductPage({
	params,
}: {
	params: Promise<{ productId: string }>
}) {
	const { productId } = use(params);

	const [tab, setTab] = useState<"details" | "reviews" | "faqs" | "soldby">("details");

	const handleClick = (tab: "details" | "reviews" | "faqs" | "soldby" ) => { 
		setTab(tab)
	}
	
	return (
		<main className="px-4">
			Product {productId}
			<div className=" w-full flex flex-col md:flex-row gap-2 md:gap-6">
				<div className="flex flex-col gap-2">
					<h4 className="my-2 text-sm">
						Godrej Yummiez Cheese & Chicken Nuggets (Frozon)
					</h4>
					<div className="flex flex-col">
						<img src="/images/amori.jpg" alt="" />
					</div>
				</div>
				<div className="w-full flex flex-col">
					<h4 className="text-[18px]">
						Godrej Yummiez Cheese & Chicken Nuggets (Frozen)
					</h4>
					<p className="my-1 text-sm text-zinc-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci earum hic, accusantium dolores blanditiis.
					</p>
					<div className="flex gap-2 items-center mb-2 border-b border-zinc-300 py-4">
						<Star size={18} />{" "}
						<p className="flex gap-2 text-sm">
							0 Rating <span className="text-zinc-600">(0 Reviews)</span>|
							<span className="text-blue-500 text-[13px]">Godrej</span>
						</p>
					</div>
					<div className="flex gap-1 items-center ">
						<h4 className="text-lg">$1299.00</h4>
						<sub className="line-through text-zinc-600">15999</sub>
						<sup className="text-zinc-600">(include a taxes)</sup>
					</div>
					<div className="flex w-full flex-col gap-4 ">
						<div className="flex justify-between w-full">
							<p className="text-sm text-zinc-600">Stock: 5 available</p>{" "}
							<p className="text-sm text-zinc-600">SKU: POT-2025-NB4</p>
						</div>
						<div className="flex w-full gap-2 justify-between items-center">
							<div className="flex gap-4 items-center">
								<p>Quantity:</p>
								<div className="flex gap-4 items-center">
									<span className="bg-blue-500 p-1 rounded-full text-white">
										<Minus size={18} />
									</span>
									<span>2</span>
									<span className="bg-blue-500 p-1 rounded-full text-white">
										<Plus size={18} />
									</span>
								</div>
							</div>
							<span className="text-blue-600 bg-blue-600/10 p-1 px-2 rounded text-sm flex gap-2">
								<Clock size={18} /> Delivery: 11 Mins
							</span>
						</div>
						<div className="flex w-full justify-between gap-4">
							<button className="flex gap-2 items-center bg-blue-500 text-zinc-50 py-1.5 px-3 w-full justify-center rounded-sm">
								<ShoppingBag size={20} />
								Add to Bucket
							</button>
							<button className="flex gap-2 items-center bg-purple-500 text-zinc-50 py-1.5 px-3 w-full justify-center rounded-sm">
								Buy Now <ArrowRight />
							</button>
						</div>
						<div className="flex my-1">
							<span className="text-blue-600 bg-blue-600/10 p-1 px-2 rounded text-sm">
								#frozen-food
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* BOTTOM SECTION */}
			<div className="w-full justify-between flex">
				<h4>Similar Products</h4>
				<span>See All</span>
			</div>
			{/* TAB SECTION */}
			<div className="flex mt-4 w-full flex-col gap-2">
				<div className="flex    justify-between bg-zinc-100 p-1.5 rounded-sm gap-1">
					{tabs.map((item, i) => (
						<button
							key={i}
							className={`${
								item.tag === tab && "bg-white text-zinc-950"
							} flex gap-2 items-center w-full justify-center p-1 px-2 hover:bg-white hover:text-zinc-950 rounded text-zinc-700 text-sm`}
							onClick={() =>
								handleClick(
									item.tag as "details" | "reviews" | "faqs" | "soldby"
								)
							}>
							<item.icon size={20} /> {item.tag}
						</button>
					))}
				</div>
				<div>
					{tab === "details" ? (
						<Details />
					) : tab === "reviews" ? (
						<Reviews />
					) : tab === "faqs" ? (
						<Faqs />
					) : (
						<Soldby />
					)}
				</div>
			</div>
		</main>
	);
}

const tabs = [
	{
		tag: "details",
		icon: ClipboardList,
	},
	{
		tag: "reviews",
		icon: Star,
	},

	{
		tag: "faqs",
		icon: HelpCircle,
	},
	{
		tag: "soldby",
		icon: Store,
	},
];
const Details = () => {
	return <div>details</div>
}

const Reviews = () => {
	return <div>reviews</div>;
};

const Faqs = () => {
	return <div>faqs</div>;
};

const Soldby = () => {
	return <div>soldby</div>;
};