import { sbServer } from '@/utils/supabase/server';
import { Button } from '../ui/button';

type SignOutWrapperProps = {
  children: React.ReactNode;
};

const SignOutWrapper = ({ children }: SignOutWrapperProps) => {
  const signOut = async () => {
    'use server';
    console.log('signing out');
    await sbServer().auth.signOut();
  };
  return (
    <form action={signOut}>
      <Button variant={'ghost'}>{children}</Button>
    </form>
  );
};
export default SignOutWrapper;
