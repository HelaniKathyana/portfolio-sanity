This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js Setup

Start building with Next.js with the following command:

```bash
yarn create next-app
```

## Sanity.io Setup

Install Sanity CLI If not installed using the following command:

```bash
yarn add @sanity/cli global
```

Initialise Sanity with coupon provided by Sonny Sangha YouTube material:

```bash
sanity init --coupon sonny2022
```

Follow the steps in the terminal:

```bash
- Use the default dataset configuration? - Yes
- Would you like to add configuration files for a Sanity project in this Next.js folder? - No
- Project output path - Press Enter
- Select project template - Blog (schema)
- Do you want to use TypeScript? - Yes
- Package manager to use for installing dependencies? - Yarn
```

## Integrate Sanity with the Next project

Add Next sanity and React Portable Text package:

```bash
yarn add next-sanity @portabletext/react @sanity/image-url
```

Update the root package.json and add the Dependencies and Dev Dependencies from the Sanity folder package.json

Then run the following command to update root yarn.lock file:

```bash
yarn install
```

Next you need to move the following directories and files to the root of the repository:

```bash
/schemas
/sanity.cli.ts
/sanity.config.ts
```

After that you can delete sanity folder created

Add .env.local file if does not exist in root of project or update the variables in the file:

```bash
NEXT_PUBLIC_BASE_URL="{LOCALHOST URL}"
NEXT_PUBLIC_SANITY_PROJECT_ID="{SANITY PROJECT ID}"
NEXT_PUBLIC_SANITY_DATASET="{USUALLY SET TO PRODUCTION}"
NEXT_PUBLIC_SANITY_API_VERSION="{SANITY API VERSION - FOR EXAMPLE DATE PROJECT STARTED}"
SANITY_API_READ_TOKEN="{SANITY API TOKEN}"
```

This will need to be added to netlify or server environment variables where the site is deployed.

In app folder you will need to create separate directory for admin page, which will sit under:

```bash
/studio/[[..index]]/page.tsx
```

For more info visit [https://www.npmjs.com/package/next-sanity](https://www.npmjs.com/package/next-sanity).

## Getting Started

```bash
yarn run dev
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

## Sanity

When visiting [http://localhost:3000/studio](http://localhost:3000/studio) for the first time it will ask you whitelist the localhost URL to avoid CORS issues

To start Sanity you need to run

```bash
sanity start
```

If it is the first you started Sanity, you will need to build Next. Once that's done you should be able to start Sanity, which will run on [http://localhost:3333](http://localhost:3333).

```bash
next build
```

To deploy Sanity you need to run

```bash
sanity deploy
```
