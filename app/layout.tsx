import type { Metadata } from "next";
import {  Geist_Mono,Silkscreen} from "next/font/google";
import "./globals.css";
import Link from "next/link";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-retro', // Mantive o nome da variável para não quebrar seu CSS
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Macintosh 128K Experience — Quebre as Grades",
  description: "Não se contente em seguir instruções. Assuma o controle. Descubra a proeza de engenharia e design que definiu uma era, agora recriada na web.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${silkscreen.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <footer className="p-4 bg-neutral-950 w-full flex justify-center items-center ">
        <span className="text-gray-200 text-center text-sm">
          Desenvolvido por{" "}
          <Link
            href={"https://github.com/victor-kiss"} 
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold text-beige hover:text-beige-dark transition duration-300"
          >
            Victor Kiss
          </Link>
          .
        </span>
      </footer>
      </body>

    </html>
  );
}
