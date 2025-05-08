import { DEFAULT_PROFILE_IMAGE_URL } from '@/constants/profile';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@/types/auth';

export async function signUp(data: User) {
  const { email, nickname, password } = data;
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname,
        profile_image_url: DEFAULT_PROFILE_IMAGE_URL,
      },
    },
  });
}
