import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATHAR — AI Automation for Egyptian Businesses",
  description:
    "ATHAR builds custom AI automation systems for small businesses in Egypt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
