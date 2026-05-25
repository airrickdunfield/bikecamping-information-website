# Changelog

## 2026-05-25

### Added
- Created the initial React and Vite project scaffold.
- Added the first site layout with Home, About, Gear, Gear subpages, and Community content.
- Added monochrome, old-Mac-inspired styling for the site shell, windows, navigation, and content areas.
- Added route-based pages for `/`, `/about`, `/gear`, `/gear/bikes`, `/gear/bags`, `/gear/tents`, and `/community`.
- Added a Gear dropdown menu with links to Bikes, Bags, and Tents.
- Added `.gitignore` rules for generated files.

### Changed
- Updated the README with setup and local development instructions.
- Updated `AGENTS.md` with React/Vite setup guidance, sandbox command notes, and clearer check-in rules for larger edits.
- Replaced section-anchor navigation with URL-based page navigation.

### Fixed
- Added `vite.config.js` so React JSX builds and renders correctly in development.
- Moved Vite tooling into `devDependencies`.
- Corrected small documentation wording issues, including “starting point” in `AGENTS.md`.
