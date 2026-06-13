# TVDYALEK — Arabic IPTV Landing Page

A single-page, right-to-left (Arabic) IPTV marketing/landing site for **TVDYALEK**.
Built from a Claude Design handoff. It is a **static site** — no server runtime, no
database. React is used purely on the client and is **vendored locally** (no CDN
dependency at runtime).

## Structure

```
index.html              Production entry. Loads local React + the compiled app.
build.mjs               Recompiles tvdyalek/*.jsx -> tvdyalek/*.js (Babel).
package.json            Dev tooling (Babel) + `npm run build` / `npm run serve`.
tvdyalek/
  *.jsx                 Component source (edit these).
  *.js                  Compiled output that index.html actually loads.
  data.js               Plans, prices, channels, testimonials, FAQ content.
  image-slot.js         <image-slot> web component (drop-in images).
  styles.css            All styling + animations + themes.
  vendor/               react / react-dom production UMD builds (local).
  faces/ hero/ logos/ posters/   Image assets.
```

## Develop

```bash
npm install      # once
npm run build    # after editing any tvdyalek/*.jsx
npm run serve    # http://localhost:8000
```

`index.html` references the compiled `tvdyalek/*.js` files, **not** the `.jsx`
sources — always run `npm run build` after changing a component.

## Deploy

It's static files. Serve `index.html` + the `tvdyalek/` folder from any web root
(nginx, CloudPanel static site, S3, etc.). No build step required on the server —
the compiled `.js` is committed.

## Editing common content

- **Prices / plans / library counts** — `tvdyalek/data.js`
- **WhatsApp number** — `WA_NUMBER` at the top of `tvdyalek/extras.jsx` (rebuild after)
- **Testimonials / faces** — `tvdyalek/data.js` + images in `tvdyalek/faces/`
- **Theme** — default is `gold` (set on `<html data-theme="...">` in `index.html`;
  `red` and `violet` also exist)
