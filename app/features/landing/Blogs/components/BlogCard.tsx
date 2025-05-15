// components/blog/BlogCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Card from "@/app/components/ui/Card";

interface BlogCardProps {
  slug: string;
  title: string;
  imageUrl: string;
  excerpt: string;
}

export default function BlogCard({
  slug,
  title,
  imageUrl,
  excerpt,
}: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`} className="block group transition">
      <Card className="overflow-hidden hover:border-zinc-700 hover:shadow-md">
        <div className="relative w-full h-48 rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">{excerpt}</p>
        </div>
      </Card>
    </Link>
  );
}
