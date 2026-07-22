import { PageWrapper } from "@/shared/components/shared/PageWrapper";
import { PageHero } from "@/shared/components/layout/PageHero";
import { SectionWrapper } from "@/shared/components/shared/SectionWrapper";
import { ContactForm } from "./components/ContactForm";
import { VisitInfoCard } from "./components/VisitInfoCard";

export function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        description="Questions, quotes, or ready to book a service — we're here to help."
        image="https://images.unsplash.com/photo-1650535517973-1139e7feb023?q=80&fm=webp&fit=crop&w=1600"
        imageAlt="Moro Automotive workshop interior"
      />

      <section className="py-24">
        <SectionWrapper>
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1.3fr_1fr]">
            <div className="border border-border bg-white p-7 sm:p-10">
              <h2 className="mb-[18px] text-[22px] font-bold">Service inquiry</h2>
              <hr className="stitch-divider mb-7" />
              <ContactForm />
            </div>

            <VisitInfoCard />
          </div>
        </SectionWrapper>
      </section>
    </PageWrapper>
  );
}
