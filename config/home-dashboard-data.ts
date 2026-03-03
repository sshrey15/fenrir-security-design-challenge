
import { ProjectInfo,SeverityCard,ScanRow  } from "../types/types"

export const PROJECT_INFO: ProjectInfo = {
  org: 'Project X',
  owner: 'Nammagiri',
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 100,
  lastUpdated: '10 mins ago',
}

export const SEVERITY_CARDS: SeverityCard[] = [
  {
    label: 'Critical Severity',
    value: 86,
    change: '+2% increase from yesterday',
    up: true,
    color: '#EF4444',
    iconType: 'critical',
  },
  {
    label: 'High Severity',
    value: 16,
    change: '+0.9% increase from yesterday',
    up: true,
    color: '#F97316',
    iconType: 'high',
  },
  {
    label: 'Medium Severity',
    value: 26,
    change: '-0.9% decrease from yesterday',
    up: false,
    color: '#EABB08',
    iconType: 'medium',
  },
  {
    label: 'Low Severity',
    value: 16,
    change: '+0.9% increase from yesterday',
    up: true,
    color: '#0CC8A8',
    iconType: 'low',
  },
]


export const SCAN_DATA: ScanRow[] = [
  { id: 'scan-1', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-2', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-3', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-4', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-5', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-6', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-7', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-8', name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: '4d ago' },
  { id: 'scan-9', name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: '4d ago' },
  { id: 'scan-10', name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulnerabilities: { critical: 2, high: 4, medium: 6, low: 1 }, lastScan: '3d ago' },
  { id: 'scan-11', name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulnerabilities: { critical: 2, high: 4, medium: 6, low: 1 }, lastScan: '3d ago' },
  { id: 'scan-12', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-13', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-14', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-15', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-16', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-17', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-18', name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
  { id: 'scan-19', name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: '4d ago' },
  { id: 'scan-20', name: 'Web App Servers', type: 'Greybox', status: 'Scheduled', progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: '4d ago' },
  { id: 'scan-21', name: 'IoT Devices', type: 'Blackbox', status: 'Failed', progress: 10, vulnerabilities: { critical: 2, high: 4, medium: 6, low: 1 }, lastScan: '3d ago' },
  { id: 'scan-22', name: 'Temp Data', type: 'Blackbox', status: 'Failed', progress: 10, vulnerabilities: { critical: 2, high: 4, medium: 6, low: 1 }, lastScan: '3d ago' },
]

