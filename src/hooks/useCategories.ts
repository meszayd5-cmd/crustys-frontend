import useSWR from 'swr';
import categoryService from '@/services/category.service';
import { Category } from '@/lib/types';

/**
 * Hook for retrieving the list of active food categories.
 */
export function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<Category[]>(
    '/categories',
    async () => {
      return await categoryService.getCategories();
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // category list changes infrequently
    }
  );

  return {
    categories: data || [],
    error,
    isLoading,
    mutate,
  };
}

/**
 * Hook for retrieving details of a single category by slug or uuid.
 */
export function useCategory(idOrSlug: string, isSlug: boolean = false) {
  const { data, error, isLoading, mutate } = useSWR<Category>(
    idOrSlug ? [`/categories`, idOrSlug, isSlug] : null,
    async () => {
      if (isSlug) {
        return await categoryService.getCategoryBySlug(idOrSlug);
      } else {
        return await categoryService.getCategoryById(idOrSlug);
      }
    },
    {
      revalidateOnFocus: false,
    }
  );

  return {
    category: data,
    error,
    isLoading,
    mutate,
  };
}
