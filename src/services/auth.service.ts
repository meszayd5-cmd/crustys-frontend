import apiClient from '@/lib/api';
import API_ENDPOINTS from '@/lib/endpoints';
import { AuthResponse, User } from '@/lib/types';

export const authService = {
  /**
   * Registers a new customer account
   */
  async register(data: Record<string, any>): Promise<AuthResponse> {
    const response = await apiClient.post<any>(`${API_ENDPOINTS.AUTH}/register`, data);
    const result = response.data;
    const token = result?.data?.accessToken;
    const user = result?.data?.user;
    if (token) {
      localStorage.setItem('crustys_auth_token', token);
    }
    return {
      user,
      token,
    };
  },

  /**
   * Logs in a Customer or Admin user with email & password
   */
  async login(data: Record<string, any>): Promise<AuthResponse> {
    const response = await apiClient.post<any>(`${API_ENDPOINTS.AUTH}/login`, data);
    const result = response.data;
    const token = result?.data?.accessToken;
    const refreshToken = result?.data?.refreshToken;
    const user = result?.data?.user || result?.data?.admin;
    if (token) {
      localStorage.setItem('crustys_auth_token', token);
      if (refreshToken) {
        localStorage.setItem('crustys_refresh_token', refreshToken);
      }
    }
    return {
      user,
      token,
      refreshToken,
    };
  },

  /**
   * Invalidate session locally and call backend logout endpoint
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post(`${API_ENDPOINTS.AUTH}/logout`);
    } catch (err) {
      console.warn('Logout API call failed or session was already expired', err);
    } finally {
      localStorage.removeItem('crustys_auth_token');
      localStorage.removeItem('crustys_refresh_token');
    }
  },

  /**
   * Manual trigger of JWT token rotation
   */
  async refreshToken(): Promise<string> {
    const refreshToken = localStorage.getItem('crustys_refresh_token');
    if (!refreshToken) throw new Error('No refresh token available');

    const response = await apiClient.post<any>(
      `${API_ENDPOINTS.AUTH}/refresh-token`,
      { refreshToken }
    );
    const result = response.data;
    const token = result?.data?.accessToken;
    const newRefreshToken = result?.data?.refreshToken;
    if (token) {
      localStorage.setItem('crustys_auth_token', token);
      if (newRefreshToken) {
        localStorage.setItem('crustys_refresh_token', newRefreshToken);
      }
    }
    return token;
  },

  /**
   * Retrieves the logged-in user's profile details
   */
  async getProfile(): Promise<User> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.AUTH}/profile`);
    const result = response.data;
    return result?.data?.user || result?.data?.admin;
  },

  /**
   * Checks if user is authenticated locally (presence of token)
   */
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('crustys_auth_token');
  },
};

export default authService;

