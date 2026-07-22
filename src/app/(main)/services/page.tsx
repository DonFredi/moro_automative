import { generateSEO } from "@/shared/lib/seo";
import { ServicesPage } from "@/modules/services/ServicesPage";

export const metadata = generateSEO({
  title: "Our Services",
  description:
    "Car seat upholstery, roof lining repairs, door panel upholstery, steering wheel wrapping, interior restoration and custom interior upgrades in Nairobi.",
  url: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
