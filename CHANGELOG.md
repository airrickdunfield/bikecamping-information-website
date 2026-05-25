# Changelog

## 2026-05-25

### Added
- Created the initial React and Vite project scaffold.
- Added the first site layout with Home, About, Gear, Gear subpages, and Community content.
- Added monochrome, old-Mac-inspired styling for the site shell, windows, navigation, and content areas.
- Added route-based pages for `/`, `/about`, `/gear`, `/gear/bikes`, `/gear/bags`, `/gear/tents`, and `/community`.
- Added a Gear dropdown menu with links to Bikes, Bags, and Tents.
- Added `.gitignore` rules for generated files.
- Added `PROJECT_MEMORY.md` with the local dev server preference.

### Changed
- Updated the README with setup and local development instructions.
- Updated `AGENTS.md` with React/Vite setup guidance, sandbox command notes, and clearer check-in rules for larger edits.
- Replaced section-anchor navigation with URL-based page navigation.
- Replaced the custom site styling bundle with System.css classes and the System.css CDN stylesheet.
- Added a small layout-only stylesheet so the menu, windows, and dialog share one consistent page width.
- Gave the header menu a white background and thin bottom border.
- Changed the header into a full-width black bar with grid-aligned menu content and a white active state.
- Switched the header menu to a white bar with black text and added a down-caret dropdown indicator.
- Made the Gear dropdown open on hover as well as keyboard focus.
- Updated `AGENTS.md` to keep the local dev server running during active browser work.

### Fixed
- Added `vite.config.js` so React JSX builds and renders correctly in development.
- Moved Vite tooling into `devDependencies`.
- Corrected small documentation wording issues, including “starting point” in `AGENTS.md`.
