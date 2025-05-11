import { useCallback, useEffect, useState } from "react";

type FetchOptionsType = {
  params?: Record<string, any>;
}

interface FetchResultType<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: (options?: FetchOptionsType) => void;
}

const paramsFromObj = (obj: Record<string, unknown>): string => {
  const params: string[] = [];
  for (const key in obj) {
    params.push(`${key}=${encodeURIComponent(String(obj[key]))}`);
  }
  const queryString = params.join("&");
  return queryString;
};

export const useFetch = <T,>(url: string):FetchResultType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [fetchOptions, setFetchOptions] = useState<FetchOptionsType>({});

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {

      const urlWithParams:string = fetchOptions.params
        ? `${url}?${paramsFromObj(fetchOptions.params)}`
        : url;
     
      const response = await fetch(urlWithParams);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e instanceof Error ? e : new Error(String(e)));
    } finally {
      setIsLoading(false);
    }
  }, [url, fetchOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback((options?: FetchOptionsType) => {
    setFetchOptions(options || {});
  }, []);

  return { data, isLoading, error, refetch };
};
