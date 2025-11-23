# Frontend
This Vite + React + TypeScript frontend implements a mobile-style workforce scheduling experience with fully local demo data. Use it to preview navigation, availability marking, schedules, and profile flows that mirror the accompanying Figma design.
 
## Quick start
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Build for production: `npm run build`
 
## Project structure
- `src/main.tsx` boots the React app and wraps the routed shell.
- `src/App.tsx` hosts the tab-like navigation state and renders the four primary screens.
- `src/pages/` contains feature pages (`Home`, `Availability`, `Schedule`, `Profile`, and `ProfileEdit`).
- `src/components/` holds shared UI such as the bottom navigation bar and modals.
- `src/imports/` centralizes reusable SVG path definitions for icons.
- `src/index.css` and page-level CSS files provide the layout and color system.

## UI color system

The interface relies on a compact grayscale palette plus a single green accent:

- **Backgrounds:** `#f5f5f5` for the app shell and headers; `#ffffff` for cards, grids, and overlays.【F:src/App.css†L1-L14】【F:src/pages/Home.css†L1-L27】【F:src/pages/Availability.css†L1-L20】
- **Primary text and icons:** `#000000` for titles, labels, and active navigation states.【F:src/components/BottomNav.css†L17-L28】【F:src/pages/Home.css†L9-L19】
- **Muted text and dividers:** `#8e8e93`, `#999999`, `#c7c7cc`, and `#d1d1d6` for secondary labels, borders, and neutral slots.【F:src/components/BottomNav.css†L17-L35】【F:src/pages/Availability.css†L145-L219】
- **Accent:** `#34c759` highlights earnings data; `#ff3b30` draws attention to destructive quick actions.【F:src/pages/Home.css†L51-L71】【F:src/pages/Availability.css†L292-L307】
- **Inverted/active states:** dark fill `#2d2d2d` with white text for evening shift blocks and action buttons.【F:src/pages/Availability.css†L215-L279】

## Feature overview

- **Home:** shows the upcoming shift block, month stats, earnings summary, and a calendar-style availability snapshot driven by mock data.
- **Availability:** lets users tap morning/evening slots to mark availability, inconvenient times, or assigned shifts; quick actions surface for shift blocks, and a context menu supplies detailed status choices.
- **Schedule:** renders a weekly staff planner with filter toggles per position and horizontal time slots for day/evening coverage.
- **Profile:** displays the user card, badges, favorite outlets, and navigation into editing mode; `ProfileEdit` exposes form fields for personal data and preferences.
- **Navigation:** a persistent bottom bar switches among tabs and hides on the profile edit route.

## Development notes

- All data is mocked in component state; replace the placeholder arrays/objects with API calls when wiring to a backend.
- Styles are written in plain CSS modules per page/component, keeping the global file (`src/index.css`) minimal for resets and shared tokens.
- SVG icons are defined as path strings under `src/imports/` and consumed through inline `<svg>` elements for consistent sizing and color inheritance.
 