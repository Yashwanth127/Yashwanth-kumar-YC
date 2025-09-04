"use client";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Deep Fake Detection</h2>
        <p className="mb-4">
  This project focuses on detecting deep fake videos using a custom 
  Convolutional Neural Network (CNN). The model is trained on real and 
  fake video datasets, extracting frame-level features to identify 
  manipulated content. It preprocesses video frames, applies image 
  augmentation, and learns spatial patterns to differentiate authentic 
  from altered faces. The application can help in detecting fake media 
  and provides a reliable tool for identifying deep fakes.
</p>


        {/* Local video */}
        <video width="80%" controls className="rounded-lg mb-4">
          <source src="/videos/demo-Project.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex gap-6">
          <Link
            href="https://github.com/Yashwanth127/Deep-fake-detect"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
