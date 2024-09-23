import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import FooterNav from '@/components/footer-nav/FooterNav';
import SignInModal from '@/features/auth/components/SignInModal';
import { ToastContainer } from 'react-toastify';
import { Providers } from '@/providers/Provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Frauc',
  description: 'Free local auction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {' '}
        <Providers>
          <div className='flex flex-col  h-screen'>
            <div className='flex-grow bg-neutral-50 overflow-auto'>
              {children}
            </div>
            <div className='absolute bottom-0 w-full'>
              <FooterNav />
              <SignInModal />
              <ToastContainer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
