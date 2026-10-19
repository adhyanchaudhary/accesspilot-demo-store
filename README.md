# AccessPilot Demo Store

A minimal, frontend-only bookstore website built with **React + Vite + plain CSS**.

> **This project is an intentionally inaccessible test fixture.** It is designed for an
> automated accessibility remediation tool to detect and fix. It ships with six deliberate
> accessibility defects (listed below). Do **not** fix these defects if you are using the
> repo as a fixture. They are kept local to `src/App.jsx` and `src/App.css` so they are easy
> to find and remediate.

## Tech stack

- React 18
- Vite 5
- Plain CSS (no UI component libraries)
- No TypeScript, no backend, no database, no authentication, no external APIs, no
  accessibility auto-fix libraries

All content is static and fictional. The site does **not** collect payments or store real
user data — the newsletter form is a demo that only toggles on-screen state.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deploying to Netlify

This is a standard static Vite build.

- **Build command:** `npm run build`
- **Publish directory:** `dist`

A `netlify.toml` is included with these settings, so you can also just drag-and-drop or
connect the repository to Netlify.

## The six intentional accessibility defects

| # | Defect | Location |
|---|--------|----------|
| 1 | **Images with no `alt` attribute** — all three product/book cover images use `<img src={book.cover} />` with no `alt`. | `src/App.jsx` (`.book-cover img`) |
| 2 | **Email input with no label** — the newsletter email `<input>` has no `<label>`, no `aria-label`, and relies only on a `placeholder`. | `src/App.jsx` (`.newsletter-input`) |
| 3 | **Low-contrast text** — product descriptions use gray `#bdbdbd` on white `#ffffff` (roughly 1.9:1 contrast). | `src/App.css` (`.book-desc`) |
| 4 | **Clickable `div` as a button** — the newsletter submit control is a `<div onClick=...>` with no `role`, no `tabIndex`, and no keyboard (Enter/Space) handling. | `src/App.jsx` (`.newsletter-submit`) |
| 5 | **Incorrect heading order** — the hero uses an `<h3>` (`hero-title`) before any `<h1>` exists on the page, breaking heading hierarchy. | `src/App.jsx` (`.hero-title`) |
| 6 | **Icon-only button with no accessible name** — the header shopping cart `<button>` contains only an SVG icon and has no text or `aria-label`. | `src/App.jsx` (`.icon-button` / `CartIcon`) |

Each defect is intentionally isolated and can be fixed in place without touching unrelated
code.

## Project structure

```
access-demo/
├─ index.html
├─ netlify.toml
├─ package.json
├─ vite.config.js
├─ public/
│  └─ covers/            # local SVG book covers (no external image APIs)
│     ├─ lantern-keeper.svg
│     ├─ small-gardens.svg
│     └─ signal-static.svg
└─ src/
   ├─ App.jsx            # page markup (contains defects 1, 2, 4, 5, 6)
   ├─ App.css            # styles (contains defect 3)
   └─ main.jsx
```
