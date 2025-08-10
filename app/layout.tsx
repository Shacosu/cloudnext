import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | CloudNext",
    default: "CloudNext - Automatiza tu negocio en la nube",
  },
  description: "En CloudNext, te ayudamos a optimizar tus procesos y a escalar tu negocio con soluciones cloud a la medida.",
  keywords: ["CloudNext", "Automatiza tu negocio", "Soluciones cloud", "Optimiza tus procesos", "Escalabilidad", "Negocio en la nube"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased bg-black relative`}>
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-[url('/images/noise.png')] opacity-3 mix-blend-screen" />
        <div className="z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}