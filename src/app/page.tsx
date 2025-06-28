import { Suspense } from "react";
import Head from "next/head";
import { personalInfo } from "@/data/portfolio";
import HomeContent from "@/components/HomeContent";

export default function Page() {
  return (
    <>
      <Head>
        <title>{personalInfo.name} | {personalInfo.title}</title>
        <meta
          name="description"
          content={`Portfolio of ${personalInfo.name}, a ${personalInfo.title} passionate about building modern, scalable applications and exploring FinTech.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={`${personalInfo.name} | ${personalInfo.title}`}
        />
        <meta
          property="og:description"
          content={`Explore ${personalInfo.name}'s projects, experience, and interests in full-stack development and FinTech.`}
        />
        <meta property="og:image" content="/hero.png" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <HomeContent />
      </Suspense>
    </>
  );
}
