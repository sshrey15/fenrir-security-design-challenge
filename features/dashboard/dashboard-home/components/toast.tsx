'use client'

import { useEffect } from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  visible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ message, type = 'success', visible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [visible, onClose, duration])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-100 animate-slide-up">
      <div
        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border text-sm font-medium ${
          type === 'success'
            ? 'bg-white dark:bg-[#1A1A1A] border-[#0CC8A8]/30 text-gray-900 dark:text-white'
            : 'bg-white dark:bg-[#1A1A1A] border-red-300 text-gray-900 dark:text-white'
        }`}
      >
        {/* Icon */}
        {type === 'success' ? (
          <div className="w-8 h-8 rounded-full bg-[#0CC8A8]/15 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0CC8A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
        )}

        <span>{message}</span>

        {/* Close */}
        <button onClick={onClose} className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
