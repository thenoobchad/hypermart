
"use client"

import { deleteProduct } from '@/lib/actions';
import { deleteImage } from '@/lib/cloudinary';
import { Trash } from 'lucide-react';


export const DeleteBtn = ({ productId }) => {
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", productId);

    const result = await deleteProduct(formData);
    if (result.success) {
      
    } else {
      // Handle deletion error (e.g., show an error message)
    }
  };

  return (
		<button className="text-red-500" onClick={handleDelete}>
			<Trash size={16} />
		</button>
	);
}
