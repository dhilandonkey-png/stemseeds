import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { factSheet, pressIntro, pressPhotos, storyAngles } from "@/content/press";
import { site, stats } from "@/content/site";
import { founders } from "@/content/team";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "STEMSeeds press kit: fact sheet, founder bios, story angles, and photos for reporters, partners, and funders.",
};

export default function PressPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
              {pressIntro.eyebrow}
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              {pressIntro.title}
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {pressIntro.body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={site.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{site.instagram.handle}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-mint/60 sm:grid-cols-3 sm:divide-x sm:divide-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 px-6 py-8 text-center"
              >
                <dd className="font-sans text-4xl font-bold tracking-tight text-primary tabular-nums sm:text-5xl">
                  {stat.value}
                  {stat.suffix ? (
                    <span className="text-fresh">{stat.suffix}</span>
                  ) : null}
                </dd>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="bg-mint/50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="At a Glance" title="Fact sheet" />
          </Reveal>
          <dl className="mt-10 divide-y divide-border rounded-3xl border border-border bg-background">
            {factSheet.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="For Reporters" title="Story angles" />
          </Reveal>
          <ul className="mt-8 space-y-3">
            {storyAngles.map((angle) => (
              <li
                key={angle}
                className="flex gap-3 text-base leading-relaxed text-foreground/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-fresh"
                />
                {angle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-aqua/35 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="Leadership" title="Founder bios" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-3xl border border-border bg-background p-6"
              >
                <h3 className="font-sans text-lg font-bold text-foreground">
                  {founder.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {founder.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Media"
              title="Photos"
              lead="These photos are cleared for press use. Click any photo to open the full-size file."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pressPhotos.map((photo) => (
              <a
                key={photo.src}
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-border"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
