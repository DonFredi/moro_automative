import { SiteHeader } from "@/shared/components/layout/SiteHeader";
import { Footer } from "@/shared/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/shared/components/shared/WhatsAppFloatingButton";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
