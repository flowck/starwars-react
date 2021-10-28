import { http, getCancelToken, isCancelError } from "@/common/utils/http";
import { useEffect, useState } from "react";

export function useHttp<T>(url: string, params?: Record<string, string>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const request = getCancelToken();
    const init = async () => {
      setIsLoading(true);
      try {
        const { data: _data } = await http.get<T>(url, { params, cancelToken: request.token });
        setData(_data);
        setIsLoading(false);
      } catch (_error) {
        if (!isCancelError(_error)) {
          setIsLoading(false);
          setError(_error);
        }
      }
    };

    init();

    return () => {
      request.cancel();
    };
  }, [params, url]);

  return { isLoading, error, data };
}
