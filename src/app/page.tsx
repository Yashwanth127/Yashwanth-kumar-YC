"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LockScreen() {
  const [time, setTime] = useState<string>(""); // start empty to avoid hydration mismatch
  const [date, setDate] = useState<string>(""); // start empty to avoid hydration mismatch
  const [unlocked, setUnlocked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    }

    updateDateTime(); // run immediately on mount
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const unlock = () => {
    setUnlocked(true);
    router.push("/home"); // go to Home page after unlock
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white bg-black">
      {!unlocked ? (
        <div className="text-center space-y-4 cursor-pointer" onClick={unlock}>
          <h1 className="text-6xl font-bold">{time}</h1>
          <p className="text-lg">{date}</p>
          <p className="animate-bounce text-sm text-gray-300">
            ⬆️ Swipe up or click to unlock
          </p>
        </div>
      ) : null}
    </main>
  );
}
