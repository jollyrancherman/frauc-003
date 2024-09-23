import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import FooterNav from '@/components/footer-nav/FooterNav';
import SignInModal from '@/features/auth/components/SignInModal';
import { ToastContainer } from 'react-toastify';
import { Providers } from '@/providers/Provider';

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
      <body>
        {' '}
        <Providers>
          <div className='flex flex-col  h-screen'>
            <div className='flex-grow bg-neutral-50 overflow-auto'>
              {children}
            </div>
            <div className='absolute bottom-0 left-0 w-full'>
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
