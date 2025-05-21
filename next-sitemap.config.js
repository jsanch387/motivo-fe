import { blogPosts } from "./app/(landing)/blogs/data/blogs.ts";

const sitemapConfig = {
  siteUrl: "https://usemotivo.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  trailingSlash: false,
  exclude: [
    "/dashboard",
    "/dashboard/*",
    "/(dashboard)",
    "/(dashboard)/*",
    "/auth",
    "/auth/*",
    "/(auth)",
    "/(auth)/*",
    "/signup",
    "/login",
  ],
  additionalPaths: async () => {
    const paths = blogPosts.map((post) => ({
      loc: `/blogs/${post.slug}`,
      changefreq: "weekly",
      priority: 0.7,
    }));

    return [
      { loc: "/" },
      { loc: "/about" },
      { loc: "/blogs" },
      { loc: "/terms" },
      { loc: "/privacy" },
      ...paths,
    ];
  },
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
};

export default sitemapConfig;
