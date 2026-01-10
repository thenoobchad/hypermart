import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hypermart & Stores",
  description: "Online market for trusted products...",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-zinc-50">{children}</div>;
}
