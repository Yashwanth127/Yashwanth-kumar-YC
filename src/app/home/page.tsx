"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white">
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

      {/* Content */}
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-400">Yashwanth Kumar</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          MCA Graduate | Cyber Security & Cloud Enthusiast | Building modern web apps with Next.js
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <Link
            href="/contact"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
