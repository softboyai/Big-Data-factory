# Big Data Factory Merit

React + Tailwind project showcasing data and analytics training programs.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173.

## Editing the Google Form Link

1. Open `src/constants/forms.js`.
2. Replace `FORM_ID` with your form ID.
3. Keep `entry.course=` so the course name passes into your form field.

## Updating Course List

1. Edit `src/data/courses.js`.
2. Add or update objects in the array. Keep the shape `{ id, name, hours, price, difficulty, summary, description, outcomes }`.
3. Save to refresh the pages automatically.

## Deploying to Netlify

1. Run `npm run build`.
2. Drag the `dist/` folder into Netlify Drop or push the repo and set the build command to `npm run build` with publish directory `dist`.
3. Netlify will detect the SPA and manage routing by default.

## Tech Stack

- React 18 with React Router
- Tailwind CSS
- Vite build tool

## Structure

- Components live in `src/components/`
- Page shells in `src/pages/`
- Shared data in `src/data/`
- Constants like URLs in `src/constants/`

Feel free to customize colors, typography, and copy to match brand guidelines.

