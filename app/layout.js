

import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Preloader from "./components/Preloader";

// app/layout.js or wherever you set global styles



export const metadata = {
  title: "Programmers Squad",
  description: "Showcasing innovative web solutions and modern development projects by Programmers Squad.",
   icons: {
    icon: "./a.png", // You can also use .png or .svg
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        cz-shortcut-listen="true"
      >
        <Preloader />
        <Navigation />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
