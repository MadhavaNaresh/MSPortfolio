# Madhava Sathineedi Portfolio

Static recruiter portfolio for Madhava Sathineedi, built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

Check your local versions:

```bash
node --version
npm --version
```

## Install Dependencies

From the project root:

```bash
npm install
```

## Start Local Development Server

Run the Vite development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```bash
http://localhost:5173
```

Open that URL in your browser. The dev server supports hot reload, so changes in `src/` should appear automatically.

## Build For Production

Create the production build:

```bash
npm run build
```

The generated static site is written to:

```bash
dist/
```

## Preview Production Build Locally

After running `npm run build`, preview the built site:

```bash
npm run preview
```

Vite will print a preview URL, usually:

```bash
http://127.0.0.1:4173
```

Use this to verify the production output before deploying.

## Useful Commands

```bash
npm install      # install dependencies
npm run dev      # start local dev server
npm run build    # type-check and create production build
npm run preview  # preview the production build
```

## Environment Variables

Cloudflare Web Analytics is optional and wired through `VITE_CF_ANALYTICS_TOKEN`.

For local testing, copy `.env.example` to `.env.local` and add the token:

```bash
VITE_CF_ANALYTICS_TOKEN=replace-with-cloudflare-web-analytics-token
```

Without this token, the site still runs normally and no analytics script is loaded.

## Cloudflare Pages Hosting

1. Push this project to GitHub.
2. In Cloudflare, create a Pages project from the repository.
3. Use these settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: latest Cloudflare default is fine for this project.
4. Add the custom domain, for example `madhavasathineedi.com`.
5. Submit `https://madhavasathineedi.com/sitemap.xml` in Google Search Console.

## Analytics

1. Create a Cloudflare Web Analytics site.
2. Copy the beacon token.
3. Set `VITE_CF_ANALYTICS_TOKEN` in Cloudflare Pages environment variables.
4. Redeploy.

## SEO Notes

- Update `https://madhavasathineedi.com/` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` if the final domain changes.
- Keep resume metrics accurate and resume-backed.
- If adding blog posts later, create separate routes/pages and include them in the sitemap.
