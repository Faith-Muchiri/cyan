import { blogs, BlogPost } from '@/utils/data/blogs';
import { useRouter } from 'next/navigation';

export default function BlogItem({ blog }: { blog: BlogPost | null }) {

  if (!blog) {
    return <div className="p-8 text-red-600">Blog not found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.excerpt}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = blogs.map(post => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id) || null;

  return {
    props: {
      blog
    }
  };
}