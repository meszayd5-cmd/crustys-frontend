import apiClient from '@/lib/api';
import API_ENDPOINTS from '@/lib/endpoints';
import { Product } from '@/lib/types';

export const productService = {
  /**
   * Fetches all products, optionally filtered by queries (e.g. category, search, limit, etc.)
   */
  async getProducts(params?: Record<string, any>): Promise<Product[]> {
    const response = await apiClient.get<any>(API_ENDPOINTS.PRODUCTS, { params });
    return response.data?.data?.products || [];
  },

  /**
   * Fetches a single product by its UUID
   */
  async getProductById(id: string): Promise<Product> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.PRODUCTS}/${id}`);
    return response.data?.data?.product;
  },

  /**
   * Fetches a single product by its unique web slug
   */
  async getProductBySlug(slug: string): Promise<Product> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.PRODUCTS}/slug/${slug}`);
    return response.data?.data?.product;
  },
};

export default productService;
