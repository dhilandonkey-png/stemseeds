import Image from "next/image";
import Link from "next/link";

import { InstagramIcon } from "@/components/ui/instagram-icon";
import { navigation, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-mint">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-mint/95 p-1.5">
              <Image
                src={site.logo.src}
                alt={site.logo.alt}
                width={36}
                height={36}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-sans text-lg font-bold tracking-tight">
              {site.name}
            </span>
          </div>
          <p className="mt-4 font-display text-lg text-aqua">
            &ldquo;{site.tagline}&rdquo;
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-aqua/75">
            {site.description}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold tracking-[0.22em] text-aqua/70 uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-mint/90 transition-colors hover:text-fresh"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.22em] text-aqua/70 uppercase">
            Get Involved
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={site.applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mint/90 transition-colors hover:text-fresh"
              >
                Chapter Enrollment Form
              </a>
            </li>
            <li>
              <a
                href={site.donateHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mint/90 transition-colors hover:text-fresh"
              >
                Donate on GoFundMe
              </a>
            </li>
            <li>
              <Link
                href="/press"
                className="text-sm text-mint/90 transition-colors hover:text-fresh"
              >
                Press Kit
              </Link>
            </li>
            <li>
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mint/90 transition-colors hover:text-fresh"
              >
                <InstagramIcon />@{site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mint/10 px-6 py-6">
        <p className="mx-auto max-w-6xl text-xs text-aqua/60">
          &copy; {new Date().getFullYear()} {site.name}. A student-led
          philanthropic organization.
        </p>
      </div>
    </footer>
  );
}
