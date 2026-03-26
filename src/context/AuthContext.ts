import { createContext } from 'react';

export interface User {
  id: string;
  username: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
