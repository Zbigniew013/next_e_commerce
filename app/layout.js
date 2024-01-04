import './globals.css';

export const metadata = {
  title: 'Next e-commerce',
  description: 'E-commerce app using Next.js Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
