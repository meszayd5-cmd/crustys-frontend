import useSWR from 'swr';
import productService from '@/services/product.service';
import { Product } from '@/lib/types';

/**
 * Hook for retrieving the list of products, with support for caching and filters.
 */
export function useProducts(params?: Record<string, any>) {
  const { data, error, isLoading, mutate } = useSWR<Product[]>(
    params ? ['/products', JSON.stringify(params)] : '/products',
    async () => {
      return await productService.getProducts(params);
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 10000, // dedupe duplicate requests within 10s
    }
  );

  return {
    products: data || [],
    error,
    isLoading,
    mutate,
  };
}

/**
 * Hook for retrieving a single product by its slug or uuid.
 */
export function useProduct(idOrSlug: string, isSlug: boolean = false) {
  const { data, error, isLoading, mutate } = useSWR<Product>(
    idOrSlug ? [`/products`, idOrSlug, isSlug] : null,
    async () => {
      if (isSlug) {
        return await productService.getProductBySlug(idOrSlug);
      } else {
        return await productService.getProductById(idOrSlug);
      }
    },
    {
      revalidateOnFocus: false,
    }
  );

  return {
    product: data,
    error,
    isLoading,
    mutate,
  };
}
