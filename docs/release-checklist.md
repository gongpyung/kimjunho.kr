# Release Checklist

## Pre-deploy

- [ ] Confirm CI is green (`Lint and Format`, `Astro Build`).
- [ ] Run local install and verification:
  - [ ] `npm ci`
  - [ ] `npm run verify`
- [ ] Confirm canonical/source domain values are correct in `src/consts.ts` (`SITE.website`, `SITE.profile`, `SITE.ogImage`).
- [ ] Confirm structured data output references the same domain (homepage + a post page).
- [ ] Confirm `PUBLIC_GOOGLE_SITE_VERIFICATION` is set in deployment environment (if used).

## Deploy

- [ ] Merge in required order (routing/foundation changes before verification guard if applicable).
- [ ] Deploy to production.

## Post-deploy

- [ ] Validate core endpoints:
  - [ ] `/`
  - [ ] `/posts`
  - [ ] `/rss.xml`
  - [ ] `/robots.txt`
  - [ ] `/sitemap-index.xml`
- [ ] Inspect page source for `<link rel="canonical">` on home + one post.
- [ ] Inspect JSON-LD (`application/ld+json`) on home + one post.
- [ ] Verify no route-conflict warnings in build logs.
- [ ] Run external validation:
  - [ ] Google Rich Results Test (home + one post)
  - [ ] Search Console URL Inspection (after deploy)
