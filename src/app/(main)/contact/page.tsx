import { generateSEO } from "@/shared/lib/seo";
import { ContactPage } from "@/modules/contact/ContactPage";

export const metadata = generateSEO({
  title: "Contact Us",
  description:
    "Get in touch with Moro Automotive — send a service inquiry or find our workshop location and hours in Nairobi.",
  url: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
