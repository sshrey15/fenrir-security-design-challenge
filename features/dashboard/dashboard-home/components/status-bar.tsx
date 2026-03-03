import type { ScanStatus } from '../../../../types/types'

const STATUS_STYLES: Record<ScanStatus, string> = {
  Completed: 'bg-green-50 dark:bg-[#132E28]  text-[#00C94E] dark:border-[#074B30] border-green-200',
  Scheduled: 'bg-[#F0F5F9] dark:bg-transparent  text-gray-600 dark:text-[#60748D] dark:border-[#2F363E] border-gray-200',
  Failed: 'bg-red-50 dark:bg-[#301E25]  text-[#F72C3A] dark:border-[#5C252B] border-red-200',
}

export default function StatusBadge({ status }: { status: ScanStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium border ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  )
}