import { useRouter } from 'next/router';

type UseSearchParamsProps = {};

export const useSearchParams = (props?: UseSearchParamsProps) => {
  const { push, query } = useRouter();
  const searchParams = { ...query } as Record<string, string>;

  /**
   * URLにParamsを追加する
   * isShallowがtrueの場合、GetServerSideProps等は発火しない
   */
  const setSearchParams = (
    data: Record<string, string>,
    options?: {
      isShallow?: boolean;
      link?: string;
      clear?: boolean;
    }
  ) => {
    const newValue = {
      ...(options?.clear ? {} : searchParams),
      ...data,
    };

    const newSearchParams = new URLSearchParams(newValue);

    Object.entries(newValue).map(([key, value]) => {
      if (!value) {
        newSearchParams.delete(key);
      }
    });

    push(`${options?.link || ''}?${newSearchParams.toString()}`, undefined, {
      shallow: options?.isShallow || false,
    });
  };

  return { searchParams, setSearchParams };
};
