import { notFound } from 'next/navigation';
import { blogs } from '@/utils/data/blogs';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = blogs.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.excerpt}</p>
    </div>
  );
}
