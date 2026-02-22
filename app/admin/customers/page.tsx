import { db } from '@/database'
import {  orderItems, orders, users } from '@/database/db/schema'
import { eq } from 'drizzle-orm'

import Link from 'next/link'


export default async function Customers() {
  
  

  const allUsers = await db.select().from(users).where(eq(users.role, "USER"))

  
  const allOrders = await db.select().from(orders)

 

  return (
    <section className="p-6 space-y-6 ">
      {allUsers.length > 0 ? <div className="bg-white/80  backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Customers
          </h2>
         
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase whitespace-nowrap">
                  S/N
                </th>

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  User
                </th>
              

                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Email
                </th>

               
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allUsers.length > 0 && allUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >

                  <td className="py-4 px-4 text-sm font-medium text-slate-900">
                    {1 + index}
                  </td>

                  <td className="py-4 px-4 text-sm text-slate-600">
                    {user.email}
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600">
                    {user?.username}
                  </td>
                  
                  <td className="py-4 px-4 text-sm text-slate-600">
                    <Link href={`/admin/orders/${user.id}`} className='underline'>
                      
                      Order History
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div> : <p>Nothing to see here. </p>}
    </section>
  )
}
