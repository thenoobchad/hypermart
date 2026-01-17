"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { File, Upload, X } from "lucide-react";
import { deleteImage, uploadImage } from "@/lib/cloudinary";
import { createProduct } from "@/lib/actions";
import Image from "next/image";
import { fetchAllProducts } from "@/lib/query";

export const ProductModal = ({ isOpen, setIsOpen }) => {
	const [error, setError] = useState<string | null>(null);
	
	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const [imageUrl, setImageUrl] = useState({
		url: "",
		publicId: "",
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(e.currentTarget);

		try {
			const { url, publicId } = await uploadImage(formData)
			formData.append("image_url", url);
			formData.append("image_id", publicId);
			
			
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

	const handleDelete = (publicId: string) => {
		setPreview(null);
		setImageUrl(null);
	};

	const handleImageUpload = (e) => {
		const file = e.target.files?.[0];
		if (!file) alert("Please upload image");

		setSelectedFile(file);
		setPreview(URL.createObjectURL(file));
	};

	return (
		<div className="absolute z-90 top-0 left-0 flex items-center justify-center w-full min-h-screen bg-zinc-950/30 overflow-auto">
			{loading ?
				<p className="bg-white p-4 rounded shadow">Creating product...</p>
			:	<form
					onSubmit={handleSubmit}
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
								{preview ?
									<div className="flex  h-30 items-center justify-center text-zinc-500 border-2 border-dotted w-full border-zinc-200 relative bg-zinc-100">
										<Image
											src={preview}
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
								:	<div className="flex items-center justify-center text-zinc-500 border-2 border-dotted border-zinc-200 py-4 bg-zinc-100">
										{loading ?
											"Uploading..."
										:	<div className="flex flex-col items-center ">
												<Upload size={40} />
												<p className="italic text-blue-700 underline">Click to upload image</p>
											</div>
										}
									</div>
								}
								<div>
									<input
										hidden
										id="image"
										name="image"
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
									required>
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
			}
		</div>
	);
};
