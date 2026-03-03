import type { ScanRow, ScanProgress, ScanMeta } from '../../../types/types'
import {
  SCAN_PROGRESS,
  SCAN_META,
  ACTIVITY_LOG,
  FINDINGS,
  SCAN_STATUS_COUNTS,
} from '../../../config/scan-detail-data'
import ScanHeader from './components/scan-header'
import LiveScanConsole from './components/live-scan-console'
import ScanStatusBar from './components/scan-status-bar'

interface ScanPageProps {
  scanRow?: ScanRow
}

function deriveProgressFromRow(row: ScanRow): ScanProgress {
  if (row.status === 'Completed') {
    return { percent: 100, activePhase: 'Reporting' }
  }
  return SCAN_PROGRESS
}

function deriveMetaFromRow(row: ScanRow): ScanMeta {
  return {
    scanType: row.type,
    targets: row.name,
    startedAt: row.lastScan,
    credentials: SCAN_META.credentials,
    files: SCAN_META.files,
    checklists: SCAN_META.checklists,
  }
}

export default function ScanPage({ scanRow }: ScanPageProps) {
  const progress = scanRow ? deriveProgressFromRow(scanRow) : SCAN_PROGRESS
  const meta = scanRow ? deriveMetaFromRow(scanRow) : SCAN_META
  const statusCounts = scanRow
    ? {
        ...SCAN_STATUS_COUNTS,
        critical: scanRow.vulnerabilities.critical,
        high: scanRow.vulnerabilities.high,
        medium: scanRow.vulnerabilities.medium,
        low: scanRow.vulnerabilities.low,
      }
    : SCAN_STATUS_COUNTS

  return (
    <div className="space-y-4 font-sans ">
      {/* Scan header: progress ring + pipeline + metadata */}
      <ScanHeader progress={progress} meta={meta} />

      {/* Live console + Finding log (unified panel) */}
      <LiveScanConsole entries={ACTIVITY_LOG} findings={FINDINGS} />

      {/* Bottom status bar */}
      <ScanStatusBar counts={statusCounts} />
    </div>
  )
}