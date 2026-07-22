import { generateSEO } from "@/shared/lib/seo";
import { HomePage } from "@/modules/home/HomePage";

export const metadata = generateSEO({
  url: "/",
  keywords: [
    "car upholstery Nairobi",
    "car interior restoration",
    "car seat upholstery",
    "steering wheel wrapping",
  ],
});

export default function Page() {
  return <HomePage />;
}
