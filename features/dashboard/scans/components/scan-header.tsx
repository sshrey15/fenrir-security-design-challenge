import React from 'react';

import { CiGlobe } from "react-icons/ci";
import { RiMindMap } from "react-icons/ri";
import { IoFlaskOutline } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";

// --- Types ---
type ScanPhase = 'Spidering' | 'Mapping' | 'Testing' | 'Validating' | 'Reporting';
interface ScanProgress { percent: number; activePhase: ScanPhase; }
interface ScanMeta {
  scanType: string; targets: string; startedAt: string;
  credentials: string; files: string; checklists: string;
}

const PHASES: { key: ScanPhase; label: string; icon: React.ReactNode }[] = [
  { key: 'Spidering', label: 'Spidering', icon: <CiGlobe /> },
  { key: 'Mapping', label: 'Mapping', icon: <RiMindMap /> },
  { key: 'Testing', label: 'Testing', icon: <IoFlaskOutline /> },
  { key: 'Validating', label: 'Validating', icon: <MdFactCheck />},
  { key: 'Reporting', label: 'Reporting', icon: <FaRegFileLines /> },
];

export default function ScanHeader({ progress, meta }: { progress: ScanProgress; meta: ScanMeta }) {
  const activeIndex = PHASES.findIndex((p) => p.key === progress.activePhase);

  return (
    <div className="bg-white dark:bg-[#151B23] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8">
        
        <div className="flex items-center justify-center md:border-r border-gray-100 dark:border-gray-800 md:pr-8">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            {/* <svg className="w-full h-full transform -rotate-90">
              <circle cx="56" cy="56" r="48" fill="#111827" />
              <circle 
                cx="56" cy="56" r="48" 
                stroke="#0CC8A8" strokeWidth="3.5" fill="none" 
                strokeDasharray="301.6" 
                strokeDashoffset={301.6 - (301.6 * progress.percent) / 100}
                strokeLinecap="round"
              />
            </svg> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#0CC8A8]">{progress.percent}%</span>
              <span className="text-[10px] text-gray-400 font-medium uppercase">{progress.percent === 100 ? 'Completed' : 'In Progress'}</span>
            </div>
          </div>
        </div>

     
        <div className="flex flex-col gap-6">
          
       
          <div className="relative flex flex-wrap sm:flex-nowrap justify-between items-start gap-4 sm:gap-0">
          
            <div className="absolute top-5 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800 z-0 hidden sm:block" />
            
            {PHASES.map((phase, i) => {
              const isCompleted = progress.percent === 100 || i < activeIndex;
              const isActive = i === activeIndex && progress.percent !== 100;
              const isHighlighted = isActive || isCompleted;

              return (
                <div key={phase.key} className="relative z-10 flex flex-col items-center gap-3 px-2">
                  <div className={`
                    w-13 h-13 rounded-full flex items-center justify-center transition-all
                    ${isHighlighted 
                      ? 'bg-[#439691] text-white ring-10 ring-[#0CC8A8]/10' 
                      : 'bg-white border border-gray-200 dark:bg-[#0D1117] dark:border-gray-800 text-gray-400'}
                  `}>
                    {phase.icon}
                  </div>
                  <span className={`text-[13px] font-semibold ${isHighlighted ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400'}`}>
                    {phase.label}
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

function MetaItem({ label, value, isHighlight }: { label: string; value: string; isHighlight?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight mb-1">{label}</span>
      <span className={`text-sm font-bold truncate ${isHighlight ? 'text-[#0CC8A8]' : 'text-gray-800 dark:text-gray-200'}`}>
        {value}
      </span>
    </div>
  );
}