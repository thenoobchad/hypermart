"use client";
import { fetchAllProducts } from "@/lib/query";
import { useCartStore } from "@/store/cart-store";
import {
	ArrowRight,
	ClipboardList,
	Clock,
	HelpCircle,
	Hourglass,
	Minus,
	Plus,
	ShoppingBag,
	Star,
	Store,
	Trash,
} from "lucide-react";
import { use, useEffect, useState } from "react";

type ProductType = {
	id: string;
	title: string;
	description: string;
};

export default function ProductPage({
	params,
}: {
	params: Promise<{ productId: string }>;
}) {
	const { productId } = use(params);
	const [products, setProducts] = useState([]);
	
	const { addItem, removeItem, items, clearCart } = useCartStore((state) => state)
	useEffect(() => {
		const fetchProduct = async () => {
			const allProducts = await fetchAllProducts();
			setProducts(allProducts);
		};

		fetchProduct();
	}, []);

	const [filteredItem]= products.filter((item) => item.id === productId);
	

	const [tab, setTab] = useState<"details" | "reviews" | "faqs" | "soldby">(
		"details",
	);

	const handleClick = (tab: "details" | "reviews" | "faqs" | "soldby") => {
		setTab(tab);
	};
	

	const existingCartItem = () => {
		if (!filteredItem) return 0
		
		if (!items[filteredItem.id]) {
			return 0
		}

		return items[filteredItem.id];
	}

	return (
		<main className="px-4">
			<div className=" w-full grid grid-cols-1 gap-6 sm:grid-cols-2">
				<div className="flex flex-col gap-2">
					<h4 className="my-2 text-sm">{filteredItem?.title}</h4>
					<div className="flex flex-col ">
						<img
							src={`${filteredItem?.imageUrl}`}
							alt="product-image"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col">
					<h4 className="text-[18px]">{filteredItem?.title}</h4>
					<p className="my-1 text-sm text-zinc-600">
						{filteredItem?.description}
					</p>
					<div className="flex gap-2 items-center mb-2 border-b border-zinc-300 py-4">
						<Star size={18} />{" "}
						<p className="flex gap-2 text-sm">
							0 Rating <span className="text-zinc-600">(0 Reviews)</span>|
							<span className="text-blue-500 text-[13px]">
								{filteredItem?.category}
							</span>
						</p>
					</div>
					<div className="flex gap-1 items-center ">
						<h4 className="text-lg">${filteredItem?.price}</h4>
						<sub className="line-through text-zinc-600">15999</sub>
						<sup className="text-zinc-600">(include a taxes)</sup>
					</div>
					<div className="flex w-full flex-col gap-4 ">
						<div className="flex justify-between w-full">
							<p className="text-sm text-zinc-600">
								Stock: {filteredItem?.stock} available
							</p>{" "}
							<p className="text-sm text-zinc-600">SKU: POT-2025-NB4</p>
						</div>
						<div className="flex w-full gap-2 justify-between items-center">
							<div className="flex gap-4 items-center">
								<p>Quantity:</p>
								<div className="flex gap-4 items-center">
									<button
										className="bg-blue-500 p-1 rounded-full text-white disabled:bg-blue-300"
										disabled={existingCartItem() === 0}
										onClick={() => removeItem(filteredItem.id)}>
										<Minus size={18} />
									</button>
									<span>{existingCartItem()}</span>
									<span
										className="bg-blue-500 p-1 rounded-full text-white"
										onClick={() => addItem(filteredItem?.id)}>
										<Plus size={18} />
									</span>
								</div>
							</div>
							<span className="text-blue-600 bg-blue-600/10 p-1 px-2 rounded text-sm flex gap-2">
								<Clock size={18} /> Delivery: 11 Mins
							</span>
						</div>
						<div className="flex w-full justify-between gap-4">
							<button
								className="flex gap-2 items-center bg-blue-500 text-zinc-50 py-1.5 px-3 w-full justify-center rounded-sm "
								onClick={
									existingCartItem() === 0 ?
										() => addItem(filteredItem.id)
									:	() => clearCart()
								}>
								{existingCartItem() === 0 ?
									<ShoppingBag size={20} />
								:	<Trash size={20} />}
								{existingCartItem() === 0 ?
									"Add to Bucket"
								:	"Remove from Bucket"}
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
								item.tag === tab &&
								"bg-white border border-zinc-300 text-zinc-950"
							} capitalize flex gap-2 items-center w-full justify-center p-1 px-2 hover:bg-white hover:text-zinc-950 rounded 
								hover:border
								hover:border-zinc-300
							text-zinc-700 text-sm`}
							onClick={() =>
								handleClick(
									item.tag as "details" | "reviews" | "faqs" | "soldby",
								)
							}>
							<item.icon size={20} />{" "}
							{item.tag === "soldby" ? "sold by" : item.tag}
						</button>
					))}
				</div>
				<div>
					{tab === "details" ?
						<Details />
					: tab === "reviews" ?
						<Reviews />
					: tab === "faqs" ?
						<Faqs />
					:	<Soldby />}
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
	return <div>details</div>;
};

const Reviews = () => {
	return <div>reviews</div>;
};

const Faqs = () => {
	return <div>faqs</div>;
};

const Soldby = () => {
	return <div>soldby</div>;
};
