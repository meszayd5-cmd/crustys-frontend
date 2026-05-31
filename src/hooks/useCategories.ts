import useSWR from 'swr';
import { Category } from '@/lib/types';
import { localCategories } from '@/lib/imageMapping';

/**
 * Hook for retrieving the list of active food categories.
 */
export function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<Category[]>(
    '/local-categories',
    () => Promise.resolve(localCategories),
    {
      fallbackData: localCategories,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    categories: data || localCategories,
    error,
    isLoading: false,
    mutate,
  };
}

/**
 * Hook for retrieving details of a single category by slug or uuid.
 */
export function useCategory(idOrSlug: string, isSlug: boolean = false) {
  const found = localCategories.find(c => c.id === idOrSlug || c.slug === idOrSlug || c.name === idOrSlug);

  const { data, error, isLoading, mutate } = useSWR<Category>(
    idOrSlug ? [`/local-categories`, idOrSlug, isSlug] : null,
    () => Promise.resolve(found as Category),
    {
      fallbackData: found,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    category: data || found,
    error,
    isLoading: false,
    mutate,
  };
}

