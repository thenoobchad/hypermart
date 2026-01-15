"use client";
import React, { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { File, Image, Package, Plus, Upload, UploadCloud, X } from "lucide-react";


type DataType = {
	title: string;
	slug: string;
	category: string;
	description: string;
}

export default function ProductsPage() {
	const [data, setData] = useState({
		title: "",
		slug: "",
		category: "",
		description: ""
	})
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname;

	return (
		<section className="h-full w-full">
			{isOpen && <ProductModal setOpen={setIsOpen} data={data} />}
			<div className="mx-4">
				{/* DISPLAY ALL PRODUCTS HERE */}
				<div className="flex w-full justify-between items-center">
					<h4 className="flex items-center gap-2">
						<Package size={18}/> All Products</h4>
					<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 px-3 rounded items-center flex gap-2 text-sm" onClick={() => setIsOpen(true)}>
						<Plus size={18} /> New Product
					</button>
				</div>

				<div className="w-full h-full items-center justify-center p-4 flex">
					<p>Nothing to see here </p>
				</div>
			</div>
		</section>
	);
}

const ProductModal = ({setOpen, data} : {setOpen: (arg:boolean) => void, data : DataType}) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const formData = new FormData()
		

	};

	const handleClose = () => {
		setOpen(false)
	};
	return (
		<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-zinc-950/30">
			<form onSubmit={handleSubmit} className="bg-white text-sm w-[80%] sm:max-w-120">
				<div className="flex justify-end  pt-4 px-4">
					<span onClick={handleClose}>
						<X size={16} />
					</span>
				</div>

				<div className="flex flex-col gap-3 py-3">
					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="image" className="text-sm flex flex-col">
							<div className=" pb-2 flex ">
								Upload Image<span className="text-red-600">*</span>
							</div>
							<div className="flex items-center justify-center text-zinc-500 border-2 border-dotted border-zinc-200 py-4 bg-zinc-100">
								<Upload size={40} />
							</div>
							<input hidden id="image" type="file" />
						</label>
					</div>

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Product Name<span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								type="text"
								className="outline-none"
								placeholder="Enter product name"
							/>{" "}
						</div>
					</div>

					<div className="flex w-full  gap-2 px-4">
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="phone" className="text-sm ">
								Price PU<span className="text-red-600">*</span>
							</label>
							<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded w-full">
								<input
									type="text"
									className="outline-none w-full"
									placeholder="$40"
								/>{" "}
							</div>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label htmlFor="phone" className="text-sm">
								Stock<span className="text-red-600">*</span>
							</label>
							<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded w-full">
								<input
									type="text"
									className="outline-none w-full"
									placeholder="20"
								/>{" "}
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Slug<span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								type="text"
								className="outline-none"
								placeholder="Enter your email"
							/>{" "}
						</div>
					</div>

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Category<span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<select name="" id="" className="w-full text-sm" required>
								<option value="" defaultChecked>
									Select Category
								</option>
								<option value="electronics">Electronics</option>
								<option value="fashion">Fashion</option>
								<option value="kids">Kids</option>
								<option value="beauty">Beauty</option>
								<option value="grocery">Grocery</option>
							</select>
						</div>
					</div>

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Description <span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<textarea
								rows={3}
								className="outline-none"
								placeholder="Description about the product"
							/>{" "}
						</div>
					</div>

					<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 rounded flex gap-2 justify-center items-center">
						<File size={18} />
						Create Product
					</button>
				</div>
			</form>
		</div>
	);
};
