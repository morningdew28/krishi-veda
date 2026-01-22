import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import AboutPage from "./_components/about";

export default async function About() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex h-screen flex-col items-center">
        <AboutPage />
      </main>
    </HydrateClient>
  );
}
