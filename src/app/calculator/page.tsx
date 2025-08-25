"use client";
import { useState } from "react";
import NavigationButtons from "../components/NavigationButtons";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput(""); // Clear everything
    } else if (value === "⌫") {
      setInput(input.slice(0, -1)); // Remove last character
    } else if (value === "=") {
      try {
        // Evaluate safely
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  // Add new buttons for "C" and "⌫"
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "⌫"
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      
      <div className="bg-gray-900 p-4 rounded-xl w-80">
        {/* Display */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 text-right text-2xl">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-lg font-medium"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Back + Home buttons */}
      <NavigationButtons />
    </main>
  );
}
