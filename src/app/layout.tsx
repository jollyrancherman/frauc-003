import type { Metadata } from 'next';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import FooterNav from '@/components/footer-nav/FooterNav';
// import SignInModal from '@/features/auth/components/SignInModal';
// import { ToastContainer } from 'react-toastify';
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
          <div className='grid grid-rows-[1fr_auto] w-screen h-screen'>
            <div className=' h-full bg-neutral-50 overflow-scroll bg-red-300'>
              {children}
            </div>
            <div className='w-full bg-blue-300'>
              <FooterNav />
              {/* <SignInModal />
              <ToastContainer /> */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
