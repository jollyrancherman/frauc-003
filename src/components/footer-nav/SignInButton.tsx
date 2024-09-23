'use client';
import { useStore } from '@/store/useStore';
import { Button } from '../ui/button';

const SignInButton = () => {
  const setIsOpen = useStore((state) => state.setShowSignIn);
  return (
    <Button
      variant={'primary'}
      size={'default'}
      className='font-semibold'
      onClick={() => setIsOpen(true)}
    >
      Sign In
    </Button>
  );
};
export default SignInButton;
