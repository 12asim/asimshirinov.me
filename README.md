# Asim Shirinov - Personal Portfolio

A minimal, fast, and clean personal portfolio built with [Next.js](https://nextjs.org/), TypeScript, and [Tailwind CSS v4](https://tailwindcss.com/).

## Features
- **Centralized Content**: Edit all personal info, tools, and projects directly in `src/data/site.ts`
- **Minimal Design**: Sharp corners, narrow layout, light background
- **Responsive**: Fully responsive across mobile, tablet, and desktop
- **Performant**: Next.js App Router and optimized fonts

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Content

All user-editable content is located in **`src/data/site.ts`**.
Open this file to change your name, description, social links, about text paragraphs (and highlighted keywords), project list, and more.

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Push your code to a GitHub repository.
2. Sign in to Vercel and import your new repository.
3. Vercel will automatically detect Next.js and apply the correct build settings.
4. Click **Deploy**.

**Connecting a Custom Domain:**
Once deployed, go to your project settings in Vercel.
- Under **Domains**, enter your custom domain (e.g., `asimshirinov.com`).
- Vercel will provide instructions on how to configure your DNS records (usually an A record and/or CNAME) to point to their servers.

## License
[MIT License](./LICENSE)
