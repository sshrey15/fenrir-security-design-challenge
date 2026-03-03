'use client'

import { useState, useRef, useEffect } from 'react'
import NewScanModal from './new-scan-modal'

export type ColumnKey = 'name' | 'type' | 'status' | 'progress' | 'vulnerability' | 'lastScan'

const ALL_COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: 'name', label: 'Scan Name' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'progress', label: 'Progress' },
  { key: 'vulnerability', label: 'Vulnerability' },
  { key: 'lastScan', label: 'Last Scan' },
]

interface SearchFilterBarProps {
  search: string
  onSearchChange: (value: string) => void
  visibleColumns: ColumnKey[]
  onColumnsChange: (columns: ColumnKey[]) => void
}

export default function SearchFilterBar({
  search,
  onSearchChange,
  visibleColumns,
  onColumnsChange,
}: SearchFilterBarProps) {
  const [columnDropdownOpen, setColumnDropdownOpen] = useState(false)
  const [scanModalOpen, setScanModalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setColumnDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleColumn(key: ColumnKey) {
    if (visibleColumns.includes(key)) {
      
      if (visibleColumns.length > 1) {
        onColumnsChange(visibleColumns.filter((c) => c !== key))
      }
    } else {
      onColumnsChange([...visibleColumns, key])
    }
  }

  function selectAll() {
    onColumnsChange(ALL_COLUMNS.map((c) => c.key))
  }

  return (
    <div className="flex items-center gap-3">
      
      <div className="flex-1 relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search scans by name or type..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full dark:bg-[#151B23] pl-10 pr-4 py-2.5 rounded-lg border dark:border-gray-700 border-gray-200 bg-white text-sm text-gray-900 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]"
        />
      </div>

      {/* Filter */}
      <button className="flex dark:text-white items-center gap-2 px-4 py-2.5 border border-gray-200 dark:bg-[#151B23] dark:border-gray-700 rounded-lg text-sm text-gray-600 bg-white hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
        Filter
      </button>

      {/* Column dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setColumnDropdownOpen((prev) => !prev)}
          className="flex dark:text-white items-center gap-2 px-4 py-2.5 border border-gray-200 dark:bg-[#151B23] dark:border-gray-700 rounded-lg text-sm text-gray-600 bg-white hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
          Column
        </button>

        {columnDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 py-2">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Toggle Columns
              </span>
              <button
                onClick={selectAll}
                className="text-xs text-[#0CC8A8] hover:underline cursor-pointer"
              >
                Show all
              </button>
            </div>

        
            {ALL_COLUMNS.map((col) => {
              const isActive = visibleColumns.includes(col.key)
              return (
                <button
                  key={col.key}
                  onClick={() => toggleColumn(col.key)}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
                >
             
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${
                      isActive
                        ? 'bg-[#0CC8A8] border-[#0CC8A8]'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {isActive && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                  <span className={`${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                    {col.label}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

   
      <div
        
        className="flex items-center gap-2 px-4 py-2.5 bg-[#0CC8A8] text-white rounded-lg text-sm font-medium hover:bg-[#0AB89A] transition cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <button onClick={() => setScanModalOpen(true)}>
          New scan
        </button>
      
      </div>

      <NewScanModal open={scanModalOpen} onClose={() => setScanModalOpen(false)} />
    </div>
  )
}