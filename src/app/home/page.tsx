"use client";
import AppIcon from "../components/AppIcon";

export default function HomePage() {
  return (
   <main className="relative min-h-screen flex flex-col items-center justify-center text-gray-800 bg-gray-100">


      {/* Apps grid */}
      <div className="grid grid-cols-3 gap-6 mt-20">
        <AppIcon name="Contact Me" href="/contact" icon="/icons/contact.png" />
        <AppIcon name="Projects" href="/projects" icon="/icons/projects.png" />
        <AppIcon
          name="Calculator"
          href="/calculator"
          icon="/icons/calculator.png"
        />
        <AppIcon name="Music" href="/music" icon="/icons/spotify.png" />
        {/* Add more apps here */}
      </div>

      {/* Footer with your name + copyright */}
      <footer className="absolute bottom-4 text-sm text-gray-400 text-center w-full">
        © {new Date().getFullYear()} YASHWANTH KUMAR S — All Rights Reserved
      </footer>
    </main>
  );
}
