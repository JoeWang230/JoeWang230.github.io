# Personal Website — Xuezhou Wang

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

style.css           All styles (CSS custom properties on :root)
main.js             Active nav-link highlighting by URL
photo.png           Profile photo

news/               Full article pages for each news entry
  news-YYYY-MM.html
```

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
