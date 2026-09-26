# fionn-oconnor.vercel.app

My personal site and online CV: experience, education, projects, and a downloadable PDF CV.

Live at **https://fionn-oconnor.vercel.app**

## Stack

- [Next.js](https://nextjs.org/) (static generation) with TypeScript
- Tailwind CSS with the typography plugin
- Markdown blog posts in `posts/`, parsed with gray-matter and remark
- Deployed on Vercel from `main`

## Running locally

```bash
yarn install
yarn dev
```

## Updating the CV

The PDF served at `/FionnOConnor_CV.pdf` lives in `public/`. Replace it whenever the CV changes, and keep the Experience and Projects pages consistent with it.
