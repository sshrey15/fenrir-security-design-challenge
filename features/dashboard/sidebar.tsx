"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSidebar } from "./sidebar-context";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    label: "Scans",
    href: "/dashboard/scans",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 11-6.219-8.56" />
        <path d="M21 3v5h-5" />
      </svg>
    ),
  },
  {
    label: "Schedule",
    href: "/dashboard/schedule",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

const BOTTOM_NAV_ITEMS = [
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    label: "Support",
    href: "/dashboard/support",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { close } = useSidebar();

  const allItems = [...NAV_ITEMS, ...BOTTOM_NAV_ITEMS];
  const active = allItems.find(
    (item) => item.href !== '/dashboard'
      ? pathname.startsWith(item.href)
      : pathname === item.href,
  )?.label ?? "Dashboard";

  return (
    <div className="flex font-sans flex-col dark:bg-[#0A0F13]   h-full">
      <div className="flex items-center gap-3 px-4 pt-6 pb-6">
        <div className="w-6 h-6 bg-white rounded-full border-6  border-[#009B95] flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <Link href="/">
          <span className="text-xl dark:text-white font-bold text-gray-900">
            aps
          </span>
        </Link>
      </div>

      <nav className=" space-y-1 px-3 pb-6">
        {NAV_ITEMS.map(({ label, icon, href }) => (
          <Link key={label} href={href} onClick={close}>
            <button
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-left font-medium text-sm ${
                active === label
                  ? "bg-[#E6FAF6] dark:bg-[#07262A] text-[#0CC8A8]"
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-[#646F7F] hover:text-gray-900"
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          </Link>
        ))}
      </nav>

      <div className="border-t dark:border-gray-700 border-gray-200 mx-4 my-1" />

      <nav className="space-y-1 px-3 pb-4 pt-6">
        {BOTTOM_NAV_ITEMS.map(({ label, icon, href }) => (
          <Link key={label} href={href} onClick={close}>           <button
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-left font-medium text-sm ${
                active === label
                  ? "bg-[#E6FAF6] dark:bg-[#07262A] text-[#0CC8A8]"
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-[#646F7F] hover:text-gray-900"
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          </Link>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="border-t dark:border-gray-700 border-gray-200 px-4 py-4">
        <button className="w-full flex items-center gap-3 hover:opacity-80 transition">
          <Image
            src="/dashboard/avatar.png"
            alt="User Image"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs dark:text-white text-gray-500 truncate">
              admin@edu.com
            </p>
            <p className="text-sm dark:text-[#352E2D] font-semibold text-gray-900 truncate">
              Security Lead
            </p>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400 shrink-0"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
