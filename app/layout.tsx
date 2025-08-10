import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

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
        <Script id="chatwoot" strategy="afterInteractive">
          {`(function(d,t){
          var BASE_URL="https://chatwoot.cloudnext.cl";
          var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
          g.src=BASE_URL+"/packs/js/sdk.js";
          g.async=true;
          s.parentNode.insertBefore(g,s);
          g.onload=function(){
            window.chatwootSDK.run({
              websiteToken: 'NJojX6BwdZVC1hNFoAb8f2QA',
              baseUrl: BASE_URL
            })
          }
        })(document,"script");`}
        </Script>
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-[url('/images/noise.png')] opacity-3 mix-blend-screen" />
        <div className="z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}