
"use client"

import { deleteProduct } from '@/lib/actions';
import { deleteImage } from '@/lib/cloudinary';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';


export const DeleteBtn = ({ productId }) => {
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", productId);

    const result = await deleteProduct(formData);
    if (result.success) {
      toast.success("Product Deleted Successfully")
    } else {
      toast.error("Error deleting product")
    }
  };

  return (
		<button className=" cursor-pointer" onClick={handleDelete}>
			<Trash className='text-red-600' size={16} strokeWidth={2}  />
		</button>
	);
}
