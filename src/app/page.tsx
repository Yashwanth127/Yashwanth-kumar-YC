"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);
  const [time, setTime] = useState<Date | null>(null); // null initially (avoid SSR mismatch)

  // Update time on client
  useEffect(() => {
    setTime(new Date()); // set first time after client renders
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time
    ? time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
    : ""; // show empty until client sets
  const formattedDate = time
    ? time.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
    : "";

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white">
      {/* Wallpaper */}
      <div className="absolute inset-0 -z-10">
        <Image src="/wallpaper.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {isLocked ? (
        // 🔒 Lock Screen
        <div
          className="text-center space-y-4 cursor-pointer"
          onClick={() => setIsLocked(false)}
        >
          <h1 className="text-6xl font-bold">{formattedTime}</h1>
          <p className="text-lg">{formattedDate}</p>
          <p className="animate-bounce text-sm text-gray-300">⬆️ Swipe up or click to unlock</p>
        </div>
      ) : (
        // 🔓 Unlocked Home
        <div className="text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-blue-400">Yashwanth Kumar</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            MCA Graduate | Cyber Security & Cloud Enthusiast | Building modern web apps with Next.js
          </p>

          <div className="flex gap-4 justify-center mt-6">
            <a href="/about" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium">
              About Me
            </a>
            <a href="/projects" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-medium">
              My Projects
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
