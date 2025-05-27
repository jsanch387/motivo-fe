import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { getBlogPostBySlug } from "../data/blogs";

// Correct typing for Next.js 15 where `params` is a Promise
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.imageUrl,
          width: 800,
          height: 400,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postMeta = getBlogPostBySlug(slug);

  if (!postMeta) notFound();

  let PostContent;
  try {
    PostContent = (await import(`../posts/${slug}.tsx`)).default;
  } catch (error) {
    console.error("Failed to load post content for slug:", slug, error);
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 prose lg:prose-xl dark:prose-invert">
      <h1>{postMeta.title}</h1>
      {postMeta.publishedDate && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Published on:{" "}
          {new Date(postMeta.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      <div className="my-6">
        <Image
          src={postMeta.imageUrl}
          alt={postMeta.title}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>
      <PostContent />
    </div>
  );
}
