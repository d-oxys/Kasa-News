This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
newsapi
├─ .eslintrc.json
├─ .gitignore
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ asset
│  │  ├─ batik-icon-vertikal.svg
│  │  ├─ batik-icon.svg
│  │  ├─ fitur-ilustration.svg
│  │  ├─ hero-ilustration.svg
│  │  ├─ logo-white.svg
│  │  ├─ mendali-emas.png
│  │  ├─ mendali-perak.png
│  │  ├─ mendali-perunggu.png
│  │  ├─ newsapi.png
│  │  ├─ please-login.png
│  │  └─ search-ilustration.svg
│  ├─ fonts
│  │  └─ Eudoxus
│  │     ├─ EudoxusSans-Bold.ttf
│  │     ├─ EudoxusSans-ExtraBold.ttf
│  │     ├─ EudoxusSans-ExtraLight.ttf
│  │     ├─ EudoxusSans-Light.ttf
│  │     ├─ EudoxusSans-Medium.ttf
│  │     └─ EudoxusSans-Regular.ttf
│  ├─ hero.png
│  ├─ images
│  │  └─ MOCH ICHSAN NR.jpg
│  ├─ logo-white.svg
│  ├─ logo.svg
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ actions
│  │  ├─ news.ts
│  │  └─ search.ts
│  ├─ app
│  │  ├─ artikel
│  │  ├─ error.tsx
│  │  ├─ favicon.ico
│  │  ├─ global-error.tsx
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  ├─ page.tsx
│  │  ├─ produk
│  │  └─ tentang
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ buttons
│  │  │  └─ primaryButton
│  │  │     └─ index.tsx
│  │  ├─ footer
│  │  │  ├─ dialog.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ message.tsx
│  │  ├─ forms
│  │  │  └─ input
│  │  │     └─ search.tsx
│  │  ├─ icons
│  │  │  ├─ search.tsx
│  │  │  └─ sketchs.tsx
│  │  ├─ loaders
│  │  │  └─ index.tsx
│  │  ├─ navbar
│  │  │  └─ index.tsx
│  │  └─ news
│  │     └─ newsList.tsx
│  ├─ containers
│  │  ├─ artikel-page
│  │  └─ home-page
│  │     ├─ fiture-section
│  │     │  └─ index.tsx
│  │     ├─ headlines-section
│  │     │  └─ index.tsx
│  │     └─ hero-section
│  │        └─ index.tsx
│  ├─ contents
│  │  └─ content.tsx
│  ├─ libs
│  │  └─ font.ts
│  ├─ services
│  │  └─ news.ts
│  ├─ store
│  │  ├─ newsContext.tsx
│  │  └─ newsReducer.ts
│  ├─ styles
│  │  └─ globals.css
│  └─ types
│     ├─ globalTypes.ts
│     └─ newsTypes.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ __tests__

```
