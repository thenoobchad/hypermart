"use client";

import { fetchAllProducts } from "@/lib/query";
import { useCartStore } from "@/store/cart-store";
import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export const CartBadge = () => {
	
	const [products, setProducts] = useState([]);

	const { items, removeItem, clearCart, addItem } = useCartStore();
	const [isOpen, setIsOpen] = useState(false);
	const totalItems =
		items ? Object.values(items).reduce((a, b) => a + b, 0) : 0;

	useEffect(() => {
		const fetchProducts = async () => {
			const allProduct = await fetchAllProducts();
			setProducts(allProduct);
		};

		fetchProducts();
	}, []);

	const itemsInCart = useMemo(() => {
		if (!products || products.length === 0) return []
		
		const productLookup = products.reduce<
			Record<string, (typeof products)[number]>
		>((acc, product) => {
			acc[product.id] = product;
			return acc;
		}, {});

		return Object.keys(items).map((id) => {
			const product = productLookup[id]
			return { ...product, quantity: items[id] };
		});

		
	}, [items, products]);

	
	return (
		<>
			<div className="cursor-pointer relative" onClick={() => setIsOpen(true)}>
				<ShoppingCart size={20} className=" md:flex" fill="black" />
				{items && totalItems > 0 && (
					<div className="absolute -top-1.5 -right-1.5 bg-red-600 h-4 w-4 flex items-center justify-center rounded-full text-white text-xs">
						{totalItems}
					</div>
				)}
			</div>
			<div
				className={`w-screen z-80  backdrop-blur-xs right-0 top-0 fixed h-dvh flex justify-end transition-all delay-150 ${!isOpen ? "translate-x-full" : "translate-x-0"}`}>
				<div className="flex bg-white right-0 relative  z-99 w-[80dvw] sm:w-[60dvw] md:w-[40dvw] lg:w-[30dvw] p-4 flex-col gap-4">
					<div className="flex justify-between w-full items-start">
						<div>
							<h4 className="text-lg">Cart</h4>
							<p>Please login to continue</p>
						</div>
						<button onClick={() => setIsOpen(false)} className="cursor-pointer">
							<X />
						</button>
					</div>
					{itemsInCart && itemsInCart.length > 0 ?
						itemsInCart.map((item) => (
							<div
								key={item.id}
								className="flex gap-2 w-full  p-3 border border-zinc-200 rounded items-center">
								{/* Image */}
								<span>
									<img
										src={`${item.imageUrl}`}
										alt="product-image"
										className="h-14 w-16 bg-black rounded object-cover"
									/>
								</span>
								{/*  */}
								<div className="flex-1">
									{/* title & trash */}
									<div className="flex justify-between">
										<h4 className="truncate max-w-60 text-lg capitalize">{item?.title}</h4>
										<Trash size={18} onClick={() =>removeItem(item.id)}/>
									</div>

									{/* desc & Qty */}

									<div className="flex flex-col text-sm text-zinc-600">
										<p className="leading-3 mt-1">{item.description}</p>
										<div className="flex justify-between">
											{" "}
											<p>
												Qty: {item.quantity} Stock: {item.stock} available
											</p>{" "}
											<p>${item.price}/ item</p>
										</div>
									</div>

									{/* Btns and price */}
									<div className="flex justify-between">
										<div className="flex gap-2">
											<button onClick={() => removeItem(item.id)}>
												<Minus size={18} />
											</button>
											<span>1</span>
											<button onClick={() => addItem(item.id)}>
												<Plus size={18} />
											</button>
										</div>
										<span>${item.price}</span>
									</div>
								</div>
							</div>
						))
					:	"Nothing to see here"}

					{ itemsInCart.length != 0 && <div className="flex  w-full  p-3 border border-zinc-200 rounded flex-col text-sm gap-2">
						<div className="justify-between flex w-full">
							<h4>Items Total</h4>
							<h4>$ 656.00</h4>
						</div>
						<div className="justify-between flex w-full">
							<p>items</p>
							<p>{totalItems}</p>
						</div>
					</div>}

					<div className="mt-auto w-full flex gap-2">
						<button className="bg-blue-600 py-1.5 text-white rounded w-full">
							Please login to continue
						</button>
						<button
							className="bg-red-600 py-1.5 text-white rounded w-full"
							onClick={() => clearCart()}>
							Clear cart <span className="text-xs">({totalItems})</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
