# Broadway Shows PWA

A Progressive Web App for browsing, selecting, and mock-purchasing tickets to Broadway shows in New York City. Optimized for mobile viewing on Samsung Galaxy S22 (360x780 viewport).

## Features

- **Login screen** with demo credentials (`demo@example.com` / `password123`)
- **Three-tab dashboard:**
  - **Shows** — Browse 25 current Broadway shows with descriptions, venues, runtimes, and direct links to broadway.com
  - **My List** — View your selected shows and buy tickets (mock)
  - **Bought** — Track your purchased tickets with confirmation status
- **Select All / Deselect All** for bulk show selection
- **Light / Dark / System** theme toggle with localStorage persistence
- **Update button** (coming soon) to scrape live show data from broadway.com
- **PWA support** — installable on mobile with offline capability via service worker

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4
- shadcn/ui-style components (Button, Card, Input, Label, Badge, Tabs)
- Lucide React icons
- vite-plugin-pwa (Workbox)

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 on your browser or phone (same network).

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_UPDATE_COOLDOWN_MINUTES` | `5` | Cooldown (in minutes) between Update button clicks |

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
frontend/src/
  App.jsx                  # Root component with auth state
  main.jsx                 # Entry point
  index.css                # Tailwind directives
  pages/
    Login.jsx              # Login screen
    Dashboard.jsx          # Main dashboard with tabs
  components/
    ShowsTab.jsx           # Browse all shows
    MyListTab.jsx          # Selected shows with Buy button
    BoughtTab.jsx          # Purchased tickets
    ThemeToggle.jsx        # Light/Dark/System toggle
    ui/                    # shadcn-style primitives
      button.jsx, card.jsx, input.jsx, label.jsx, badge.jsx, tabs.jsx
  data/
    shows.js               # Static Broadway show data + helpers
  lib/
    utils.js               # cn() utility (clsx + tailwind-merge)
    useTheme.jsx           # Theme context and provider
    scraper.js             # Broadway.com scraper (WIP)
```
