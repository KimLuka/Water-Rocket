import { Database } from './path-to-your-database-types';

export type User = Database['public']['Tables']['users']['Row'] &
  UserPasswordUpdate;

export type UserPasswordUpdate = {
  password: string;
  confirmPassword: string;
};
