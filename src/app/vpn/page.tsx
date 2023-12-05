import { env } from "@/env.mjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { z } from "zod";
import JoinButton from "./join-button";
interface VpnPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  title: "NuxtVPN",
  description:
    "Unleash a Secure Digital Experience: Elevate Your Online Presence with Our Cutting-Edge VPN Solutions!",
  icons: {
    icon: "https://nuxt.com/icon.png",
    apple: "https://nuxt.com/icon.png",
  },
};

const searchParamsSchema = z.object({
  userId: z.string(),
  url: z.string().email(),
});

export default function VpnPage({ searchParams }: VpnPageProps) {
  const parsed = searchParamsSchema.safeParse(searchParams);
  if (!parsed.success) notFound();
  const { userId, url } = parsed.data;
  const baseUrl = `${env.REDIRECT_URL}?url=${url}&userid=${userId}`;
  return (
    <>
      <section className="bg-white min-h-screen">
        <div className="relative lg:py-24 p-12">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div className="relative items-center gap-12 m-auto lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <div>
                      <span className="inline-flex items-center text-3xl font-semibold tracking-tighter text-black">
                        <span className="ml-2">NuxtVPN</span>
                      </span>
                    </div>
                    <div className="py-6"></div>
                    <span className="w-auto px-4 py-2 mt-10 rounded-full bg-teal-500/10">
                      <span className="text-xs text-teal-500">
                        Instantly access internet without security
                      </span>
                    </span>
                    <p className="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900">
                      Fortify Your Digital World.
                    </p>
                    <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                      Unleash a Secure Digital Experience: Elevate Your Online
                      Presence with Our Cutting-Edge VPN Solutions!
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full pt-8 mx-auto lg:justify-start md:pt-6">
                    <form>
                      <div className="w-full p-2 rounded-xl md:rounded-full bg-teal-500/10 sm:flex sm:items-center sm:relative">
                        <div className="min-w-0 shrink w-60">
                          <input
                            aria-label="Email address"
                            autoComplete="email"
                            className="block w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-blue-500 focus:outline-none focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm"
                            placeholder="Email address"
                            required
                            type="email"
                          />
                        </div>
                        <JoinButton url={baseUrl} />
                      </div>
                      <p className="mt-3 text-slate-500">
                        Get notified and you&apos;re ready to go!
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
                <img
                  alt="hero"
                  className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
                  src="https://images.unsplash.com/photo-1503444200347-fa86187a2797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
