"use client";

import { uploadBanner } from "@/lib/actions";
import { uploadImage } from "@/lib/cloudinary";
import { File, Plus, Upload, X } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export const UploadBannerBtn = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 px-3 rounded items-center flex gap-2 text-sm"
				onClick={() => setIsOpen(true)}>
				<Plus size={18} /> Add New Slide
			</button>
			{isOpen && <BannerModal isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	);
};

const BannerModal = ({ isOpen, setIsOpen }) => {
	const [error, setError] = useState<string | null>(null);

	const [loading, setLoading] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedFile(file);
			setPreview(URL.createObjectURL(file));
		}
	};

	const handleClose = () => {
		setIsOpen(false);
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!selectedFile) return alert("Please select an image");

		setLoading(true);

		try {
			const formData = new FormData(e.currentTarget);
			formData.append("image", selectedFile);
			const { url } = await uploadImage(formData);
			formData.append("imageUrl", url);

			const { success } = await uploadBanner(formData);
			if (success) handleClose();
			
		} catch (error) {
			console.error(error);
			setError("Failed to upload banner");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen bg-zinc-950/30 overflow-auto backdrop-blur-xs">
			{loading ?
				<p className="bg-white p-4 rounded shadow">Uploading banner...</p>
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
								Upload Banner<span className="text-red-600">*</span>
							</div>
							<label htmlFor="image" className="text-sm flex flex-col">
								{preview ?
									<div className="flex  h-30 items-center justify-center text-zinc-500 border-2 border-dotted w-full border-zinc-200 relative bg-zinc-100">
										<Image
											src={preview}
											alt="preview"
											className="h-full  object-cover aspect-19/9"
											fill
										/>
										<span
											className="bg-red-600 text-white p-1 absolute top-0 left-0"
											onClick={() => setPreview(null)}>
											<X size={18} />
										</span>
									</div>
								:	<div className="flex items-center justify-center text-zinc-500 border-2 border-dotted border-zinc-200 py-4 bg-zinc-100">
										{loading ?
											"Uploading..."
										:	<div className="flex flex-col items-center">
												<Upload size={40} />
												<p className="text-center">Click to selecct image</p>
											</div>
										}
									</div>
								}

								<div>
									<input
										hidden
										id="image"
										type="file"
										onChange={handleFileChange}
										accept="image/*"
									/>
								</div>
							</label>
						</div>

						<div className="flex flex-col gap-2 px-4">
							<div className=" gap-2 bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
								<input
									name="title"
									type="text"
									className="outline-none w-full"
									placeholder="Slide Title"
								/>
							</div>
							<div className=" gap-2 bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
								<input
									name="link"
									type="text"
									className="outline-none w-full"
									placeholder="Link URL e.g. /shop"
								/>
							</div>
						</div>

						{error && <p className="text-red-600 px-4">{error}</p>}
						<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 rounded flex gap-2 justify-center items-center">
							<File size={18} />
							Save Banner
						</button>
					</div>
				</form>
			}
		</div>
	);
};
