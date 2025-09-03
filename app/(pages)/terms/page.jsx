import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#0f3bbe] mb-6 text-center">
          Terms &amp; Conditions
        </h2>
        <p className="text-gray-700 mb-4">
          By accessing and using our website and services, you agree to comply with
          the following terms and conditions. Please read them carefully.
        </p>
        <h3 className="text-xl font-semibold text-[#0f3bbe] mt-6 mb-2">
          Use of Services
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Services are provided for lawful purposes only.</li>
          <li>Do not misuse or attempt to disrupt our services.</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#0f3bbe] mt-6 mb-2">
          Intellectual Property
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>
            All content, trademarks, and logos are the property of their
            respective owners.
          </li>
          <li>Do not copy, reproduce, or distribute content without permission.</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#0f3bbe] mt-6 mb-2">
          Limitation of Liability
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>
            We are not liable for any damages resulting from the use of our
            services.
          </li>
          <li>Services are provided "as is" without warranties of any kind.</li>
        </ul>
        <p className="text-gray-700 mt-6">
          For questions or concerns, please{" "}
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