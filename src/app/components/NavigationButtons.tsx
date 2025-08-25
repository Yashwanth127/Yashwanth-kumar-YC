"use client";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

export default function NavigationButtons() {
  const router = useRouter();

  return (
    <div className="fixed bottom-6 w-full flex justify-center gap-6">
      <button
        onClick={() => router.back()}
        className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => router.push("/home")}
        className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
      >
        <Home className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
