# Jim William — profile site

React 19 + Vite 8 + Tailwind CSS v4, with the React Compiler enabled.

```sh
npm install
npm run dev      # local dev server
npm test         # Vitest
npm run build    # production build in dist/
```

- All content lives in `src/data/profile.ts`. The phone number is intentionally not stored.
- To show a portrait, put the image in `public/` (e.g. `public/profile.jpg`) and set `photo: '/profile.jpg'` in `profile.ts`.
- Project screenshots live in `public/projects/` and are listed per project in `profile.ts` (`shots`). They are shown as CSS backgrounds and open in a popup gallery. HI Support shots were taken from a local demo with fictional data — never from the production system.
- Newsletter photos are blurred and the Photo Gallery pen is shown with stand-in images, to keep students out of a public page.
- The email address is stored reversed and base64-encoded in `src/lib/contact.ts` and decoded only on click (obfuscation against scrapers, not encryption). To change it: `node -e "console.log(Buffer.from([...'new@address'].reverse().join('')).toString('base64'))"`.
- Light/dark theme: saved choice, else the system setting (`index.html` sets it before first paint). Above 1920 px wide the whole layout scales up, up to 4K.
- `src/components/ContentGuard.tsx` blocks selection, copying, right-click, image dragging, and save/print shortcuts; printing shows a "request the CV" notice instead. This deters casual copying only — screenshots and browser devtools still work.

## GitHub profile README

`README.md` is the GitHub profile page (this repository is named after the account). Its animated graphics are
`.github/readme/hero.svg` (the woven banner) and `.github/readme/journey.svg` (the career thread). They are plain SVG
with CSS animations, so GitHub plays them inline; both stop animating for visitors who prefer reduced motion.

To change them, edit `.github/readme/generate.mjs` and run `node .github/readme/generate.mjs`.
