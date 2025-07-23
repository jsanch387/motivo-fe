// import { blogPosts } from "./app/(landing)/blogs/data/blogs.js";

// const sitemapConfig = {
//   siteUrl: "https://usemotivo.app",
//   generateRobotsTxt: true,
//   generateIndexSitemap: true,
//   trailingSlash: false,
//   exclude: [
//     "/dashboard",
//     "/dashboard/*",
//     "/(dashboard)",
//     "/(dashboard)/*",
//     "/auth",
//     "/auth/*",
//     "/(auth)",
//     "/(auth)/*",
//     "/signup",
//     "/login",
//     "/privacy",
//     "/terms",
//   ],
//   additionalPaths: async () => {
//     const paths = blogPosts.map((post) => ({
//       loc: `/blogs/${post.slug}`,
//       changefreq: "weekly",
//       priority: 0.7,
//     }));

//     return [{ loc: "/" }, { loc: "/about" }, { loc: "/blogs" }, ...paths];
//   },
//   sitemapSize: 5000,
//   changefreq: "weekly",
//   priority: 0.7,
// };

// export default sitemapConfig;

// next-sitemap.config.js

const sitemapConfig = {
  siteUrl: "https://usemotivo.app",

  // ---- core options ----
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  trailingSlash: false,

  // Nothing in /dashboard or /auth exists publicly, but keep these
  // in case future code accidentally adds them.
  exclude: ["/dashboard", "/dashboard/*", "/auth", "/auth/*"],

  // Explicitly list the only pages you want in the sitemap
  additionalPaths: async () => [
    {
      loc: "/",
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: "/form",
      changefreq: "monthly",
      priority: 0.8,
    },
  ],

  // Defaults (mostly irrelevant with so few pages)
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
};

export default sitemapConfig;
