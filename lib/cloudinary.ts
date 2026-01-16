"use server"

import { v2 as cloudinary, UploadApiResponse } from "cloudinary"

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});


export async function uploadImage(formData: FormData) {
    const file = formData.get("image") as File
    if(!file) throw new Error("No file provided")


    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const result = await new Promise<UploadApiResponse | undefined>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { tags: ['nextjs-upload'] },
            (error, uploadResult: UploadApiResponse | undefined) => {
                if (error) return reject(error);
                resolve(uploadResult)
            }
        ).end(buffer)
    })


    return {url: result?.secure_url, publicId: result.public_id}
}

export async function deleteImage(publicId: string) {
    try {
        const result = await cloudinary.uploader.destroy(publicId)

        if (result.result !== "ok") {
            throw new Error("Cloudinary deletion failed")
        }

        return {success: true}
    } catch (error) {
        console.error("Delete error:", error)
    }
}