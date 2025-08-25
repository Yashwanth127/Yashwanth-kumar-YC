"use client";
import Link from "next/link";
import Image from "next/image";

interface AppIconProps {
  name: string;
  href: string;
  icon: string; // path to app icon image
}

export default function AppIcon({ name, href, icon }: AppIconProps) {
  return (
    <Link href={href} className="flex flex-col items-center gap-2 w-20">
      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
        <Image src={icon} alt={name} width={40} height={40} />
      </div>
      <span className="text-sm">{name}</span>
    </Link>
  );
}
