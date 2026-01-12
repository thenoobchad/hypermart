"use client";
import { use } from "react";

export default function ProductPage({
	params,
}: {
	params: Promise<{ productId: string }>;
}) {
	const { productId } = use(params);
	return <div>Product {productId}</div>;
}
