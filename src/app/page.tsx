"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LockScreen() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
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

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const unlock = () => {
    console.log("Unlock clicked ✅");
    router.push("/home"); // go to Home page
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 overflow-hidden"
      onClick={unlock}
    >
      {/* Background name watermark */}
      <h1 className="absolute text-[4rem] font-bold text-gray-300 opacity-20 select-none">
       YASHWANTH KUMAR S
      </h1>

      {/* Foreground content */}
      <div className="text-center space-y-2 cursor-pointer">
        <h1 className="text-4xl font-semibold">{time}</h1>
        <p className="text-base">{date}</p>
        <p className="text-sm text-gray-500">Click anywhere to unlock</p>
      </div>
    </main>
  );
}
