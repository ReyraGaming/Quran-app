import Navbar from "./component/navbar";
import Footer from "./component/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-bl from-[#55ec27] to-[#a3ad14]">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
