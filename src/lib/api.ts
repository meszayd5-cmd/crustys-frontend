import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Safely get base URL with proper fallback
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // required for cookie-based refreshes / sessions
});

// Request Interceptor: Attach JWT bearer token if present
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('crustys_auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface NormalizedError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
  originalError: AxiosError;
}

// Error Normalization Helper
export function normalizeError(error: unknown): NormalizedError {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    const message = data?.message || data?.error || error.message || 'An unexpected error occurred';
    return {
      message,
      status: error.response?.status,
      errors: data?.errors,
      originalError: error,
    };
  }
  return {
    message: error instanceof Error ? error.message : 'An unknown error occurred',
    originalError: new AxiosError('An unknown error occurred'),
  };
}

// Response Interceptor: Global error logging and custom actions
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle token expiration / 401 Unauthorized globally
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        if (typeof window !== 'undefined') {
          const refreshToken = localStorage.getItem('crustys_refresh_token');
          if (refreshToken) {
            // Attempt to refresh the token
            const refreshResponse = await axios.post(`${BASE_URL}/auth/refresh-token`, {
              refreshToken,
            });
            const result = refreshResponse.data;
            const newToken = result?.data?.accessToken;
            const newRefreshToken = result?.data?.refreshToken;
            if (newToken) {
              localStorage.setItem('crustys_auth_token', newToken);
              if (newRefreshToken) {
                localStorage.setItem('crustys_refresh_token', newRefreshToken);
              }
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
              }
              return apiClient(originalRequest);
            }
          }
        }
      } catch (refreshError) {
        // Refresh token failed, clear credentials and redirect to login
        if (typeof window !== 'undefined') {
          localStorage.removeItem('crustys_auth_token');
          localStorage.removeItem('crustys_refresh_token');
          window.dispatchEvent(new Event('auth-logout'));
        }
      }
    }

    return Promise.reject(normalizeError(error));
  }
);

export default apiClient;
