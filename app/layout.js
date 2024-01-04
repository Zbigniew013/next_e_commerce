import TopNav from '@/components/TopNav';
import './globals.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

export const metadata = {
  title: 'Next e-commerce',
  description: 'E-commerce app using Next.js Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
