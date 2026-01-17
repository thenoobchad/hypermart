"use client"

import { BannerItem } from "./banneritem"

export const BannerList = ({banners}) => {
  return (
    <div>
      {banners.length > 0 ? (
        banners.map(banner => (
          <BannerItem key={banner.id} banner={banner} />
        ))
      ) : (
        <p>No banners uploaded yet.</p>
      )}
    </div>
  )
}
