// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "生物統計檢定助手",
  description: "Biostatistics Test Selector",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}