import apiClient from '@/lib/api';
import API_ENDPOINTS from '@/lib/endpoints';
import { Reservation } from '@/lib/types';

export const reservationService = {
  /**
   * Submits a table booking request (Public Route)
   */
  async createReservation(data: Record<string, any>): Promise<Reservation> {
    const response = await apiClient.post<any>(API_ENDPOINTS.RESERVATIONS, data);
    return response.data?.data?.reservation;
  },

  /**
   * Fetches list of reservations (Admin only)
   */
  async getReservations(params?: Record<string, any>): Promise<Reservation[]> {
    const response = await apiClient.get<any>(API_ENDPOINTS.RESERVATIONS, { params });
    return response.data?.data?.reservations || [];
  },

  /**
   * Retrieves a single reservation details
   */
  async getReservation(id: string): Promise<Reservation> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.RESERVATIONS}/${id}`);
    return response.data?.data?.reservation;
  },

  /**
   * Updates an existing reservation status or details (Admin/Owner)
   */
  async updateReservation(id: string, data: Record<string, any>): Promise<Reservation> {
    const response = await apiClient.patch<any>(`${API_ENDPOINTS.RESERVATIONS}/${id}`, data);
    return response.data?.data?.reservation;
  },

  /**
   * Deletes a reservation record from system (Admin/Owner)
   */
  async deleteReservation(id: string): Promise<void> {
    await apiClient.delete(`${API_ENDPOINTS.RESERVATIONS}/${id}`);
  },
};

export default reservationService;
