import { Rubik } from 'next/font/google';
import LayoutWrapper from '@/app/components/LayoutWrapper';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], 
  display: 'swap',
});

export const metadata = {
  title: "Fresh Harvest",
  description: "Your trusted store for premium jackets and hoodies. Designed for style, comfort, and durability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} min-[1440px]:w-[90rem] mx-auto`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}