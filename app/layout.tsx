import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "BlueReyd HealthTech Solutions | Clinician-Led Innovation",
  description: "Bridging the gap between medical expertise and full-stack development. Building reliable, offline-first mHealth solutions for Nigeria.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BlueReyd",
  },
};

export const viewport = {
  themeColor: "#00a3bf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                var theme = supportDarkMode ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            })();
          `,
        }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
