// app/(landing)/blogs/data/blogs.ts

export const blogPosts = [
  {
    slug: "brand-your-service-business",
    title: "How to Brand Your Local Service Business",
    imageUrl: "/images/blogs/brand-your-local-service-business.png",
    excerpt:
      "Learn how to make your small service business look professional and stand out to get more local customers.",
  },
];

// ✅ helper function to safely get blog by slug
export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
