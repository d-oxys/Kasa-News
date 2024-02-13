import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/globals.css';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // or any other valid weight value
});

export const metadata: Metadata = {
  title: 'Kasa News',
  description: 'NewsAPi appliscation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
