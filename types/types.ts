export type ScanStatus = 'Completed' | 'Scheduled' | 'Failed'

export interface Vulnerabilities {
  critical: number
  high: number
  medium: number
  low: number
}

export interface ScanRow {
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

