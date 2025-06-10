import { useRouter } from 'next/router';
import { blogs } from '@/utils/data/blogs';
import { BlogPost } from '@/utils/data/blogs';

export default function BlogItem({ blog }: { blog: BlogPost | null }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
  const paths = blogs.map((blog) => ({
    params: { id: blog.id }
  }));

  return { paths, fallback: true };
}


export async function getStaticProps({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id) || null;

  return {
    props: {
      blog
    }
  };
}
