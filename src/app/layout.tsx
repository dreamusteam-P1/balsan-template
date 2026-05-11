import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlowLayer from "@/components/ui/GlowLayer";
import ClientWrapper from "@/components/layout/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "발산공업 | 지능형 농업 AI 솔루션 & 정밀 농기계",
  description: "40년 전통의 기술력에 AI를 더하다. 발산공업의 독보적인 AI 콩 품질 검사 시스템과 압도적인 성능의 농기계 라인업을 경험해 보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased selection:bg-accent/30`}>
        <GlowLayer />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
