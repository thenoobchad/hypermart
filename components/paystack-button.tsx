"use client"

import { verifyPayment } from '@/lib/actions';
import { useCartStore } from '@/store/cart-store';
import dynamic from 'next/dynamic';


const PaystackButton = dynamic(
  () => import('react-paystack').then((mod) => mod.PaystackButton),
  { ssr: false }
);


import { useRouter } from "next/navigation"

export const PayStackButton = ({ orderData }) => {
   const { clearCart } = useCartStore()
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
 
  
  const handleSuccess = async (ref) => {

    const {success} = await verifyPayment(ref)
    if (success) {

      clearCart()
      
      router.push(`/order-success/${orderData?.orderNumber}`)
      
    } else { alert("We couldn't verify your payment. please contact support.")}


  
  }
  return (
    <PaystackButton
      {...config}
      onSuccess={(reference) => handleSuccess(reference)}
      text="Pay Now"
      className="bg-green-600 text-white p-4"
    />
  )
}
