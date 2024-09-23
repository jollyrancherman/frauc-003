import { useState } from 'react';
import { login } from '../actions/login';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useStore } from '@/store/useStore';
import { toast } from 'react-toastify';

const SignInForm = () => {
  const [error, setError] = useState<string | null>(null);
  const setIsOpen = useStore((state) => state.setShowSignIn);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const res = await login(formData);
      if (res.status === 'error') {
        setError(res.message);
        return;
      }
      if (res.status === 'success') {
        toast.success(res.message);
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
    setError(null);
  };

  return (
    <>
      {error && (
        <div className='text-red-500 text-sm font-semibold text-center'>
          {error}
        </div>
      )}
      <form className='space-y-2' onSubmit={handleSignIn}>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' name='email' id='email' required autoFocus />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input type='password' name='password' id='password' required />
        </div>
        <div className='flex flex-row-reverse pt-2'>
          <Button
            variant='primary'
            size={'lg'}
            type='submit'
            className='w-full'
          >
            Sign In
          </Button>
        </div>
      </form>
    </>
  );
};
export default SignInForm;
