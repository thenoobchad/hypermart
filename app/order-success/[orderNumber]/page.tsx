import { db } from "@/database"
import { orderItems, orders, products } from "@/database/db/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"



export default async function OrderSuccess({ params }: { params: Promise<{ orderNumber: string }> }) {

    const { orderNumber } = await params
    const order = await db.select().from(orders).where(eq(orders.orderNumber, orderNumber))

    const { email, address, fullName } = order[0].shippingAddress as {
        email: string,
        address: string,
        fullName: string
    }

    const orderItemsData = await db.select().from(orderItems).where(eq(orderItems.orderId, order[0].id))

    const allProducts = await db.select().from(products)

    const orderProducts = orderItemsData.map(item => {
        return allProducts.find(p => p.id === item.productId)

    })

    const total = orderProducts.reduce((acc, item) => {
        if (!item) return acc;
        const qty = orderItemsData.find(p => p.productId === item.id).quantity;
        
        return acc + Number(item.price) * Number(qty);
    }, 0)

    console.log("data here", total)

    return orderProducts.length > 0 ? <section className='min-h-screen flex items-center justify-center gap-6'>
        <div className='max-w-3xl max-auto p-6 flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center">

                <h4 className="text-3xl">Payment Successful!</h4>
                <p className="text-gray-600">Thank you for your purchase! {fullName}</p>
                <p className="font-mono mt-2">Order ID: {order[0].orderNumber}</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pt-5'>

                <div>
                    <h4>Order Summary</h4>
                    <div>{orderProducts.map((p, i) => (
                        <div key={i} className="flex justify-between"><strong>{p?.title}</strong> <span>{p?.price}</span></div>
                    ))}

                    </div>

                    <div className='flex justify-between pt-4'>
                        <span>Total Paid : {total}</span>
                    </div>
                </div>

                <div>
                    <h4>Shipping To:</h4>
                    <p>{address}</p>
                    <p>
                        Email: {email}
                    </p>

                    <div>
                        <p>Status: <span className='text-sm text-green-600'>{order[0].status}</span></p>
                        <p>You will recieve a notification when your order is shipped.</p>
                    </div>

                   
                </div>

               
            </div>

            <div className="flex gap-2 ">
                <Link href="/" className="px-4 py-2 bg-blue-950">Continue Shopping</Link>
                
                <Link href="/dashboard/orders" className="px-4 py-2 underline">View My Orders</Link>
            </div>
        </div>
    </section> : <div className="w-screen h-screen flex items-center justify-center"><p>Nothing to see here.</p></div>
}

