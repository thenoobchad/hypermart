"use client"

import dynamic from 'next/dynamic';


const PaystackButton = dynamic(
  () => import('react-paystack').then((mod) => mod.PaystackButton),
  { ssr: false }
);


import { useRouter } from "next/navigation"

export const PayStackButton = ({ orderData }) => {
    
    const router = useRouter()

    const config = {
        reference: orderData?.orderNumber,
        email: orderData?.metaData?.email,
        amount: orderData?  Number(orderData?.amount) * 100 : 0, 
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
        metadata: {
            orderId: orderData?.orderId,
            custom_fields: [],
        },
    }
  
  console.log("This is the meta is:", orderData.amount)
  
  const handleSuccess = () => {
    router.push(`/order-success/${orderData?.orderNumber}`)
  }
  return (
    <PaystackButton
      {...config}
      onSuccess={handleSuccess}
      text="Complete Purchase"
      className="bg-green-600 text-white p-4"
    />
  )
}
