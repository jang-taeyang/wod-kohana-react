import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensures Bootstrap Icons Load
import "./globals.css";

export const metadata: Metadata = {
  title: "Kō Hana Rum - Our Journey",
  description: "Discover the story behind Kō Hana Rum, crafted from heirloom sugar cane.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}