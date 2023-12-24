import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tugas UAS Prak. Web - Faikar Moch Tajudin",
  description: "Generated by Faikar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-4xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}