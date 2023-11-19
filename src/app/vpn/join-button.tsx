"use client";

import { useRouter } from "next/navigation";

interface JoinButtonProps {
  url: string;
}

export default function JoinButton({ url }: JoinButtonProps) {
  const router = useRouter();
  return (
    <>
      <button
        className="relative inline-flex justify-center flex-none w-full px-6 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2"
        onClick={() => router.push(url)}
      >
        <span className="inline">Join for free</span>
      </button>
    </>
  );
}
