import { LocationBar } from "@/shared/components/layout/LocationBar";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/shared/components/shared/WhatsAppFloatingButton";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
