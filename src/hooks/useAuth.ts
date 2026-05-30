import useSWR from 'swr';
import { useEffect, useState } from 'react';
import authService from '@/services/auth.service';
import { User } from '@/lib/types';

/**
 * Reusable hook managing user session state, profile queries, login, registration, and logouts.
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Synchronize initial local storage token presence
  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
  }, []);

  const { data: user, error, mutate, isValidating } = useSWR<User | null>(
    isAuthenticated ? '/auth/profile' : null,
    async () => {
      try {
        return await authService.getProfile();
      } catch (err) {
        // Profile fetch failed, probably token expired
        setIsAuthenticated(false);
        return null;
      }
    },
    {
      revalidateOnFocus: true,
      shouldRetryOnError: false,
    }
  );

  // Listen for global logout events triggered by API client interceptors
  useEffect(() => {
    const handleGlobalLogout = () => {
      setIsAuthenticated(false);
      mutate(null, false);
    };

    window.addEventListener('auth-logout', handleGlobalLogout);
    return () => {
      window.removeEventListener('auth-logout', handleGlobalLogout);
    };
  }, [mutate]);

  /**
   * Log in user and update auth state
   */
  const login = async (credentials: Record<string, any>) => {
    const res = await authService.login(credentials);
    setIsAuthenticated(true);
    await mutate(res.user, false);
    return res;
  };

  /**
   * Register user and update auth state
   */
  const register = async (userData: Record<string, any>) => {
    const res = await authService.register(userData);
    setIsAuthenticated(true);
    await mutate(res.user, false);
    return res;
  };

  /**
   * Log out user and clear auth state
   */
  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
    await mutate(null, false);
  };

  return {
    user: user || null,
    isAuthenticated,
    isLoading: isAuthenticated && !user && !error,
    isValidating,
    error,
    login,
    register,
    logout,
    refreshProfile: mutate,
  };
}

export default useAuth;
