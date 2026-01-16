
"use client"

import { Edit } from "lucide-react";

export const EditBtn = ({ productId }) => {
  const handleEdit = () => {
    // Handle edit logic here
  };

  return (
    <button className="text-blue-500 cursor-pointer" onClick={handleEdit}>
      <Edit size={16} fill="blue" />
    </button>
  )
}
