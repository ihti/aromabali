import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Aroma Bali",
  description: "Aroma Bali - ulja za masažu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
