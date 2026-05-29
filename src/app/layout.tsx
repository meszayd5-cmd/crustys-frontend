import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { DeliveryModal } from "@/components/DeliveryModal";
import { EntranceLoader } from "@/components/EntranceLoader";
import "./globals.css";

// Configure Outfit for premium urban headlines
const fontDisplay = Outfit({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  variable: "--font-display",
});

// Configure Bebas Neue for cinematic display titles
const fontBebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

// Configure Plus Jakarta Sans for highly legible body copy and UI labels
const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Crusty’s Express | Premium Urban Burgers & Delivery",
  description: "Experience the boldest and most premium beef burgers, chicken sandwiches, loaded fries, and chicken tenders at Crusty's Express. Designed for ultimate taste, ready for swift delivery.",
  keywords: ["Crusty's Express", "Burgers", "Beef Burgers", "Chicken Burgers", "Loaded Fries", "Fast Food", "Delivery Partners", "Premium Burger Joint"],
  authors: [{ name: "Crusty's Express Team" }],
  openGraph: {
    title: "Crusty’s Express | Premium Urban Burgers & Delivery",
    description: "Crafted for urban food lovers. Experience bold flavors with our premium burgers, loaded fries, and tenders.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontBebas.variable} h-full antialiased`}
      style={{
        fontFamily: "var(--font-body), system-ui, sans-serif"
      }}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <CartProvider>
          <EntranceLoader />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <CartDrawer />
          <DeliveryModal />
        </CartProvider>
      </body>
    </html>
  );
}
