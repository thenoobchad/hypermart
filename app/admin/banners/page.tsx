import { db } from "@/database";
import { BannerList } from "./_components/banner-list";
import { UploadBannerBtn } from "./_components/upload-banner";
import { asc } from "drizzle-orm";
import { banners } from "@/database/db/schema";

export default async function BannerPage() {
	const currentBanners = await db
		.select()
		.from(banners).orderBy(asc(banners.displayOrder));
		

	return (
		<main className="w-full m-4 flex flex-col">
			<div className="flex justify-between ">
				<h4>Banners (Slides)</h4>
				<UploadBannerBtn />
			</div>
			<BannerList banners={currentBanners} />
		</main>
	);
}
