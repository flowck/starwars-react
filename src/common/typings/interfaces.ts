import { ReactNode } from "react";

export interface BaseProps {
  children: ReactNode | ReactNode[] | null;
}

export interface SWAPIItemsResponse<T> {
  results: T;
  count: number;
  next: string | null;
  previous: string | null;
}
