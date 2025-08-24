"use client";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

interface Props {
  backHref: string;
}

export default function NavigationButtons({ backHref }: Props) {
  return (
    <div className="flex gap-4 mt-10">
      <Link
        href={backHref}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl"
      >
        <ArrowLeft size={20} /> Back
      </Link>

      <Link
        href="/home"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl"
      >
        <Home size={20} /> Home
      </Link>
    </div>
  );
}
