import { CtaBand } from "@/shared/components/shared/CtaBand";
import { homeCta } from "../content/home-content";

export function CtaSection() {
  return <CtaBand heading={homeCta.heading} description={homeCta.description} />;
}
