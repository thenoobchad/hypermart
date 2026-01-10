import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hypermart & Stores",
  description: "Online market for trusted products...",
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`antialiased`}>{children}</div>;
}
