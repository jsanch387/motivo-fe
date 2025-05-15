// app/(landing)/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

// ✅ SEO: next 14 dynamic metadata function
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { getBlogPostBySlug } = await import("../data/blogs");
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { getBlogPostBySlug } = await import("../data/blogs");
  const postMeta = getBlogPostBySlug(slug);
  if (!postMeta) notFound();

  let PostContent;
  try {
    PostContent = (await import(`../posts/${slug}`)).default;
  } catch {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Image
        src={postMeta.imageUrl}
        alt={postMeta.title}
        width={800}
        height={400}
        className="rounded-lg mb-6 object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <PostContent />
    </div>
  );
}
