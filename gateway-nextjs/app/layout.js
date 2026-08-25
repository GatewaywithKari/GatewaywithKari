import { Sacramento, Quicksand } from "next/font/google";
import "./globals.css";

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Gateway with Kari | Introduction to Homeopathy",
  description:
    "Practical protocols for your family. Learn homeopathy remedies for fevers, teething, colds, injuries, and more with Gateway with Kari.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sacramento.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
