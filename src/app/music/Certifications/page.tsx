"use client";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "Certification 1",
      issuer: "Organization Name",
      date: "Month YYYY",
    },
    
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">My Certifications</h1>

      <div className="w-full max-w-2xl space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p className="text-gray-600 mt-1">Issued by: {cert.issuer}</p>
            <p className="text-gray-500 text-sm mt-1">Date: {cert.date}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-10 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        ← Back
      </button>
    </main>
  );
}
