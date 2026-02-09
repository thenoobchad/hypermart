import CartInitializer from "@/components/cart-initializer";
import Footer from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { getCartItems } from "@/lib/actions";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { headers } from "next/headers";


export const metadata: Metadata = {
  title: "Hypermart & Stores",
  description: "Online market for trusted products...",
};

type CartItems = Record<string, number>

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  const cartItemsArr = await getCartItems(session?.user?.id as string)

  const items = cartItemsArr.reduce((acc, item) => {
    acc[item.productId] = item.quantity;
    return acc;
  }, {} as CartItems)



  return (
    <div key={session?.user?.id || "guest"} className={`antialiased`}>
      <Header />
      <CartInitializer initialItems={items} />
      {children}
      <Footer />
    </div>
  );
}
