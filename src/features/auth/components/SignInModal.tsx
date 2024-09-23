'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { useStore } from '@/store/useStore';

import SignInForm from './SignInForm';
import SocialLogin from './SocialLogin';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

const SignInModal = () => {
  const isOpen = useStore((state) => state.showSignIn);
  const setIsOpen = useStore((state) => state.setShowSignIn);
  const [type, setType] = useState<'signin' | 'signup'>('signin');

  return (
    <div>
      <Drawer onOpenChange={setIsOpen} open={isOpen}>
        <DrawerContent className='bg-white text-black'>
          <DrawerHeader>
            {type === 'signin' ? (
              <>
                <DrawerTitle>Sign In</DrawerTitle>
                <DrawerDescription>
                  Sign into your account to continue
                </DrawerDescription>
              </>
            ) : (
              <>
                <DrawerTitle>Create Account</DrawerTitle>
                <DrawerDescription>
                  Create a new account to continue
                </DrawerDescription>
              </>
            )}
          </DrawerHeader>
          <div className='px-4 pb-4'>
            {type === 'signin' ? <SignInForm /> : <SignUpForm />}
            {type === 'signin' ? (
              <div>
                <p className='text-center text-muted-foreground pt-4 font-semibold text-sm'>
                  Not a member yet?{' '}
                  <span className='link' onClick={() => setType('signup')}>
                    Sign up
                  </span>
                </p>
              </div>
            ) : (
              <div>
                <p className='text-center text-muted-foreground pt-4 font-semibold text-sm'>
                  Already a member?{' '}
                  <span className='link' onClick={() => setType('signin')}>
                    Sign in
                  </span>
                </p>
              </div>
            )}
          </div>

          <Separator />

          {/* Social Login */}
          <SocialLogin />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default SignInModal;
