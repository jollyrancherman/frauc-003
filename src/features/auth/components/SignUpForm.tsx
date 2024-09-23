import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signup } from '../actions/signup';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await signup(formData);
      if (res.status === 'error') {
        setError(res.message);
        return;
      }
      if (res.status === 'success') {
        toast.success(res.message);
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
      <form className='space-y-2' onSubmit={handleSignUp}>
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
            Create Account
          </Button>
        </div>
      </form>
    </>
  );
};
export default SignUpForm;
