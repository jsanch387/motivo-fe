// app/(landing)/blogs/data/blogs.ts

export interface BlogPost {
  slug: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  publishedDate: string;
  // authorName?: string; // Optional: if you ever decide to add it
}

export const blogPosts: BlogPost[] = [
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
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
