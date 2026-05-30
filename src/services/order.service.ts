import apiClient from '@/lib/api';
import API_ENDPOINTS from '@/lib/endpoints';
import { Order } from '@/lib/types';

export const orderService = {
  /**
   * Places a new delivery or pickup order
   */
  async createOrder(data: Record<string, any>): Promise<Order> {
    const response = await apiClient.post<any>(API_ENDPOINTS.ORDERS, data);
    return response.data?.data?.order;
  },

  /**
   * Retrieves order history of the logged-in customer
   */
  async getMyOrders(): Promise<Order[]> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.ORDERS}/my-orders`);
    return response.data?.data?.orders || [];
  },

  /**
   * Cancels a pending order
   */
  async cancelOrder(id: string): Promise<Order> {
    const response = await apiClient.post<any>(`${API_ENDPOINTS.ORDERS}/${id}/cancel`);
    return response.data?.data?.order;
  },

  /**
   * Fetches order details by Order UUID
   */
  async getOrderById(id: string): Promise<Order> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.ORDERS}/${id}`);
    return response.data?.data?.order;
  },
};

export default orderService;
