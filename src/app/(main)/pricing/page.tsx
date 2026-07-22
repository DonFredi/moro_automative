import { generateSEO } from "@/shared/lib/seo";
import { PricingPage } from "@/modules/pricing/PricingPage";

export const metadata = generateSEO({
  title: "Pricing",
  description:
    "Transparent pricing for car seat upholstery, door panels, dashboard restoration, roof lining, floor mats, steering restoration and more.",
  url: "/pricing",
});

export default function Page() {
  return <PricingPage />;
}
