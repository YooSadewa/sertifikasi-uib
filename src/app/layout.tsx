import Navbar from "@/components/navbar";
import "./globals.css";
import ContactBar from "@/components/contact";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
