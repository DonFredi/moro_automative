import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
