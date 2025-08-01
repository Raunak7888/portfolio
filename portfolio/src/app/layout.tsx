import { ClientThemeProvider } from "@/components/provider/themeProvider";
import "./globals.css";
import { Mitr } from "next/font/google";
import { Modak } from "next/font/google";
import { Jersey_25 } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";
import { Madimi_One } from "next/font/google";
import { Syne_Mono } from "next/font/google";

// Font setup with CSS variables
const syne = Syne_Mono({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400"],
});

const mitr = Mitr({
  variable: "--font-mitr",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const modak = Modak({
  variable: "--font-modak",
  subsets: ["latin"],
  weight: "400",
});

const jersey = Jersey_25({
  variable: "--font-jersey",
  subsets: ["latin"],
  weight: "400",
});

const luckiest = Luckiest_Guy({
  variable: "--font-luckiest",
  subsets: ["latin"],
  weight: "400",
});

const madimi = Madimi_One({
  variable: "--font-madimi",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning // avoids mismatch flash
    >
      <body
        className={`antialiased ${mitr.variable} ${modak.variable} ${jersey.variable} ${luckiest.variable} ${madimi.variable} ${syne.variable}`}
      >
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}