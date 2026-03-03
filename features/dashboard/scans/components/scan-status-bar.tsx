import type { ScanStatusCounts } from '../../../../types/types'

interface ScanStatusBarProps {
  counts: ScanStatusCounts
}

export default function ScanStatusBar({ counts }: ScanStatusBarProps) {
  return (
    <div className="flex flex-wrap gap-4 bg-[#F0F5F9] items-center justify-between px-4 sm:px-6 py-3 border-t dark:bg-[#151B23] text-sm">
     
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <StatItem icon={<AgentIcon />} label="Sub-Agents" value={counts.subAgents} />
        <Divider />
        <StatItem icon={<ParallelIcon />} label="Parallel Executions" value={counts.parallelExecutions} />
        <Divider />
        <StatItem icon={<OperationIcon />} label="Operations" value={counts.operations} />
      </div>

      {/* Right: severity counters */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-5">
        <SeverityCounter label="Critical" value={counts.critical} color="#EF4444" />
        <SeverityCounter label="High" value={counts.high} color="#F97316" />
        <SeverityCounter label="Medium" value={counts.medium} color="#EABB08" />
        <SeverityCounter label="Low" value={counts.low} color="#22C55E" />
      </div>
    </div>
  )
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
      {icon}
      <span className="text-xs">
        {label}: <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
      </span>
    </div>
  )
}

function SeverityCounter({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="font-medium" style={{ color }}>
        {label}:
      </span>
      <span className="font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  )
}

function Divider() {
  return <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
}

function AgentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  )
}

function ParallelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <line x1="6" y1="4" x2="6" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="18" y1="4" x2="18" y2="20" />
    </svg>
  )
}

function OperationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
