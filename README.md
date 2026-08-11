# Bassey James Portfolio

A clean, standard Next.js portfolio that can be edited and uploaded to GitHub.

## Edit your information

Open `content/portfolio.ts`. This one file contains your name, introduction, services, projects, technologies, email, GitHub, WhatsApp and project links.

## Add your pictures

1. Put JPG, PNG or WebP files inside `public/images`.
2. Open `content/portfolio.ts`.
3. Set `profileImage` or a project's `image` to the file path, for example `/images/bassey.jpg`.

## Run on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Upload to GitHub

Create an empty GitHub repository, open a terminal in this folder, then run:

```bash
git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

You can deploy the GitHub repository with Vercel using the standard Next.js settings.
