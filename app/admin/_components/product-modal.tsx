"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

import { File, Package, Plus, Upload, X } from "lucide-react";
import { deleteImage, uploadImage } from "@/lib/cloudinary";
import { createProduct } from "@/lib/actions";
import Image from "next/image";
import { fetchAllProducts } from "@/lib/query";



export const ProductModal = ({isOpen, setIsOpen}) => {

	const [error, setError] = useState<string | null>(null);
	const [uploading, setUploading] = useState(false);
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState({
		url: "",
		publicId: "",
	});

	const [data, setData] = useState({
		title: "",
		price: "",
		stock: "",
		slug: "",
		category: "",
		description: "",
	});
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("description", data.category);
		formData.append("category", data.category);
		formData.append("price", data.price);
		formData.append("stock", data.stock);
		formData.append("slug", data.slug);
		formData.append("image_url", imageUrl.url);
		formData.append("image_id", imageUrl.publicId);

		try {
			setLoading(true);
			const result = await createProduct(formData);

			if (result.success) {
				setIsOpen(false);
			}
		} catch (error) {
			console.error("Error creating product:", error);
			setError("Failed to create product. Please try again.");
		} finally {
			fetchAllProducts();
			setLoading(false);
		}
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setData({ ...data, [name]: value });
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setData({ ...data, [name]: value });
	};

	const handleAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setData({ ...data, [name]: value });
	};

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		setUploading(true);

		const formData = new FormData();
		formData.append("image", file);

		uploadImage(formData)
			.then((data) => {
				console.log("Image uploaded successfully:", data);
				setImageUrl(data);
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
			})
			.finally(() => {
				setUploading(false);
			});
	};

	const handleDelete = (publicId: string) => {
		deleteImage(publicId);
		setImageUrl(null);
    };


	return  (
		<div className="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen bg-zinc-950/30 overflow-auto">
			{loading ? (
				<p className="bg-white p-4 rounded shadow">Creating product...</p>
			) : (
				<form
					onSubmit={handleSubmit}
					className="bg-white text-sm w-[80%] sm:max-w-100 h-full sm:h-auto max-h-[90vh] rounded shadow-lg overflow-auto flex flex-col">
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
								{imageUrl.url ? (
									<div className="flex  h-30 items-center justify-center text-zinc-500 border-2 border-dotted w-full border-zinc-200 relative bg-zinc-100">
										<Image
											src={imageUrl.url}
											alt="Uploaded"
											className="h-full  object-cover"
											fill
										/>
										<span
											className="bg-red-600 text-white p-1 absolute top-0 left-0"
											onClick={() => handleDelete(imageUrl.publicId)}>
											<X size={18} />
										</span>
									</div>
								) : (
									<div className="flex items-center justify-center text-zinc-500 border-2 border-dotted border-zinc-200 py-4 bg-zinc-100">
										{uploading ? "Uploading..." : <Upload size={40} />}
									</div>
								)}
								<div>
									<input
										hidden
										id="image"
										type="file"
										onChange={handleImageUpload}
									/>
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
									className="outline-none"
									placeholder="Enter product name"
									value={data.title}
									onChange={handleInputChange}
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
										value={data.price}
										onChange={handleInputChange}
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
										value={data.stock}
										onChange={handleInputChange}
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
									placeholder="Enter slug"
									value={data.slug}
									onChange={handleInputChange}
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
									value={data.category}
									onChange={handleSelectChange}>
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
									value={data.description}
									onChange={handleAreaChange}
									rows={3}
									className="outline-none"
									placeholder="Description about the product"
								/>{" "}
							</div>
						</div>
						{error && <p className="text-red-600 px-4">{error}</p>}
						<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 rounded flex gap-2 justify-center items-center">
							<File size={18} />
							Create Product
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

