# Changelog

## [2.0.0] — 2026-11-02
### Added
- Obsidian & Gold design system (ink surfaces + champagne-gold accent)
- 8-tier responsive matrix from 320px to 1920px+
- Touch-device detection and reduced-motion support
- Comprehensive README with design system reference

### Changed
- Desktop navigation now activates at `lg` (was `xl`)
- Header search bar restricted to `xl` to prevent crowding
- Footer year updated to 2026

### Removed
- `.agents/tasks/plan.md` (redesign complete)
- `.agents/tasks/verification.md` (QA sign-off complete)

### Fixed
- 1024–1279px viewport had no navigation at all
- Cart subtotal selector hardened against Tailwind class churn
- Quantity button null-reference crashes eliminated