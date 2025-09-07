"use client";
import { useState } from "react";
import NavigationButtons from "../components/NavigationButtons";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "⌫") {
      setInput(input.slice(0, -1)); // Backspace
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Calculate
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "⌫"
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">CALCULATOR</h1>
      
      <div className="bg-white p-5 rounded-lg shadow-md w-80">
        {/* Display */}
        <div className="bg-gray-200 p-4 rounded text-right text-xl font-mono mb-4 overflow-x-auto">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`p-4 rounded font-semibold transition 
                ${btn === "C" ? "bg-red-400 hover:bg-red-500 text-white" :
                btn === "⌫" ? "bg-yellow-400 hover:bg-yellow-500 text-white" :
                btn === "=" ? "bg-green-500 hover:bg-green-600 text-white" :
                "bg-gray-300 hover:bg-gray-400"}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Back + Home buttons */}
      <div className="mt-6">
        <NavigationButtons />
      </div>
    </main>
  );
}
