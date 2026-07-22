import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

import { Badge } from "./Badge";
import { siteConfig } from "@/config/site";

// lucide-react has no dedicated TikTok icon — a small inline glyph keeps the
// same stroke-icon language as the rest of the social row.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82c-.99-.98-1.53-2.31-1.53-3.7h-3.29v13.61c0 1.66-1.35 3.02-3.02 3.02a3.02 3.02 0 0 1-3.02-3.02 3.02 3.02 0 0 1 3.02-3.02c.3 0 .58.05.85.13V9.47a6.4 6.4 0 0 0-.85-.06 6.31 6.31 0 0 0-6.31 6.31 6.31 6.31 0 0 0 6.31 6.31 6.31 6.31 0 0 0 6.31-6.31V8.7a9.24 9.24 0 0 0 5.4 1.73V7.14a5.6 5.6 0 0 1-3.87-1.32z" />
    </svg>
  );
}

export const socialLinks = [
  { href: siteConfig.socialLinks.instagram, label: "Instagram", Icon: Instagram },
  { href: siteConfig.socialLinks.facebook, label: "Facebook", Icon: Facebook },
  { href: siteConfig.socialLinks.tiktok, label: "TikTok", Icon: TikTokIcon },
].filter((s): s is typeof s & { href: string } => Boolean(s.href));
export function Footer() {
  return (
    <footer className="bg-soft-black py-14 text-[#cfcfd1]">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Badge className="mb-3 border-accent text-accent" />
            <p className="mb-2 font-heading text-lg text-white">{siteConfig.name}</p>
            <p className="max-w-xs text-sm text-[#9a9a9c]">{siteConfig.description}</p>
            {socialLinks.length > 0 && (
              <div className="mt-5 flex gap-4">
                {socialLinks.map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#9a9a9c] transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white">Navigate</h4>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#9a9a9c] hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={siteConfig.contact.phone.link} className="text-sm text-[#9a9a9c] hover:text-accent">
                  {siteConfig.contact.phone.label}
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.contact.phoneSecondary.link}
                  className="text-sm text-[#9a9a9c] hover:text-accent"
                >
                  {siteConfig.contact.phoneSecondary.label}
                </Link>
              </li>
              <li>
                <Link href={siteConfig.contact.email.link} className="text-sm text-[#9a9a9c] hover:text-accent">
                  {siteConfig.contact.email.label}
                </Link>
              </li>
              <li className="text-sm text-[#9a9a9c]">{siteConfig.address.full}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-[13px] text-[#77777a] sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>{siteConfig.developerUrl}</span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
