# Job Application Tracker

A React app for tracking job applications. It shows every application as a card, newest first, with a color-coded status badge and a summary of how many applications are in each stage.

## Features

- **Application list** sorted by date applied, newest first
- **Status badges** for Applied, Interview, Offer, and Rejected
- **Summary strip** showing the total count and the count for each status
- **Links** to each original job posting
- **Clean cards**: notes and source only appear when they have a value

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS with custom properties (dark theme)

## Getting Started

**Requirements:** [Node.js](https://nodejs.org/) 18 or newer

```bash
git clone https://github.com/DennysSaenz123/JobTracker.git
cd JobTracker
npm install
npm run dev
```

Then open the local URL Vite prints, usually http://localhost:5173.

### Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the development server       |
| `npm run build`   | Build for production into `dist/`  |
| `npm run preview` | Preview the production build       |

## Project Structure

```
src/
├── components/
│   ├── ApplicationList.jsx   # Sorts applications and renders the list
│   ├── ApplicationCard.jsx   # Renders a single application
│   ├── StatusBadge.jsx       # Renders the colored status pill
│   └── SummaryStrip.jsx      # Total and per-status counts
├── App.jsx                   # Imports the data and passes it down
├── applications.js           # Application data
├── statuses.js               # Status labels
├── index.css                 # Styles
└── main.jsx                  # Entry point
```

## Design Decisions

- **Data flows through props.** Only `App` imports the application data. Every other component receives what it displays as props, so swapping the data source later doesn't touch the components.
- **Whole objects over many props.** `ApplicationCard` receives a single `application` object instead of one prop per field.
- **Stable keys.** List items use each application's `id` as the React `key`, not the array index, which would change whenever the list is sorted or filtered.
- **Non-mutating sort.** The list is copied (`[...applications]`) before sorting so the shared data is never rearranged in place. Dates are `YYYY-MM-DD` strings, so `localeCompare` sorts them correctly without parsing.
- **Derived counts.** Summary numbers are calculated from the list on every render rather than stored, so they can never fall out of sync with the data.
- **Data-driven badges.** The badge class is built from the status (`badge-${status}`) instead of a chain of `if` statements.

## Adding a New Status

1. Add a label to `STATUS_LABELS` in `src/statuses.js`.
2. Add a matching `.badge-<status>` rule in `src/index.css`.

That's all. The badge and the summary strip pick it up automatically.

## Roadmap

- Load applications with `fetch` instead of a local module
- Filter by status and search by company or role
- Add, edit, and delete applications