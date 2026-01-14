import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/public/images";


export default function Products() {
  return (
		<div className="px-4">
			<h4>All Products</h4>
			<p className="text-sm text-zinc-600 mb-4">
				Discover our complete collection of{" "}
				<span className="text-blue-600">643 products</span>
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
				{products.map((item, i) => (
					<div key={i}>
						<ProductCard item={item} />
					</div>
				))}
			</div>
		</div>
	);
}
