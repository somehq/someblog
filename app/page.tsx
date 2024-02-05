import React from "react";

import Link from "next/link";

import { getPosts } from "@/lib/api";

export default async function Page() {
  const posts = getPosts();

  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-col space-y-8">
        {!!posts &&
          posts.map((post) => (
            <div key={post.slug} className="mb-4">
              <Link className="text-xl font-medium" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <p className="text-xs text-zinc-400 mt-2">{post.excerpt}</p>
              <p className="text-xs text-zinc-400 mt-2">- {post.author.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
