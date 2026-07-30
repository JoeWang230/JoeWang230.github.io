# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page static academic personal website for Xuezhou Wang (PhD candidate, computational materials science). No build system, no framework, no dependencies — everything is plain HTML/CSS/JS served directly from the repo root.

## Development

Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There is no build step, no linting, no test suite.

## Architecture

All content lives in a single `index.html` with five visible sections rendered in order: **About → Research → Publications → Talks → Education/Skills → Contact**. Navigation is a sticky bar that links to each section by `id`.

- `style.css` — all styles. Design tokens (colors, fonts, spacing, max-width) are CSS custom properties on `:root`. Layout uses CSS Grid throughout; responsive breakpoint is at 680 px.
- `main.js` — one IIFE that highlights the active nav link on scroll using `window.scrollY` against each section's `offsetTop`.
- `photo.png` — profile photo used in the About section (`<img src="photo.png">`).

## Content update pattern

Content is edited directly in `index.html`. Each major section follows a consistent pattern:

- **Publications** — `<ol class="pub-list">` with `.pub-item` entries containing `.pub-authors`, `.pub-title`, `.pub-venue` spans.
- **Talks** — `<ul class="talk-list">` with `.talk-item` entries using a two-column grid (`.talk-meta` / `.talk-body`).
- **Research projects** — `.project-list` with `.project-item` entries using a year + body two-column grid.

To add a new entry, copy an existing `<li>` within the relevant list and update the text.
