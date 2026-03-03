import type {
  ScanMeta,
  ScanProgress,
  ActivityLogEntry,
  Finding,
  ScanStatusCounts,
} from '../types/types'

export const SCAN_PROGRESS: ScanProgress = {
  percent: 0,
  activePhase: 'Spidering',
}

export const SCAN_META: ScanMeta = {
  scanType: 'Grey Box',
  targets: 'google.com',
  startedAt: 'Nov 22, 09:00AM',
  credentials: '2 Active',
  files: 'Control.pdf',
  checklists: '40/350',
}

export const ACTIVITY_LOG: ActivityLogEntry[] = [
  {
    timestamp: '09:00:00',
    text: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
    highlights: [{ text: 'helpdesk.democorp.com', color: 'teal' }],
  },
  {
    timestamp: '09:01:00',
    text: 'Good! target is online. Now let me perform port scanning to identify running services.',
  },
  {
    timestamp: '09:02:00',
    text: 'Excellent reconnaissance results:\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.',
  },
  {
    timestamp: '09:03:00',
    text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.',
    highlights: [
      { text: 'TODO: Delete the testing account (test:test)', color: 'yellow' },
      { text: '/password/test', color: 'teal' },
    ],
  },
  {
    timestamp: '09:04:00',
    text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.",
  },
  {
    timestamp: '09:05:00',
    text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.",
    highlights: [{ text: 'test:test', color: 'teal' }],
  },
  {
    timestamp: '09:06:00',
    text: 'Great! I can access the dashboard using the \'X-UserId: 10032\' header. The dashboard shows "Welcome, John Doe". This suggests an **IDOR vulnerability** - I can access any user\'s dashboard by just changing the X-UserId header. Let me explore more of the application...',
    highlights: [
      { text: 'X-UserId: 10032', color: 'orange' },
      { text: 'IDOR vulnerability', color: 'red' },
    ],
  },
]

export const FINDINGS: Finding[] = [
  {
    severity: 'Critical',
    title: 'SQL Injection in Authentication Endpoint',
    endpoint: '/api/users/profile',
    description:
      'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
    timestamp: '10:45:23',
  },
  {
    severity: 'High',
    title: 'Unauthorized Access to User Metadata',
    endpoint: '/api/auth/login',
    description:
      'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    timestamp: '10:45:23',
  },
  {
    severity: 'Medium',
    title: 'Broken Authentication Rate Limiting',
    endpoint: '/api/search',
    description:
      'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    timestamp: '10:45:23',
  },
]

export const SCAN_STATUS_COUNTS: ScanStatusCounts = {
  subAgents: 0,
  parallelExecutions: 2,
  operations: 1,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
}
