import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import HeroSection from "./_components/hero-section";
import KrishiVeda from "./_components/krishi-veda";
import Marquee from "./_components/marquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex h-screen flex-col items-center">
        <div className="flex h-screen min-h-screen w-full items-center justify-center bg-linear-[0deg,var(--primary)_-30%,transparent_20%] pb-20">
          <HeroSection
            mainText={<KrishiVeda />}
            subText={
              <span className="font-semibold italic">
                Taking you one step to smart farming
              </span>
            }
          />
        </div>
        <div className="relative w-full max-w-full">
          <div className="absolute inset-0 z-0 w-full overflow-hidden rounded-4xl">
            <Marquee />
          </div>
          <div className="bg-primary/70 text-primary-foreground relative z-20 my-auto flex h-150 flex-col items-center justify-center rounded-4xl p-20 text-center">
            <h2 className="text-4xl font-bold text-balance md:text-4xl lg:text-6xl">
              KrishiVeda is smart farming at your fingertips.
            </h2>
            <p className="py-8 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              obcaecati placeat veniam ipsam minus eaque atque dignissimos non
              eligendi quasi!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
                size="sm"
                asChild
              >
                <Link href={"/sign-up"}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
