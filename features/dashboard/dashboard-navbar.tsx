'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DashboardNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="w-full h-14 font-sans bg-white dark:bg-[#0A0F13] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">

  
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold text-gray-900 dark:text-white">Scan</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
          <path d="M9 6l6 6-6 6" />
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
        <span className="text-gray-400">Private Assets</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
          <path d="M9 6l6 6-6 6" />
        </svg>
        <span className="text-[#0CC8A8] font-medium">
          New Scan
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-[#0A0F13] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
          Export Report
        </button>

        {/* Toggle: Stop Scan / Start Scan */}
        <button
          onClick={() => setIsScanning((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition cursor-pointer ${
            isScanning
              ? 'text-[#EF4444] bg-white dark:bg-[#1A1A1A] border-[#EF4444] hover:bg-red-50 dark:hover:bg-red-950'
              : 'text-[#22C55E] bg-white dark:bg-[#1A1A1A] border-[#22C55E] hover:bg-green-50 dark:hover:bg-green-950'
          }`}
        >
          {isScanning ? (
            /* Stop icon (square) */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          ) : (
            /* Play icon (triangle) */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4l15 8-15 8V4z" />
            </svg>
          )}
          {isScanning ? 'Stop Scan' : 'Start Scan'}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}