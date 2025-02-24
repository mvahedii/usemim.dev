import React from "react";

export const AboutMe = () => {
  return (
    <>
      <h4 className="animate font-semibold text-black dark:text-white">
        Hey, I&apos;m Mohammad <span className="text-xl">👋🏻</span>
      </h4>
      <section>
        <article className="space-y-4">
          <p className="animate">
            I write code, break code, fix code… and sometimes, I even push it to
            production. Been doing this frontend thing for about 7 years, but
            honestly, I just love building stuff—frontend, backend, doesn’t
            matter. As long as I get to solve real problems, I’m in.
          </p>
          <p className="animate">
            This blog? It’s not a place for boring reposts or yet another
            “Here’s what I read today” list. I’m here to tinker, rant, share
            weird ideas, and maybe even break a few best practices (on purpose).
            Stick around things might get messy… in a fun way!
          </p>
        </article>
      </section>
    </>
  );
};
