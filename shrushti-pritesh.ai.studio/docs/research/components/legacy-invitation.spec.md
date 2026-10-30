# LegacyInvitation specification

## Overview

- **Target file:** `src/App.jsx`
- **Reference screenshots:** `docs/design-references/shrushti-pritesh-desktop.png`,
  `docs/design-references/shrushti-pritesh-mobile.png`
- **Interaction model:** click-, pointer-, and time-driven.

## Implementation

The target site and supplied static export use the identical compiled React
module: `assets/index-CcgxHIwM.js`, with stylesheet
`assets/index-fPVWWpik.css`. The React wrapper inserts that module unchanged
into the original `#root` mount point. This preserves all source component
structure, pixels, animations, and interactions without a reverse-engineering
rewrite.

## Assets

All public assets requested by the bundle are retained locally under `assets/`:
five event backgrounds, nine couple/hero images, envelope, Ganesh/monogram,
butterfly GIF, and MP3 music. Production copies them to `dist/assets/`.

## Responsive behavior

The preserved bundle supplies the original mobile, tablet, and desktop styles.
