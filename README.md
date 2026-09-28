# Alisha — 21st Birthday Website

A single-page interactive birthday scrapbook built with React + Vite + JavaScript.

## Run it

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite.

## Build for hosting

```bash
npm run build
```

The production files will be in `dist/`.

## Add photos

Put your images in:

`public/images/`

Then edit:

`src/data/memories.js`

Example:

```js
{
  category: "Imagicaa",
  image: "/images/imagicaa-1.jpg",
  title: "Imagicaa",
  caption: "One of those days worth remembering."
}
```

You can add as many memory objects as you want.

If `image` is empty, the website automatically shows a designed placeholder.

## Add music

Put an MP3 here:

`public/music/birthday-song.mp3`

The website does NOT autoplay it. The floating music button lets the visitor turn it on.

## Important

- No microphone access.
- No camera access.
- No location.
- No login.
- No external music API.
- Works as a static website.
- Mobile-first responsive layout.
- Respects `prefers-reduced-motion`.

## Customize text

Most content is intentionally in the React components so it is easy to find and edit.

The easiest place to start with photos/music is:

`src/data/memories.js`
