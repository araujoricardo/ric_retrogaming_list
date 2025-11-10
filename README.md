# ric_retrogaming_list

Retro games gallery prototype (React + Vite + Tailwind) configured for GitHub Pages.

## How to run locally

1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173

## Deploy
- Update `vite.config.js` base to match your repo (`/ric_retrogaming_list/`) — already set.
- `npm run build`
- `npm run deploy` (requires GH token or proper git remote)

## Notes
- Add platform folders under `public/platforms/` each with `gamelist.xml`, `images/` and `videos/`.
- The project uses local video paths for hover previews (for now).
