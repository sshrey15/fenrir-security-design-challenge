'use client'

import { useState, useEffect, useRef } from 'react'

interface NewScanModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: { name: string; type: string }) => void
}

const SCAN_TYPES = ['Greybox', 'Blackbox', 'Whitebox']

/* Inner form — remounted via key when modal opens so state auto-resets */
function NewScanForm({ onClose, onSubmit }: Omit<NewScanModalProps, 'open'>) {
  const [name, setName] = useState('')
  const [type, setType] = useState(SCAN_TYPES[0])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    onSubmit({ name: name.trim(), type })
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
      {/* Scan Name */}
      <div className="space-y-2">
        <label htmlFor="scan-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Scan Name
        </label>
        <input
          id="scan-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Web App Servers"
          autoFocus
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B23] text-sm text-gray-900 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]"
        />
      </div>

      {/* Scan Type */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Scan Type
        </label>
        <div className="flex gap-2">
          {SCAN_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition cursor-pointer ${
                type === t
                  ? 'bg-[#0CC8A8] text-white border-[#0CC8A8]'
                  : 'bg-white dark:bg-[#151B23] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!name.trim()}
          className="px-5 py-2.5 rounded-lg text-sm font-medium bg-[#0CC8A8] text-white hover:bg-[#0AB89A] transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Add Scan
        </button>
      </div>
    </form>
  )
}

export default function NewScanModal({ open, onClose, onSubmit }: NewScanModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleKey)
      return () => document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === backdropRef.current) onClose()
  }

  if (!open) return null

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div className="w-full max-w-md bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">New Scan</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-500">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form — remounts each time modal opens, auto-resetting state */}
        <NewScanForm key={open ? 'open' : 'closed'} onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  )
}
