import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  style: "normal",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "어이 조씨, 코딩이나 해.",
  description: "취미가 코딩이자 취미로 밥벌이하는 사람입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <main className="mt-8 min-h-[calc(100vh-8rem)] px-6">{children}</main>
      </body>
    </html>
  );
}
