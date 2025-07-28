// components/Breadcrumb.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment !== "");

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment.replace(/-/g, " "));

    return { href, label };
  });

  return (
    <nav className="text-sm w-full ">
      <ul className="flex border border-transparent text-center w-full border-t-gray-200 border-b-gray-200 space-x-2 text-[16px] leading-[30px] text-[#515a76]">
        <li>
          <Link href="/" className="hover:underline ">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center space-x-2">
            <span>/</span>
            <Link
              href={crumb.href}
              className="hover:underline capitalize text-[#08090c] cursor-pointer font-[500]"
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
