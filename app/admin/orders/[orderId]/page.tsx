import { db } from '@/database'
import { orderItems, orders, products } from '@/database/db/schema'
import { eq } from 'drizzle-orm'


export default async function OrderPage({ params }: { params: Promise<{ orderId: string }> }) {

  const { orderId } = await params

  const userOrders = await db.select().from(orders).where(eq(orders.id, orderId))

  const orderedItems = await db.select().from(orderItems).where(eq(orderItems.orderId, userOrders[0].id))

  const allProducts = await db.select().from(products)

  const orderedProducts = orderedItems.map(item => {
    const ordItm = allProducts.find(p => p.id == item.productId)
    return ordItm
  })

  return (
    <section className="p-6 space-y-6 ">
      <div className="bg-white/80  backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
        <p>OrderId: {orderId}</p>


        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase whitespace-nowrap">
                  S/N
                </th>

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Order Number
                </th>


                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Items
                </th>


                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Paid At
                </th>
              </tr>
            </thead>
            <tbody>
              {userOrders.length > 0 && userOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >

                  <td className="py-4 px-4 text-sm font-medium text-slate-900">
                    {1 + index}
                  </td>

                  <td className="py-4 px-4 text-sm text-slate-600">
                    {order.orderNumber}
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600">
                    <ul className='flex flex-col'>
                      {orderedProducts.map(item => (
                        <li key={item.id}>{item.title}</li>
                      ))}
                    </ul>
                  </td>

                  <td className="py-4 px-4 text-sm text-slate-600">
{order.status}
                  </td>

                  <td className="py-4 px-4 text-sm text-slate-600">
                    {(order.paidAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  )
}
