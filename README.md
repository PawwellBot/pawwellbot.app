# PawWellBot App

## Local Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm start
```

The dev server runs at `http://localhost:5173`. You can override the host or port:

```sh
HOST=127.0.0.1 PORT=3000 npm start
```

## Deploying to Vercel

Log in and link the local directory once:

```sh
vercel login
npm run vercel:link
```

Create a preview deployment:

```sh
npm run deploy
```

Check what Vercel would upload without deploying:

```sh
npm run deploy:check
```

Create a production deployment:

```sh
npm run deploy:prod
```

## GitHub Actions Deployment

The workflow in `.github/workflows/vercel.yml` runs automatically on every branch push.

- Pushes to `master` or `main` deploy to Vercel production.
- Pushes to any other branch create a Vercel preview deployment.

These GitHub repository secrets are required:

```txt
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

They are already configured on `PawwellBot/pawwellbot.app`.

This directory is already linked locally to the `pawwellbot/pawwellbot` Vercel project.
