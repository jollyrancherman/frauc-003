'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

import { signInWithGoogle } from '../actions/sign-in-with-google';

const SocialLogin = () => {
  return (
    <div className='p-4 space-y-4'>
      <div className='text-center text-muted-foreground'>Or continue with</div>
      <div className='flex flex-row gap-4'>
        <Button
          variant='outline'
          size={'lg'}
          className='w-full relative'
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <FcGoogle className='left-3 absolute' size={24} />
          Google
        </Button>

        <Button variant='outline' size={'lg'} className='w-full relative'>
          <FaFacebook className='left-3 absolute text-blue-500' size={24} />
          Facebook
        </Button>
      </div>
    </div>
  );
};
export default SocialLogin;
