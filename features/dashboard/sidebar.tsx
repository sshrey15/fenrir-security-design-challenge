"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSidebar } from "./sidebar-context";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <MdOutlineDashboardCustomize size={20}  />
    ),
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: (
      <BsClipboard2Check size={20} />
    ),
  },
  {
    label: "Scans",
    href: "/dashboard/scans",
    icon: (
      <LuFileSpreadsheet size={20} />
    ),
  },
  {
    label: "Schedule",
    href: "/dashboard/schedule",
    icon: (
      <CiCalendar size={20} />
    ),
  },
];

const BOTTOM_NAV_ITEMS = [
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: (
      <FaRegBell size={20} />
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <IoSettingsOutline size={20} />
    ),
  },
  {
    label: "Support",
    href: "/dashboard/support",
    icon: (
      <IoMdInformationCircleOutline size={20} />
 
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
