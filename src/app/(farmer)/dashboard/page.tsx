import Marquee from "@/app/(landing)/_components/marquee";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex flex-col items-center">
        <div className="relative w-full max-w-full">
          <div className="absolute inset-0 z-0 w-full overflow-hidden rounded-4xl">
            <Marquee />
          </div>
          <div className="bg-primary/70 text-primary-foreground relative z-20 my-auto flex h-150 flex-col items-center justify-center rounded-4xl p-20 text-center">
            <h2 className="text-4xl font-bold text-balance md:text-4xl lg:text-6xl">
              Welcome to your farm&apos;s digital twin
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
                size="sm"
                asChild
              >
                <Link href={"/digital-twin"}>Your farm&apos;s digital twin</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
