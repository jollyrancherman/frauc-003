'use server';

import { sbServer } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signup(formData: FormData) {
  const supabase = sbServer();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  console.log('error', error);
  if (error) {
    return { status: 'error', message: error.message };
  }
  revalidatePath('/', 'layout');

  return {
    status: 'success',
    message:
      'Account created successfully. Check your email to confirm your account.',
  };
  redirect('/');
}
