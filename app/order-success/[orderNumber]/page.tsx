

export default function OrderSuccess({params}: {params: {orderNumber: string}}) {
    return (
      <section className='min-h-screen flex items-center justify-center gap-6'>
      <div className='max-w-3xl max-auto p-6 flex flex-col items-center justify-center'>
          <div className="flex flex-col items-center justify-center">
              
              <h4 className="text-3xl">Payment Successful!</h4>
              <p className="text-gray-600">Thank you for your purchase! Henry Elueme</p>
              <p className="font-mono mt-2">Order ID: ORD-545DFE</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pt-5'>
              
              <div>
                  <h4>Order Summary</h4>
                  <div>
                      <p>Product 1 - $10.00</p>
                  </div>

                  <div className='flex justify-between pt-4'>
                      <span>Total Paid :$10.00</span>
                  </div>
              </div>

              <div>
                  <h4>Shipping To:</h4>
                  <p>Chief Stanley Iwofe</p>
                  <p>Port Harcourt, Rivers State</p>
                  <p>
                      Phone: +234 803 123 4567
                  </p>

                  <div>
                      <p>Status: <span className='text-green-600'>Processing</span></p>
                     <p>You will recieve a notification when your order is shipped.</p>
                  </div>
              </div>
          </div>
            </div>
            </section>
  )
}
