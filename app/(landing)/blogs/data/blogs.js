// app/(landing)/blogs/data/blogs.js

export const blogPosts = [
  {
    slug: "brand-your-service-business",
    title: "How to Brand Your Local Service Business",
    imageUrl: "/images/blogs/brand-your-local-service-business.png",
    excerpt:
      "Learn how to make your small service business look professional and stand out to get more local customers.",
    publishedDate: "2024-05-24",
  },
  // Add more posts here with their publishedDate
  // {
  //   slug: "another-post",
  //   title: "Another Great Post",
  //   imageUrl: "/images/blogs/another-post.png",
  //   excerpt: "An excerpt for another great post.",
  //   publishedDate: "2024-05-20",
  // },
];

// ✅ helper function to safely get blog by slug
export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
