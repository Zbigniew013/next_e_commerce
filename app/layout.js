'use client';
import './globals.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import TopNav from '@/components/TopNav';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'Next e-commerce',
//   description: 'E-commerce app using Next.js Full Stack',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <SessionProvider>
        <body>
          <TopNav />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
