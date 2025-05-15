// app/(landing)/blogs/page.tsx
import BlogCard from "@/app/features/landing/Blogs/components/BlogCard";
import { blogPosts } from "./data/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business & Service Business Branding Tips",
  description:
    "Learn how to build and grow your local service business with tips on branding, logos, flyers, marketing and more from Motivo.",
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Small Business & Service Business Branding Tips
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            imageUrl={post.imageUrl}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
