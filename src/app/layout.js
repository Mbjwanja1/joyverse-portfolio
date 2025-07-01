import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import JoyBot from '../components/JoyBot"; '

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joyverse Portfolio",
  description: "Created with love and stardust ✨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <JoyBot /> {/* Floating chatbot */}
      </body>
    </html>
  );
}
