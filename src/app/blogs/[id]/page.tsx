"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { blogs } from "../../../../content/blogs";

export default function BlogPostClient() {
  const pathname = usePathname();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const parts = pathname.split("/");
    const slugFromPath = parts[parts.length - 1];
    const found = blogs.find((b) => b.slug === slugFromPath);
    setBlog(found);
  }, [pathname]);

  if (!blog) return <div className="p-8">Blog not found.</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.excerpt}</p>
    </div>
  );
}
