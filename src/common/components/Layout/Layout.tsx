import { BaseProps } from "@/common/typings/interfaces";
import BaseLayout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

export function Layout({ children }: BaseProps) {
  return (
    <BaseLayout type="MMB">
      <LayoutColumn>{children}</LayoutColumn>
    </BaseLayout>
  );
}
