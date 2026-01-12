import Footer from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hypermart & Stores",
  description: "Online market for trusted products...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
        className={`antialiased`}
    >
      <Header/>
			  {children}
			<Footer/>
      </div>
  );
}
