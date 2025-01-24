import React from "react";

export const AboutMe = () => {
  return (
    <>
      <h4 className="animate show font-semibold text-black dark:text-white">
        Hi, I&apos;m Nano <span className="text-xl">👋🏻</span>
      </h4>
      <section>
        <article className="space-y-4">
          <p className="animate show">
            I am a minimal, seo friendly, accessible portfolio and blog for
            developers. I am an even more lightweight version of my popular
            theme . I have a lighthouse scores of 100 across the board for
            performance, accesibility, best practices and SEO.
          </p>
          <p className="animate show">
            I come packed with full type safety, a sitemap, an rss feed,
            markdown and mdx support (use components in your markdown) through
            astro integrations. I am styled with tailwind and come preconfigured
            with light, dark and system/os theme preferences out of the box.
          </p>
        </article>
      </section>
    </>
  );
};
