"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { BlogPost, blogs } from "@/utils/data/blogs";

export default function BlogPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogs);
  const [featuredPost] = blogs;

  useEffect(() => {
    if (category) {
      setFilteredPosts(blogs.filter((post) => post.category === category));
    } else {
      setFilteredPosts(blogs);
    }
  }, [category]);

  const categories = [...new Set(blogs.map((post) => post.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Health Education & Insights
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Expert knowledge, personal stories, and medical advancements to empower your health journey
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <button
                  onClick={() => setCategory(null)}
                  className={`px-4 py-2 rounded-full border border-cyan-600 text-sm font-medium transition-all ${
                    category === null
                      ? "bg-cyan-600 text-white"
                      : "text-cyan-600 hover:bg-cyan-100"
                  }`}
                >
                  All Topics
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full border border-cyan-600 text-sm font-medium transition-all ${
                      category === cat
                        ? "bg-cyan-600 text-white"
                        : "text-cyan-600 hover:bg-cyan-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden h-[400px]">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-medium">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{featuredPost.title}</h2>
                  <p className="text-gray-700 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-white bg-gradient-to-r from-cyan-600 to-teal-600 rounded-md hover:opacity-90 transition">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter((post) => post.id !== featuredPost.id)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-medium">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                      <p className="text-gray-600 text-sm">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <span className="inline-flex items-center gap-1 text-cyan-600 hover:underline text-sm mt-2">
                          Read more <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

