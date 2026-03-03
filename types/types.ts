export type ScanStatus = 'Completed' | 'Scheduled' | 'Failed'

export interface Vulnerabilities {
  critical: number
  high: number
  medium: number
  low: number
}

export interface ScanRow {
  id: string
  name: string
  type: string
  status: ScanStatus
  progress: number
  vulnerabilities: Vulnerabilities
  lastScan: string
}

export interface SeverityCard {
  label: string
  value: number
  change: string
  up: boolean
  color: string
  iconType: 'critical' | 'high' | 'medium' | 'low'
}

export interface ProjectInfo {
  org: string
  owner: string
  totalScans: number
  scheduled: number
  rescans: number
  failedScans: number
  lastUpdated: string
}

// ── Scan Detail Page Types ──

export type ScanPhase = 'Spidering' | 'Mapping' | 'Testing' | 'Validating' | 'Reporting'

export interface ScanMeta {
  scanType: string
  targets: string
  startedAt: string
  credentials: string
  files: string
  checklists: string
}

export interface ScanProgress {
  percent: number
  activePhase: ScanPhase
}

export interface ActivityLogEntry {
  timestamp: string
  text: string
  highlights?: { text: string; color: 'teal' | 'red' | 'yellow' | 'orange' | 'green' | 'purple' }[]
}

export type FindingSeverity = 'Critical' | 'High' | 'Medium' | 'Low'

export interface Finding {
  severity: FindingSeverity
  title: string
  endpoint: string
  description: string
  timestamp: string
}

export interface ScanStatusCounts {
  subAgents: number
  parallelExecutions: number
  operations: number
  critical: number
  high: number
  medium: number
  low: number
}

