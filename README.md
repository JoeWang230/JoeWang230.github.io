# Personal Website — Xuezhou Wang

[![License: MIT](https://img.shields.io/badge/code%20license-MIT-blue.svg)](LICENSE)

Source for [joewang230.github.io](https://joewang230.github.io). Plain HTML/CSS/JS, no build step.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## File structure

```
index.html          About + Education & Skills
research.html       Research interests and selected projects
publications.html   Journal publications
talks.html          Conference presentations
news.html           News feed (clickable entries)
contact.html        Contact information

assets/css/style.css   All styles (CSS custom properties on :root)
assets/js/main.js      Active nav-link highlighting by URL
images/photo.png       Profile photo

news/               Full article pages for each news entry
  news-YYYY-MM.html
```

## Analytics

Every page loads a [GoatCounter](https://www.goatcounter.com) tracking snippet (`https://xuezhouw.goatcounter.com/count`) and shows a site-wide visit badge in the footer (`/counter/TOTAL.svg`). Stats are viewable at `https://xuezhouw.goatcounter.com`. The public counter must stay enabled under GoatCounter Settings → "Allow adding visitor counts on your website" for the footer badge to render.

## Adding a news entry

1. Create `news/news-YYYY-MM.html` — copy any existing file in `news/` as a template.
2. Add a `<li class="news-item">` entry at the top of the list in `news.html`:

```html
<li class="news-item">
  <a href="news/news-YYYY-MM.html" class="news-link">
    <span class="news-date">YYYY-MM</span>
    <div class="news-body">One-line summary here.</div>
  </a>
</li>
```

## Adding a publication

Edit the `<ol class="pub-list">` in `publications.html`. Copy an existing `<li class="pub-item">` and update the three spans: `.pub-authors`, `.pub-title`, `.pub-venue`.

## Adding a talk

Edit the `<ul class="talk-list">` in `talks.html`. Copy an existing `<li class="talk-item">` and update the year, type badge, title, and venue.

## License

This repository uses a split license:

- **Code and template** — the HTML structure/markup, `assets/css/style.css`, and `assets/js/main.js` — are [MIT licensed](LICENSE). Fork it, strip out my content, and reuse the template freely.
- **Personal content** — biographical text, the publication/talk/news/research entries, and the images under `images/` (including `photo.png`) — is © Xuezhou Wang, all rights reserved. It is not licensed for reuse; please don't republish it as your own.
