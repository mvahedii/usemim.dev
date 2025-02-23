import React from "react";
import Link from "next/link";
import { ArrowCard } from "@/components";

const blogPosts = [
  { title: "Getting Started", description: "Hi to Hello World", id: 1 },
];

export const LatestPost = () => {
  return (
    <section className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white">
          Latest posts
        </h5>
        <Link href="/blog">See all posts</Link>
      </div>
      <ul className="flex flex-col gap-4">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <ArrowCard title={post.title} description={post.description} />
          </li>
        ))}
      </ul>
    </section>
  );
};
