// next-sitemap.config.js
module.exports = {
  siteUrl: "https://usemotivo.app",
  generateRobotsTxt: true,
  exclude: ["/dashboard", "/api/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
};
