

export default function Order() {

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
            Orders
          </h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
            View all
          </button>
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
                  User
                </th>
               
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Total
                </th>

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Status
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
                    {order.items.map(item => (<ul>
                      <li>{item}</li>
                    </ul>))}
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600">
                    {order.user}
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900">
                    ${order.total}
                  </td>

                  <td className="py-4 px-4 text-sm  text-slate-500">
                    <div className="flex gap-2 justify-start">
                      <select name="status" id="status" className="uppercase ">
                        <option value="" className="uppercase">{order.status}</option>
                        
                        <option value="" className="bg-red-600 text-red-600">SHIPPED</option>
                        <option value="">CANCELLED</option>
                      </select>
                    </div>
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
