import React from "react";

import { CiGlobe } from "react-icons/ci";
import { RiMindMap } from "react-icons/ri";
import { IoFlaskOutline } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";

type ScanPhase =
  | "Spidering"
  | "Mapping"
  | "Testing"
  | "Validating"
  | "Reporting";
interface ScanProgress {
  percent: number;
  activePhase: ScanPhase;
}
interface ScanMeta {
  scanType: string;
  targets: string;
  startedAt: string;
  credentials: string;
  files: string;
  checklists: string;
}

const PHASES: { key: ScanPhase; label: string; icon: React.ReactNode }[] = [
  { key: "Spidering", label: "Spidering", icon: <CiGlobe /> },
  { key: "Mapping", label: "Mapping", icon: <RiMindMap /> },
  { key: "Testing", label: "Testing", icon: <IoFlaskOutline /> },
  { key: "Validating", label: "Validating", icon: <MdFactCheck /> },
  { key: "Reporting", label: "Reporting", icon: <FaRegFileLines /> },
];

export default function ScanHeader({
  progress,
  meta,
}: {
  progress: ScanProgress;
  meta: ScanMeta;
}) {
  const activeIndex = PHASES.findIndex((p) => p.key === progress.activePhase);

  return (
    <div className="bg-white dark:bg-[#151B23] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 md:border-r border-gray-100 dark:border-gray-800 md:pr-8">
          {/* Wrapper div controls the actual physical size across breakpoints */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background Circle - Centered at 50/50 */}
              <circle cx="50" cy="50" r="44" fill="#111827" />

              {/* Progress Circle 
          Circumference = 2 * π * 44 ≈ 276.46
      */}
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="#0CC8A8"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="276.46"
                strokeDashoffset={276.46 - (276.46 * progress.percent) / 100}
                className="transition-all duration-500 ease-in-out"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xl sm:text-2xl font-bold text-[#0CC8A8] leading-none">
                {progress.percent}%
              </span>
              <span className="text-[8px] sm:text-[10px] text-gray-400 font-medium uppercase mt-1">
                {progress.percent === 100 ? "Completed" : "In Progress"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative flex flex-row justify-between items-start w-full">
            {/* Background Connector Line - Hidden on very small screens if preferred, or kept for continuity */}
            <div className="absolute top-4 sm:top-5 left-4 right-4 h-px bg-gray-200 dark:bg-gray-800 z-0" />

            {PHASES.map((i, index) => {
              const isCompleted =
                progress.percent === 100 || index < activeIndex;
              const isActive =
                index === activeIndex && progress.percent !== 100;
              const isHighlighted = isActive || isCompleted;

              return (
                <div
                  key={i.key}
                  className="relative z-10 flex flex-1 flex-col items-center gap-2 sm:gap-3"
                >
                  {/* Responsive Circle: smaller on mobile (w-9), larger on desktop (sm:w-13) */}
                  <div
                    className={`
          w-9 h-9 sm:w-12 sm:h-12 lg:w-13 lg:h-13 
          rounded-full flex items-center justify-center transition-all
          ${
            isHighlighted
              ? "bg-[#439691] text-white ring-6 sm:ring-10 ring-[#0CC8A8]/10 shadow-sm"
              : "bg-white border border-gray-100 dark:bg-[#0D1117] dark:border-gray-800 text-gray-400"
          }
        `}
                  >
                    {/* Scaling the icon inside */}
                    <div className="scale-75 sm:scale-100">{i.icon}</div>
                  </div>

                  {/* Responsive Label: Smaller text and no-wrap to keep the single line clean */}
                  <span
                    className={`
          text-[9px] sm:text-[11px] lg:text-[13px] 
          font-bold uppercase tracking-tighter sm:tracking-normal whitespace-nowrap
          ${isHighlighted ? "text-gray-900 dark:text-gray-100" : "text-gray-500"}
        `}
                  >
                    {i.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 dark:bg-gray-800" />

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <MetaItem label="Scan Type" value={meta.scanType} />
            <MetaItem label="Targets" value={meta.targets} />
            <MetaItem label="Started At" value={meta.startedAt} />
            <MetaItem label="Credentials" value={meta.credentials} />
            <MetaItem label="Files" value={meta.files} />
            <MetaItem label="Checklists" value={meta.checklists} isHighlight />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components & Icons ---

function MetaItem({
  label,
  value,
  isHighlight,
}: {
  label: string;
  value: string;
  isHighlight?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight mb-1">
        {label}
      </span>
      <span
        className={`text-sm font-bold truncate ${isHighlight ? "text-[#0CC8A8]" : "text-gray-800 dark:text-gray-200"}`}
      >
        {value}
      </span>
    </div>
  );
}
