# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static academic personal website for Xuezhou Wang (Research Associate in Advanced Materials, King's College London). No build system, no framework, no dependencies — everything is plain HTML/CSS/JS served directly from the repo root.

## Development

Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There is no build step, no linting, no test suite.

## Architecture

The site is multi-page, one HTML file per section, sharing a common sticky nav bar and footer:

- `index.html` — About + Education & Skills (home page)
- `research.html` — Research interests and selected projects
- `publications.html` — Journal publications
- `talks.html` — Conference presentations
- `news.html` — News feed, linking out to full articles under `news/`
- `contact.html` — Contact information
- `news/news-YYYY-MM.html` — one static article page per news entry

Shared assets:

- `style.css` — all styles. Design tokens (colors, fonts, spacing, max-width) are CSS custom properties on `:root`. Layout uses CSS Grid throughout; responsive breakpoint is at 680 px.
- `main.js` — one IIFE that marks the nav link matching the current page (`window.location.pathname`) as `.active`; `news-*.html` article pages map back to the `news.html` nav link.
- `images/photo.png` — profile photo used in the About section (`<img src="images/photo.png">`). Other loose image assets also live under `images/`.

Every page footer includes a GoatCounter tracking snippet (`data-goatcounter="https://xuezhouw.goatcounter.com/count"`) and a site-wide visit-count badge (`.visit-count` img, `/counter/TOTAL.svg`).

## Content update pattern

- **Publications** (`publications.html`) — `<ol class="pub-list">` with `.pub-item` entries containing `.pub-authors`, `.pub-title`, `.pub-venue` spans.
- **Talks** (`talks.html`) — `<ul class="talk-list">` with `.talk-item` entries using a two-column grid (`.talk-meta` / `.talk-body`).
- **Research projects** (`research.html`) — `.project-list` with `.project-item` entries using a year + body two-column grid.
- **News** (`news.html`) — `<ul class="news-list">` with `.news-item` entries, newest first; entries with a full write-up link to `news/news-YYYY-MM.html` (copy an existing file in `news/` as a template), short announcements can omit the `href`.

To add a new entry, copy an existing `<li>` within the relevant list and update the text. Every page's footer has a `Last updated` date that should be bumped when its content changes.
