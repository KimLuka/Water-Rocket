'use client';

import { useAuthListener } from '@/store/authStore';

export default function AuthProvider() {
  useAuthListener();
  return null;
}
