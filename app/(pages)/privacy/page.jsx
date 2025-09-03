import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#0f3bbe] mb-6 text-center">
          Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website
          and services.
        </p>
        <h3 className="text-xl font-semibold text-[#0f3bbe] mt-6 mb-2">
          Information We Collect
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Personal information you provide (name, email, etc.)</li>
          <li>Usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#0f3bbe] mt-6 mb-2">
          How We Use Information
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>To provide and improve our services</li>
          <li>To communicate with you</li>
          <li>To personalize your experience</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#0f3bbe] mt-6 mb-2">
          Your Rights
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Access, update, or delete your personal information</li>
          <li>Opt out of marketing communications</li>
        </ul>
        <p className="text-gray-700 mt-6">
          For more details or questions, please{" "}
          <Link
            href="/contact"
            className="text-[#0f3bbe] underline"
          >
            contact us
          </Link>
          .
        </p>
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="bg-[#0f3bbe] hover:bg-[#1e4bb8] text-white font-semibold py-2 px-6 rounded transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}