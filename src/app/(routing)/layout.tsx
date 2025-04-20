'use client'

import { ThemeProvider } from "@/shared/components/theme-provider";
import "../styles/globals.css"
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider

          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >


          <Header />
          <main>

            {children}
          </main>
          <Footer />





        </ThemeProvider>



      </body>
    </html>
  );
}
