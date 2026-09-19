# EventSphere — Changelog

All notable changes to this project will be documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Fixed
- Upgraded Gemini model from `gemini-2.5-flash` (deprecated/404) to `gemini-3.6-flash` across App.jsx, src/aiService.js, and src/constants.js

### Added
- `src/components/` — Full reusable component library (16 components)
- `src/aiService.js` — Extracted Gemini AI service with streaming & prompt templates
- `src/constants.js` — Design tokens, event types, vendor categories, cities
- `src/utils.js` — Currency, date, string, storage, validation, budget utilities
- `src/hooks.js` — Custom React hooks (useLocalStorage, useDebounce, useMediaQuery, etc.)
- `src/vendorData.js` — Vendor catalogue with query helpers
- `.env.example` — Environment variable template
- `CONTRIBUTING.md` — Contribution guide with commit conventions
- `LICENSE` — MIT License
- Enhanced `index.html` with SEO, OG tags, fonts, and favicon

### Changed
- `README.md` — Comprehensive rewrite with setup, deploy, and feature docs
- `index.css` — Full CSS reset, scrollbar styles, animations, print styles
- `vite.config.js` — Path aliases, chunk splitting, build optimizations
- `eslint.config.js` — Strengthened rules for code quality

---

## [1.0.0] — 2026-09-19

### Added
- Initial MVP release for iQOO Hackathon 2026
- AI-powered event planner using Google Gemini 2.5 Flash (streaming SSE)
- Vendor marketplace: Catering, Decoration, Photography, Makeup, Costume, Return Gifts
- Budget tracker with visual progress
- Event timeline management
- City-wise vendor filtering across Tamil Nadu
- Dark-theme UI with gold accent design system
