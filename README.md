# Jaime Castresana Iza Portfolio

This repository contains a recruiter-friendly portfolio website built in small, reviewable slices.

## Current scope

This PR 1 foundation includes:

- Next.js App Router setup with TypeScript
- Tailwind CSS configuration and global theme tokens
- Base layout with header and footer
- Homepage skeleton plus placeholder top-level routes
- Reusable section primitive for the editorial layout
- Local setup instructions

Future PRs add typed content, portfolio pages, CV download flow, the mock assistant, and tests.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure

```text
app/
  (pages)/
    about/page.tsx
    chat/page.tsx
    contact/page.tsx
    cv/page.tsx
    page.tsx
    projects/page.tsx
  globals.css
  layout.tsx
components/
  footer.tsx
  header.tsx
  section.tsx
```

## Planned slices

- PR 2: profile content and reusable data model
- PR 3: portfolio pages and responsive styling
- PR 4: CV download and contact flow
- PR 5: mock AI assistant using local profile knowledge
- PR 6: tests and polish
- PR 7: real LLM integration

## Deployment

This app is designed to deploy cleanly to Vercel once dependencies are installed and the later content slices are merged.
