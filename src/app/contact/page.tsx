"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavigationButtons from "../components/NavigationButtons";

export default function Contact() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-gray-800 bg-gray-100">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

      {/* Name */}
      <p className="text-xl font-semibold mb-2">Yashwanth Kumar S</p>

      {/* Professional Tagline */}
      <p className="text-lg text-gray-300 mb-6 text-center">
        MCA Graduate | Aspiring Full Stack Developer | Cloud & Security Enthusiast
      </p>

      {/* Contact Info */}
      <p className="mb-2 text-lg">📞 +91 91083 83983 | 83106 46687</p>
      <p className="mb-6">✉️ yashwanthkumarsmhy@gmail.com</p>

      {/* Social Links */}
      <div className="flex space-x-6 mt-4 text-3xl">
        <a
          href="https://github.com/Yashwanth127"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yashwanth-kumar-s127/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/yashwanth7_c_a_t/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10">
        <NavigationButtons  />
      </div>
    </main>
  );
}
