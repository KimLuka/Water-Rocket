import { supabase } from '@/lib/supabaseClient';

export async function login(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}
