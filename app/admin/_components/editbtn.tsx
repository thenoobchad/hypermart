"use client";

import { updateProduct } from "@/lib/actions";
import { Edit, Edit2, File, Upload, X } from "lucide-react";
import { FormEvent, useState } from "react";

export const EditBtn = ({ product }) => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	
	const [data, setData] = useState({
		title: product.title,
		description: product.description,
		price: product.price,
		stock: product.stock,
		category: product.category,
		slug: product.slug,
		imageUrl: product.imageUrl,
	});
	const handleEdit = async (e: FormEvent) => {
		e.preventDefault();
		
		const {success} = await updateProduct(data, product.id);
		if (success) {
			setIsOpen(false)
		}
	};

	const handleModal = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};
	
	return (
		<>
			<button className="text-blue-500 cursor-pointer" onClick={handleModal}>
				<Edit size={16} fill="blue" />
			</button>
			{isOpen && (
				<div className="absolute z-90 top-0 left-0 flex items-center justify-center w-full min-h-screen bg-zinc-950/30 overflow-auto">
					{/* <p className="bg-white p-4 rounded shadow">Creating product...</p> */}

					<form
						onSubmit={handleEdit}
						className="bg-white text-sm w-[80%] sm:max-w-100 h-full sm:h-auto max-h-[90vh] rounded shadow-lg overflow-auto flex flex-col">
						<div className="flex justify-end  pt-4 px-4">
							<span onClick={handleClose}>
								<X size={16} />
							</span>
						</div>

						<div className="flex flex-col gap-3 py-3">
							<div className="flex flex-col gap-2 px-4">
								<div className=" pb-2 flex ">
									Upload Image<span className="text-red-600">*</span>
								</div>
								<label htmlFor="image" className="text-sm flex flex-col">
									{data.imageUrl?
										<div className="flex  h-30 items-center justify-center text-zinc-500 border-2 border-dotted w-full border-zinc-200 relative bg-zinc-100">
											<img
												src={data.imageUrl}
												alt=""
												className="w-full h-full object-cover"
											/>
											<span className="bg-yellow-600 text-white p-1 absolute top-0 left-0">
												<Edit2 size={15} />
											</span>
										</div>
									:	<div className="flex items-center justify-center text-zinc-500 border-2 border-dotted border-zinc-200 py-4 bg-zinc-100">
											{loading ?
												"Uploading..."
											:	<div className="flex flex-col items-center ">
													<Upload size={40} />
													<p className="italic text-blue-700 underline">
														Click to upload image
													</p>
												</div>
											}
										</div>
									}
									<div>
										<input hidden id="image" name="image" type="file" />
									</div>
								</label>
							</div>

							<div className="flex flex-col gap-2 px-4">
								<label htmlFor="phone" className="text-sm">
									Product Name<span className="text-red-600">*</span>
								</label>
								<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
									<input
										name="title"
										type="text"
										onChange={(e) =>
											setData({ ...data, title: e.target.value })
										}
										className="outline-none"
										value={data.title}
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
											name="price"
											type="text"
											className="outline-none w-full"
											placeholder="$40"
											onChange={(e) =>
												setData({ ...data, price: e.target.value })
											}
											value={data.price}
										/>{" "}
									</div>
								</div>
								<div className="flex flex-col gap-2 w-full">
									<label htmlFor="phone" className="text-sm">
										Stock<span className="text-red-600">*</span>
									</label>
									<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded w-full">
										<input
											name="stock"
											type="text"
											className="outline-none w-full"
											placeholder="20"
											onChange={(e) =>
												setData({ ...data, stock: e.target.value })
											}
											value={data.stock}
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
										name="slug"
										type="text"
										className="outline-none"
										onChange={(e) => setData({ ...data, slug: e.target.value })}
										value={data.slug}
										placeholder="Enter slug"
									/>{" "}
								</div>
							</div>

							<div className="flex flex-col gap-2 px-4">
								<label htmlFor="phone" className="text-sm">
									Category<span className="text-red-600">*</span>
								</label>
								<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
									<select
										name="category"
										id=""
										className="w-full text-sm"
										required
										onChange={(e) =>
											setData({ ...data, category: e.target.value })
										}
										value={data.category}>
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
										name="description"
										rows={3}
										className="outline-none w-full"
										placeholder="Description about the product"
										onChange={(e) =>
											setData({ ...data, description: e.target.value })
										}
										value={data.description}
									/>{" "}
								</div>
							</div>
							{/* {error && <p className="text-red-600 px-4">{error}</p>} */}
							<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 rounded flex gap-2 justify-center items-center">
								<File size={18} />
								Update Product
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};
