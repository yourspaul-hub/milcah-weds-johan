import type { Metadata } from "next";
import "./globals.css";
import { weddingConfig } from "@/lib/wedding-config";

export const metadata: Metadata = {
  title: `${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName} | Wedding Invitation`,
  description: `You are cordially invited to the wedding of ${weddingConfig.couple.brideFullName} and ${weddingConfig.couple.groomFullName} on ${weddingConfig.wedding.displayDate}`,
  openGraph: {
    title: `${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName} | Wedding`,
    description: `Join us on ${weddingConfig.wedding.displayDate} at ${weddingConfig.wedding.venue}`,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
