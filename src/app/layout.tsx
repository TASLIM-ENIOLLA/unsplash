import "@/css/globals.css";

import { Metadata, RootLayoutProps } from "./types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Unsplash",
  description: "Developed by Taslim Musa-Azeez",
};