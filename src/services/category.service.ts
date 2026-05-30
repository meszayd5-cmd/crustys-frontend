import apiClient from '@/lib/api';
import API_ENDPOINTS from '@/lib/endpoints';
import { Category } from '@/lib/types';

export const categoryService = {
  /**
   * Fetches all active categories
   */
  async getCategories(): Promise<Category[]> {
    const response = await apiClient.get<any>(API_ENDPOINTS.CATEGORIES);
    return response.data?.data?.categories || [];
  },

  /**
   * Fetches a single category by its UUID
   */
  async getCategoryById(id: string): Promise<Category> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.CATEGORIES}/${id}`);
    return response.data?.data?.category;
  },

  /**
   * Fetches a single category by its unique web slug
   */
  async getCategoryBySlug(slug: string): Promise<Category> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.CATEGORIES}/slug/${slug}`);
    return response.data?.data?.category;
  },
};

export default categoryService;
