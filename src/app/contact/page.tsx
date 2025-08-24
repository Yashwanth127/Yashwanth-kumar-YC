"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavigationButtons from "../components/NavigationButtons";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <div className="space-y-4 text-center">
        <p className="text-lg">📞 +91 9876543210</p>
        <p className="text-lg">✉️ yashwanth@example.com</p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-6 text-2xl">
        <a href="https://github.com/Yashwanth127" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400" />
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-400" />
        </a>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons backHref="/home" />
    </main>
  );
}
