import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { LocationBar } from "@/shared/components/layout/LocationBar";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <LocationBar />
      <Header />
      <main className="section-wrapper flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
        <div className="eyebrow mb-3 justify-center">404</div>
        <h1 className="mb-4 font-heading text-3xl">This page took a wrong turn</h1>
        <p className="mb-8 max-w-sm text-text-body">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Button asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
