import apiClient from '@/lib/api';
import API_ENDPOINTS from '@/lib/endpoints';
import { Testimonial } from '@/lib/types';

export const testimonialService = {
  /**
   * Submits a customer review / testimonial (Public Route)
   */
  async createTestimonial(data: Record<string, any>): Promise<Testimonial> {
    const response = await apiClient.post<any>(API_ENDPOINTS.TESTIMONIALS, data);
    return response.data?.data?.testimonial;
  },

  /**
   * Fetches approved reviews list (Public Route)
   */
  async getTestimonials(params?: Record<string, any>): Promise<Testimonial[]> {
    const response = await apiClient.get<any>(API_ENDPOINTS.TESTIMONIALS, { params });
    return response.data?.data?.testimonials || [];
  },

  /**
   * Fetches specific testimonial (Admin)
   */
  async getTestimonialById(id: string): Promise<Testimonial> {
    const response = await apiClient.get<any>(`${API_ENDPOINTS.TESTIMONIALS}/${id}`);
    return response.data?.data?.testimonial;
  },

  /**
   * Approves or Moderates a testimonial (Admin)
   */
  async approveTestimonial(id: string, isApproved: boolean): Promise<Testimonial> {
    const response = await apiClient.patch<any>(`${API_ENDPOINTS.TESTIMONIALS}/${id}/approve`, {
      isApproved,
    });
    return response.data?.data?.testimonial;
  },

  /**
   * Deletes a testimonial (Admin)
   */
  async deleteTestimonial(id: string): Promise<void> {
    await apiClient.delete(`${API_ENDPOINTS.TESTIMONIALS}/${id}`);
  },
};

export default testimonialService;
