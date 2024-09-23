'use server';

import { sbServer } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function signInWithGoogle() {
  const supabase = sbServer();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error) {
    console.log(error);
    redirect('/error');
  }

  redirect(data.url);
}
