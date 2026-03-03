import type { ScanRow, Finding } from '../types/types'

function downloadCSV(csvContent: string, filename: string) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function escapeCSV(value: string | number): string {
  const str = String(value)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export function exportScanReport(scans: ScanRow[]) {
  const headers = [
    'ID',
    'Scan Name',
    'Type',
    'Status',
    'Progress (%)',
    'Critical',
    'High',
    'Medium',
    'Low',
    'Last Scan',
  ]

  const rows = scans.map((s) => [
    escapeCSV(s.id),
    escapeCSV(s.name),
    escapeCSV(s.type),
    escapeCSV(s.status),
    escapeCSV(s.progress),
    escapeCSV(s.vulnerabilities.critical),
    escapeCSV(s.vulnerabilities.high),
    escapeCSV(s.vulnerabilities.medium),
    escapeCSV(s.vulnerabilities.low),
    escapeCSV(s.lastScan),
  ])

  const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
  const date = new Date().toISOString().slice(0, 10)
  downloadCSV(csv, `scan-report-${date}.csv`)
}

export function exportFindingsReport(findings: Finding[], scanName?: string) {
  const headers = ['Severity', 'Title', 'Endpoint', 'Description', 'Timestamp']

  const rows = findings.map((f) => [
    escapeCSV(f.severity),
    escapeCSV(f.title),
    escapeCSV(f.endpoint),
    escapeCSV(f.description),
    escapeCSV(f.timestamp),
  ])

  const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
  const date = new Date().toISOString().slice(0, 10)
  const suffix = scanName ? `-${scanName.replace(/\s+/g, '-').toLowerCase()}` : ''
  downloadCSV(csv, `findings-report${suffix}-${date}.csv`)
}
