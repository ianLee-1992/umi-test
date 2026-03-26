import { useState, type ReactNode } from 'react';
import { AuthContext, type User } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    // 模拟登录验证
    if (username === 'admin' && password === 'admin') {
      setUser({
        id: '1',
        username: 'admin',
        role: 'admin',
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCurrentPage('dashboard');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
