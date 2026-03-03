'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { ScanRow } from '../../../../types/types'
import type { ColumnKey } from './search-filter-bar'
import StatusBadge from './status-bar'
import ProgressBar from './progress-bar'
import VulnPills from './vulnerability-pills'

interface ScanTableProps {
  data: ScanRow[]
  pageSize?: number
  totalScans?: number
  visibleColumns: ColumnKey[]
}

const COLUMN_HEADERS: Record<ColumnKey, string> = {
  name: 'Scan Name',
  type: 'Type',
  status: 'Status',
  progress: 'Progress',
  vulnerability: 'Vulnerability',
  lastScan: 'Last Scan',
}

export default function ScanTable({ data, pageSize = 15, totalScans, visibleColumns }: ScanTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()

  const totalPages = Math.ceil(data.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedData = data.slice(startIndex, endIndex)

  const total = totalScans ?? data.length
  const showingStart = startIndex + 1
  const showingEnd = Math.min(endIndex, data.length)

  function goToPrev() {
    setCurrentPage((p) => Math.max(1, p - 1))
  }

  function goToNext() {
    setCurrentPage((p) => Math.min(totalPages, p + 1))
  }

  function isVisible(key: ColumnKey) {
    return visibleColumns.includes(key)
  }

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="font-semibold border-b border-gray-200 dark:border-gray-700">
            {isVisible('name') && (
              <th className="text-left text-sm text-gray-400 tracking-wider px-6 py-3">
                {COLUMN_HEADERS.name}
              </th>
            )}
            {isVisible('type') && (
              <th className="text-left text-sm text-gray-400 tracking-wider px-6 py-3">
                {COLUMN_HEADERS.type}
              </th>
            )}
            {isVisible('status') && (
              <th className="text-left text-sm text-gray-400 tracking-wider px-6 py-3">
                {COLUMN_HEADERS.status}
              </th>
            )}
            {isVisible('progress') && (
              <th className="text-left text-sm text-gray-400 tracking-wider px-6 py-3">
                {COLUMN_HEADERS.progress}
              </th>
            )}
            {isVisible('vulnerability') && (
              <th className="text-left text-sm text-gray-400 tracking-wider px-6 py-3">
                {COLUMN_HEADERS.vulnerability}
              </th>
            )}
            {isVisible('lastScan') && (
              <th className="text-left text-sm text-gray-400 tracking-wider px-6 py-3">
                {COLUMN_HEADERS.lastScan}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr
              key={row.id}
              onClick={() => router.push(`/dashboard/scans?scanId=${row.id}`)}
              className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition cursor-pointer"
            >
              {isVisible('name') && (
                <td className="px-6 py-4 text-sm dark:text-white font-medium text-gray-900">
                  {row.name}
                </td>
              )}
              {isVisible('type') && (
                <td className="px-6 py-4 text-sm dark:text-white text-gray-500">
                  {row.type}
                </td>
              )}
              {isVisible('status') && (
                <td className="px-6 py-4">
                  <StatusBadge status={row.status} />
                </td>
              )}
              {isVisible('progress') && (
                <td className="px-6 py-4">
                  <ProgressBar value={row.progress} />
                </td>
              )}
              {isVisible('vulnerability') && (
                <td className="px-6 py-4">
                  <VulnPills v={row.vulnerabilities} />
                </td>
              )}
              {isVisible('lastScan') && (
                <td className="px-6 py-4 text-sm text-gray-400">
                  {row.lastScan}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-medium text-gray-400">
          Showing {showingStart}-{showingEnd} of {total} Scans
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={goToPrev}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}