'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'sonner'

interface NewScanModalProps {
  open: boolean
  onClose: () => void
}

const SCAN_TYPES = ['Greybox', 'Blackbox', 'Whitebox']

function NewScanForm({ onClose }: Omit<NewScanModalProps, 'open'>) {
  const [name, setName] = useState('')
  const [type, setType] = useState(SCAN_TYPES[0])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    toast.success(`Scan "${name.trim()}" (${type}) created successfully!`)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 font-sans py-5 space-y-5">
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
        <label htmlFor="scan-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Scan Type
        </label>
        <select
          id="scan-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#151B23] text-sm text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8] appearance-none cursor-pointer"
        >
          {SCAN_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
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

export default function NewScanModal({ open, onClose }: NewScanModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null)


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

  if (!open || typeof window === 'undefined') return null

  const modalContent = (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-9999 font-sans flex items-center justify-center bg-black/40 backdrop-blur-sm"
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
        <NewScanForm key={open ? 'open' : 'closed'} onClose={onClose} />
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
