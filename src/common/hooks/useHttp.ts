import { http } from "@/common/utils/http";
import { useEffect, useState } from "react";

export function useHttp<T>(url: string, params?: Record<string, string>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      try {
        const { data: _data } = await http.get<T>(url, { params });
        setData(_data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    init();
  }, [params, url]);

  return { isLoading, error, data };
}
