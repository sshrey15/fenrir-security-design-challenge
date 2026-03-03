# Fenrir Security Dashboard

A modern cybersecurity scan management dashboard built as part of the Fenrir Security Design Challenge. The application provides an intuitive interface for managing, monitoring, and analyzing security vulnerability scans across projects.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

---

##  Features

- **Authentication Page** — Polished login / sign-up card with a branded landing view
- **Auth Guard** — Client-side route protection using `localStorage` + `useSyncExternalStore`
- **Dashboard Home** — Severity summary cards, project info bar, and a paginated & filterable scan table
- **Scan Detail View** — Live scan console with activity log, real-time findings, and scan phase progress
- **New Scan Modal** — Portal-based modal to create Greybox / Blackbox / Whitebox scans
- **CSV Export** — Download scan data and findings as CSV reports
- **Dark / Light Theme** — System-aware theme toggle powered by `next-themes`
- **Responsive Layout** — Collapsible sidebar, mobile-friendly tables and modals
- **Toast Notifications** — User feedback via Sonner toast library
- **Docker Support** — One-command dev environment with Docker Compose

---

##  Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.1](https://nextjs.org) (App Router, React Server Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) with `tw-animate-css` |
| **Component Library** | [shadcn/ui](https://ui.shadcn.com) (New York style) + [Radix UI](https://www.radix-ui.com) primitives |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons) · [Lucide React](https://lucide.dev) |
| **State / Data** | [TanStack React Query 5](https://tanstack.com/query) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Notifications** | [Sonner](https://sonner.emilkowal.dev) |
| **Font** | Gilroy (self-hosted via `next/font/local`) |
| **Package Manager** | [pnpm](https://pnpm.io) (workspace enabled) |
| **Containerisation** | Docker + Docker Compose |

---

##  Project Structure

```
├── app/                     # Next.js App Router pages & layouts
│   ├── layout.tsx           # Root layout (theme, query, toast providers)
│   ├── page.tsx             # Auth landing page (/)
│   ├── dashboard/           # Dashboard route group
│   │   ├── layout.tsx       # Dashboard shell (sidebar + auth guard)
│   │   ├── page.tsx         # /dashboard  → home
│   │   └── [slug]/page.tsx  # /dashboard/:slug → scan detail
│   ├── providers/           # React context providers
│   └── theme/               # Theme playground page
├── features/                # Feature-based modules
│   ├── authentication/      # Auth page, login card, auth guard
│   ├── dashboard/           # Dashboard layout, sidebar, navbar
│   │   ├── dashboard-home/  # Home page + components (scan table, modals, etc.)
│   │   └── scans/           # Scan detail page + live console, status bar
├── config/                  # Static mock data (scans, severity cards, etc.)
├── lib/                     # Utilities (CSV export, cn helper)
├── types/                   # Shared TypeScript interfaces
├── public/                  # Static assets (images, fonts)
├── docker-compose-dev.yml   # Docker Compose for development
├── Dockerfile.dev           # Development Dockerfile (Node 22 Alpine)
└── components.json          # shadcn/ui configuration
```

---

##  Getting Started

### Prerequisites

| Tool | Version |
|---|---|
| **Node.js** | 22+ (LTS recommended) |
| **pnpm** | 9+ (`npm install -g pnpm`) |
| **Docker** *(optional)* | 24+ |

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/sshrey15/fenrir-security-design-challenge.git
cd fenrir-security-design-challenge

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Docker Development

```bash
# Build and start the container
docker compose -f docker-compose-dev.yml up --build
```

The app will be available at **[http://localhost:3000](http://localhost:3000)** with hot-reload enabled via volume mounts.

---

##  Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Next.js development server |
| `pnpm build` | Create an optimised production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint across the codebase |

---

##  Authentication Flow

Authentication is handled client-side using `localStorage`:

1. User signs up / logs in on the landing page (`/`)
2. A flag (`aps_logged_in`) is written to `localStorage`
3. The `AuthGuard` component wraps all `/dashboard/*` routes and redirects unauthenticated users back to `/`
4. Logging out clears the flag and redirects to the landing page

---

## Known Limitations

| Area | Limitation |
|---|---|
| **No backend / API** | All data is static mock data defined in `config/`. No real scan engine, database, or server-side persistence. |
| **Client-side auth only** | Authentication uses `localStorage` — there is no server-side session, JWT, or OAuth flow. Not suitable for production without a real auth layer. |
| **No real-time scanning** | The "Live Scan Console" renders pre-defined activity log entries; it does not connect to a WebSocket or streaming endpoint. |
| **Static vulnerability data** | Severity counts and findings are hard-coded; filtering and search work on the mock dataset only. |
| **No unit / E2E tests** | The project does not yet include a test suite (e.g., Jest, Vitest, Playwright). |
| **Limited routing** | Sidebar links for Projects, Schedule, Notifications, and Settings render placeholder pages. |
| **CSV export only** | Report export is limited to CSV format; no PDF or JSON export is currently supported. |
| **No i18n** | The UI is English-only with no internationalisation setup. |

---

##  License

This project was built for the **Fenrir Security Design Challenge**.
