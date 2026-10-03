# KP Cafe Website — Fixed

## Important: don't use VS Code "Go Live" for this React/Vite project

This project uses **React + TypeScript + Vite + Tailwind CSS**.  
The VS Code Live Server **Go Live** button does not compile `/src/main.tsx`, so opening
`index.html` directly can result in a blank page.

Use the terminal in this folder instead:

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Netlify

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

Do **not** set the publish directory to `.next` — this is a Vite project, not Next.js.

## Mobile

The responsive fixes in this version include:
- safer horizontal overflow handling
- mobile-safe hero/content sizing
- scroll-reveal fallback for older browsers
- scrollable mobile navigation drawer
- deployment-safe Vite base path
