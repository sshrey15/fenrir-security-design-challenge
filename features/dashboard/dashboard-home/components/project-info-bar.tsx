import type{ ProjectInfo}  from '../../../../types/types'

export default function ProjectInfoBar({ info }: { info: ProjectInfo }) {
  const items = [
    { label: 'Org', value: info.org },
    { label: 'Owner', value: info.owner },
    { label: 'Total Scans', value: info.totalScans },
    { label: 'Scheduled', value: info.scheduled },
    { label: 'Rescans', value: info.rescans },
    { label: 'Failed Scans', value: info.failedScans },
  ]

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-gray-500 px-4 sm:px-6 py-4">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-4 sm:gap-8">
          <div>
            <span className="text-gray-400 ">{item.label}: </span>
            <span className="font-semibold text-gray-900 dark:text-white ">{item.value}</span>
          </div>
          {i < items.length - 1 && <div className="w-px h-5 bg-gray-200 hidden sm:block" />}
        </div>
      ))}

      <div className="ml-auto flex items-center gap-2 text-gray-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span className="text-xs">{info.lastUpdated}</span>
      </div>
    </div>
  )
}