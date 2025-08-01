

import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable:'--font-poppins',
  weight: ["400", "500", "600", "700"],
  subsets:['latin']
})



export const metadata = {
  title: "Programmers Squad",
  description: "Showcasing innovative web solutions and modern development projects by Programmers Squad.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`  } >
        <Navigation />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
