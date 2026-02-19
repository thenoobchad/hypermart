



export default function Orders() {

  const allOrders = [

    {
      orderId: "ORD-23RDWX",
      items: ["Watch X5", "Sony Headphones"],
      total: 5000,
      status: "PAID",
      user: "George Greg"

    }
  ]
  return (
    <section className="p-6 space-y-6 ">
      <div className="bg-white/80  backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            My Orders
          </h2>
         
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase whitespace-nowrap">
                  Order ID
                </th>

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Items
                </th>
              

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Total
                </th>

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>


                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Track
                </th>
              </tr>
            </thead>
            <tbody>
              {allOrders.length > 0 && allOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >

                  <td className="py-4 px-4 text-sm font-medium text-slate-900">
                    {order.orderId}
                  </td>

                  <td className="py-4 px-4 text-sm text-slate-600">
                    <ul> {order.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                    </ul>
                  </td>
                  
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    ${order.total}
                  </td>

                  <td className="py-4 px-4 text-sm  text-slate-500">
                    PAID
                  </td>


                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                    <button className="px-4 py-3 bg-yellow-600 rounded-lg text-white whitespace-nowrap uppercase">Track Item</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  )
}
