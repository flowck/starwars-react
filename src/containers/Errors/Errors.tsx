import { ErrorBoundary } from "react-error-boundary";
import { BaseProps } from "../../common/typings/interfaces";

function ErrorFallBack() {
  return <div>Something went wrong</div>;
}

export function Errors({ children }: BaseProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>{children}</ErrorBoundary>
  );
}
