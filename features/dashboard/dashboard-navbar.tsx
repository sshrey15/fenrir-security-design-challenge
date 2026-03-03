'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {usePathname, useSearchParams} from "next/navigation";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { SCAN_DATA } from "../../config/home-dashboard-data";
import { useSidebar } from "./sidebar-context";


export default function DashboardNavbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const { toggle } = useSidebar();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

 const getBreadcrumb = () => {
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "Dashboard";
    
    
    return lastSegment
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getScanDetail = () => {
    const scanId = searchParams.get('scanId');
    if (!scanId) return null;
    const row = SCAN_DATA.find((s) => s.id === scanId);
    return row ?? null;
  };

  const scanDetail = getScanDetail();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="w-full h-14 font-sans bg-white dark:bg-[#0A0F13] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-3 sm:px-6">

      {/* Left side: hamburger + breadcrumb */}
      <div className="flex items-center gap-2 text-sm min-w-0">
        {/* Hamburger menu - mobile only */}
        <button
          onClick={toggle}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer shrink-0"
          aria-label="Toggle sidebar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <span className="font-semibold text-gray-900 dark:text-white shrink-0">Scan</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0 hidden sm:block">
          <path d="M9 6l6 6-6 6" />
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0 hidden sm:block">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
        <span className="text-gray-400 hidden sm:inline">Private Assets</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0 hidden sm:block">
          <path d="M9 6l6 6-6 6" />
        </svg>
        {scanDetail ? (
          <>
            <span className="text-gray-400 font-medium hidden sm:inline">{getBreadcrumb()}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0 hidden sm:block">
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span className="text-[#0CC8A8] font-medium truncate">{scanDetail.type}</span>
          </>
        ) : (
          <span className="text-[#0CC8A8] font-medium truncate">
            {getBreadcrumb()}
          </span>
        )}
      </div>


      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-[#0A0F13] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
          Export Report
        </button>

      
        <button
          onClick={() => setIsScanning((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition cursor-pointer ${
            isScanning
              ? 'text-[#EF4444] bg-white dark:bg-[#1A1A1A] border-[#EF4444] hover:bg-red-50 dark:hover:bg-red-950'
              : 'text-[#22C55E] bg-white dark:bg-[#1A1A1A] border-[#22C55E] hover:bg-green-50 dark:hover:bg-green-950'
          }`}
        >
          {isScanning ? (
            
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          ) : (
            
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4l15 8-15 8V4z" />
            </svg>
          )}
          {isScanning ? 'Stop Scan' : 'Start Scan'}
        </button>

    
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer shrink-0"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
                      <MdOutlineWbSunny className="text-gray-600 dark:text-gray-200" />
          ) : (
       <FaRegMoon className="text-gray-600" />
          )}
        </button>
      </div>
    </div>
  )
}