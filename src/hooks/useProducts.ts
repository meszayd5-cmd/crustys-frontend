import useSWR from 'swr';
import { Product } from '@/lib/types';
import { localProducts } from '@/lib/imageMapping';

/**
 * Hook for retrieving the list of products, with support for caching and filters.
 */
export function useProducts(params?: Record<string, any>) {
  let filteredProducts = [...localProducts];

  if (params) {
    if (params.isFeatured !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.isFeatured === !!params.isFeatured);
    }
    if (params.categoryId !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.categoryId === params.categoryId);
    }
    if (params.categoryName !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.category?.name === params.categoryName);
    }
    if (params.limit !== undefined) {
      filteredProducts = filteredProducts.slice(0, Number(params.limit));
    }
  }

  const { data, error, isLoading, mutate } = useSWR<Product[]>(
    params ? ['/local-products', JSON.stringify(params)] : '/local-products',
    () => Promise.resolve(filteredProducts),
    {
      fallbackData: filteredProducts,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    products: data || filteredProducts,
    error,
    isLoading: false,
    mutate,
  };
}

/**
 * Hook for retrieving a single product by its slug or uuid.
 */
export function useProduct(idOrSlug: string, isSlug: boolean = false) {
  const found = localProducts.find(p => p.id === idOrSlug || p.slug === idOrSlug);

  const { data, error, isLoading, mutate } = useSWR<Product>(
    idOrSlug ? [`/local-products`, idOrSlug, isSlug] : null,
    () => Promise.resolve(found as Product),
    {
      fallbackData: found,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    product: data || found,
    error,
    isLoading: false,
    mutate,
  };
}

