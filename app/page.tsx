import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
         AI-powered video to text <br className="hidden sm:inline" />
         for lawyers and law students.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        The AI-powered video to text transcription application tailored for lawyers and law students. Effortlessly convert recordings into accurate text, 
        streamline your workflow, and unlock new levels of productivity.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Get Started 
        </Link>
      </div>
    </section>
  )
}
