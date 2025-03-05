import React, { FC } from "react";
import Link from "next/link";
import { ArrowCard } from "@/components";
import { PostModel } from "@features/post";

type LatestPostsProps = {
  posts: PostModel[];
};

export const LatestPosts: FC<LatestPostsProps> = ({ posts }) => {
  return (
    <section className="animate space-y-6">
      <div className="flex flex-wrap gap-y-2 items-center justify-between">
        <h5 className="font-semibold text-black dark:text-white">
          Latest posts
        </h5>
        <Link href="/blog">See all posts</Link>
      </div>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.description}>
            <ArrowCard title={post.title} description={post.description} />
          </li>
        ))}
      </ul>
    </section>
  );
};
