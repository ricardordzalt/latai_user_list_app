import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './tailwind.css';
import StateProvider from 'src/providers/state-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false,
});

export const metadata: Metadata = {
  title: 'Latai User List App',
  description: 'Technical test application for Latai',
  icons: {
    icon: 'https://app.latailabs.com/hubfs/upti.icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateProvider>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
