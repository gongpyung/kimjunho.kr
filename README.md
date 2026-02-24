# kimjunho.kr

This is the source code for my personal website, built with [Astro](https://astro.build) and configured for deployment on [Vercel](https://vercel.com).

## About

I'm Kim Junho, a software engineer based in Seoul. This website hosts my notes, projects, and blog posts.

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/           # Public images
│   └── fonts/            # Web fonts
├── src/
│   ├── assets/           # Icons and images used in components
│   ├── components/       # Reusable UI components
│   │   └── ui/           # React-based UI components
│   ├── content/          # Content collections
│   │   └── blog/         # Blog posts in Markdown
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes and pages
│   ├── styles/           # Global styles
│   └── utils/            # Utility helpers
├── scripts/              # Verification/build helper scripts
├── astro.config.mjs      # Astro configuration
├── vercel.json           # Vercel deployment config
├── package.json          # Project dependencies and scripts
└── LICENSE               # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds production output to `./dist/` |
| `npm run build:check` | Runs Astro check + production build |
| `npm run verify` | Runs validation pipeline (check + build + route guard) |
| `npm run preview` | Previews build output locally |

## Deployment

This site is configured for Vercel static deployment. Connect the repository to Vercel, and it will build/deploy automatically on push.

## License

This repository uses dual licensing:

- **Documentation & Blog Posts**: [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: [MIT License](LICENSE)

See the [LICENSE](LICENSE) file for full details.

## Special Thanks

Special thanks to [Peter Steinberger](https://github.com/steipete) and [Sat Naing](https://github.com/satnaing) for the original site/theme foundation that this project builds on.
