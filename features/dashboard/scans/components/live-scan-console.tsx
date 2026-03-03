'use client'

import { useState } from 'react'
import type { ActivityLogEntry, Finding, FindingSeverity } from '../../../../types/types'

interface LiveScanConsoleProps {
  entries: ActivityLogEntry[]
  findings: Finding[]
}

type ConsoleTab = 'activity' | 'verification'

const SEVERITY_STYLES: Record<FindingSeverity, { bg: string; text: string }> = {
  Critical: { bg: 'bg-[#EF4444]', text: 'text-white' },
  High: { bg: 'bg-[#F97316]', text: 'text-white' },
  Medium: { bg: 'bg-[#EABB08]', text: 'text-white' },
  Low: { bg: 'bg-[#22C55E]', text: 'text-white' },
}

function highlightText(text: string, highlights?: ActivityLogEntry['highlights']) {
  if (!highlights || highlights.length === 0) return text

  const COLOR_MAP: Record<string, string> = {
    teal: 'text-[#0CC8A8] bg-[#0CC8A8]/10 px-1 rounded',
    red: 'text-red-500 font-bold italic',
    yellow: 'text-yellow-400 bg-yellow-400/10 px-1 rounded italic',
    orange: 'text-orange-400 bg-orange-400/15 px-1.5 py-0.5 rounded font-mono',
    green: 'text-green-500',
    purple: 'text-purple-400',
  }

  const parts: (string | { text: string; className: string })[] = []
  let remaining = text

  for (const hl of highlights) {
    const idx = remaining.indexOf(hl.text)
    if (idx === -1) continue

    const before = remaining.slice(0, idx)
    if (before) parts.push(before)
    parts.push({ text: hl.text, className: COLOR_MAP[hl.color] || '' })
    remaining = remaining.slice(idx + hl.text.length)
  }
  if (remaining) parts.push(remaining)

  return parts
}

export default function LiveScanConsole({ entries, findings }: LiveScanConsoleProps) {
  const [tab, setTab] = useState<ConsoleTab>('activity')
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-white border dark:bg-[#151B23] rounded-xl overflow-hidden  flex flex-col min-h-120">
     
      <div className="flex items-center bg-[#F8FAFC] border dark:bg-[#151B23] justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center   gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0CC8A8] animate-pulse" />
          <span className="font-semibold text-sm text-gray-900 dark:text-white">
            Live Scan Console
          </span>
          <span className="text-xs dark:bg-gray-100 dark:text-gray-900  text-gray-00 bg-gray-100  px-3 py-1 rounded-full flex items-center gap-1.5">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Running...
          </span>
        </div>

        <div className="flex items-center  gap-2">
      
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            aria-label={collapsed ? 'Expand console' : 'Collapse console'}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${collapsed ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition cursor-pointer"
            aria-label="Close console"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

  
      {!collapsed && (
        <div className="flex  flex-1 min-h-0 ">
    
          <div className="flex-1  flex flex-col min-w-0 border-r border-gray-200 dark:border-gray-800">
            
            <div className="flex dark:bg-[#0A0F13] items-center gap-0 px-5 border-b border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setTab('activity')}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition cursor-pointer ${
                  tab === 'activity'
                    ? 'border-[#00A19F] text-[#00A19F]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                Activity Log
              </button>
              <button
                onClick={() => setTab('verification')}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition cursor-pointer ${
                  tab === 'verification'
                    ? 'border-[#00A19F] text-[#00A19F]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                Verification Loops
              </button>
            </div>

            
            <div className="flex-1  dark:bg-[#0A0F13] overflow-y-auto px-5 py-4 space-y-5 text-sm leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {tab === 'activity' ? (
                entries.map((entry, i) => {
                  const parts = highlightText(entry.text, entry.highlights)
                  return (
                    <div key={i} className="flex gap-3">
                      <span className="text-gray-400 shrink-0 select-none">
                        [{entry.timestamp}]
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                        {Array.isArray(parts)
                          ? parts.map((p, j) =>
                              typeof p === 'string' ? (
                                <span key={j}>{p}</span>
                              ) : (
                                <span key={j} className={p.className}>
                                  {p.text}
                                </span>
                              )
                            )
                          : parts}
                      </p>
                    </div>
                  )
                })
              ) : (
                <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
                  No verification loops recorded yet.
                </div>
              )}
            </div>
          </div>

          
          <div className="w-95 shrink-0  flex flex-col min-h-0">
            <div className="px-5 py-2.5 dark:bg-[#0A0F13] border-b border-gray-200 dark:border-gray-800">
              <span className="font-semibold text-sm text-gray-900 dark:text-white">
                Finding Log
              </span>
            </div>

            <div className="flex-1   dark:bg-[#0A0F13] overflow-y-auto p-4 space-y-3">
              {findings.map((finding, i) => {
                const sev = SEVERITY_STYLES[finding.severity]
                return (
                  <div
                    key={i}
                    className="rounded-xl   font-mono dark:bg-[#151B23] border border-gray-200 dark:border-gray-800 p-4 space-y-2 hover:shadow-sm transition"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`${sev.bg} ${sev.text} text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider`}
                      >
                        {finding.severity}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {finding.timestamp}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                      {finding.title}
                    </h4>
                    <p className="text-xs text-[#00A19F] font-medium">
                      {finding.endpoint}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {finding.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
