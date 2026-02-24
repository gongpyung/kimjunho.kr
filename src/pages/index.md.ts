import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Gongpyung

Welcome to Gongpyung Homepage.

This markdown endpoint provides a lightweight text-only version of the site.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [hong9](https://github.com/hong9)

---

*This is the markdown-only version of the homepage.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
