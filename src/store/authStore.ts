import { create } from 'zustand';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { useEffect } from 'react';

type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  removeUser: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));

// ✅ 클라이언트 사이드에서만 동작하도록 분리된 훅
export const useAuthListener = () => {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [setUser]);
};
