import { siteUrl } from "../lib/constants";
import type { MetadataRoute } from "next";

export const revalidate = 1800; // 30 minutes - adjust as needed

// Hardcoded sitemap data
const STATIC_PAGES = [
  { pathname: "/" },
];

const STATIC_BLOG_POSTS: { _slug: string }[] = [
  // Add blog post slugs here as needed
];

const STATIC_CHANGELOG_POSTS: { _slug: string }[] = [
  // Add changelog post slugs here as needed
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let index = 1;
  const formattedPages = STATIC_PAGES.map(
    (page) =>
      ({
        url: `${siteUrl}${page.pathname}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: index++,
      }) satisfies MetadataRoute.Sitemap[number],
  );

  const formattedBlogPosts = STATIC_BLOG_POSTS.map(
    (post) =>
      ({
        url: `${siteUrl}/blog/${post._slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: index++,
      }) satisfies MetadataRoute.Sitemap[number],
  );

  const formattedChangelogPosts = STATIC_CHANGELOG_POSTS.map(
    (post) =>
      ({
        url: `${siteUrl}/changelog/${post._slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: index++,
      }) satisfies MetadataRoute.Sitemap[number],
  );

  const routes = [...formattedPages, ...formattedBlogPosts, ...formattedChangelogPosts];
  return routes;
}
