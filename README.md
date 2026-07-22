# C&C 1023 Automotives React Website

A responsive Vite + React website concept for C&C 1023 Automotives.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Replace vehicle images

The fleet currently uses styled placeholders in `src/App.jsx` and `src/index.css`.
Replace each `.vehicle-image-placeholder` block with an `<img>` tag, or import your files from `src/assets`.

Example:

```jsx
import innova from './assets/innova.jpg';

<img className="vehicle-real-image" src={innova} alt="Toyota Innova" />
```

Then add:

```css
.vehicle-real-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Make the inquiry form work

The form is intentionally front-end only. Connect it to Formspree, EmailJS, Netlify Forms, or your own API.
