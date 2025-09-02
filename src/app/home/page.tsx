"use client";
import Image from "next/image";
import AppIcon from "../components/AppIcon";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white">
      {/* Background wallpaper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/wallpaper.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Apps grid */}
      <div className="grid grid-cols-3 gap-6 mt-20">
        <AppIcon name="Contact Me" href="/contact" icon="/icons/contact.png" />
        <AppIcon name="Projects" href="/projects" icon="/icons/projects.png" />
        <AppIcon
          name="Calculator"
          href="/calculator"
          icon="/icons/calculator.png"
        />
        <AppIcon name="Music" href="/spotify" icon="/icons/spotify.png" />
        {/* Add more apps here */}
      </div>
    </main>
  );
}
