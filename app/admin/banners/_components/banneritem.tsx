"use client"


import { toggleVisibility, updateOrder } from "@/lib/actions"
import { useState } from "react"

export const BannerItem = ({ banner }) => {
    const [isActive, setIsActive] = useState(banner.isActive)
    const [order, setOrder] = useState(banner.displayOrder)

    const handleToggle = async () => {
        const newState = !isActive;
        setIsActive(newState)
        await toggleVisibility(banner.id, newState)
    }


    const handleOrderChange = async (newOrder:number) => {
			
			setOrder(newOrder);
			await updateOrder(banner.id, newOrder)
		};

  return (
		<div className="flex gap-2 p-4 border-b">
			{/* Thumbnail */}
		  <img
			  src={banner.imageUrl}
				className="w-24 h-12 object-cover rounded  "
				alt="Banner"
			/>

			{/* Title/details */}

			<div className="flex-1">
				<p>{banner.title || "Untitled Slide"}</p>
				<p className="truncate max-w-[150px]">
					{banner.link || "Banner link is here so take note"}
				</p>
			</div>

			{/* visibility toggle */}
			<div className=" flex gap-2">
				<label>
					<input type="checkbox" onChange={ handleToggle} checked={isActive} />
				</label>
				<span>{isActive ? "Visible" : "Hidden"}</span>
			</div>

			{/* Order input */}

			<div>
				<span>Order: </span>
				<input
					type="number"
					value={order}
					onChange={(e) => handleOrderChange(parseInt(e.target.value))}
					className="w-14 border border-zinc-600 rounded-[2px] text-center text-sm "
				/>
			</div>
		</div>
	);
}
