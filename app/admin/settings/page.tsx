export const dynamic = 'force-dynamic'

import { db } from "@/database";
import { BannerList } from "./_components/banner-list";
import { UploadBannerBtn } from "./_components/upload-banner";
import { asc } from "drizzle-orm";
import { banners } from "@/database/db/schema";

export default async function Settings() {
	// const Banners = (await db
	// 	.select()
	// 	.from(banners).orderBy(asc(banners.displayOrder))) || [] 

	const currentBanners =  []
		
	return (
		<section className="p-6 space-y-6">
			<div className="flex justify-between ">
				<h4>Banners (Slides)</h4>
				<UploadBannerBtn />
			</div>
			<BannerList banners={currentBanners} />
		</section>
	);
}
