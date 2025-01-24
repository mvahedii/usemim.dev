import Link from "next/link";
import React from "react";
import { SITE, SOCIALS } from "./ContactMe.consts";

// #
export const ContactMe = () => {
  return (
    <section className="animate show space-y-4">
      <h5 className="font-semibold text-black dark:text-white">
        Let&apos;s Connect
      </h5>
      <article>
        <p>
          If you want to get in touch with me about something or just to say hi,
          reach out on social media or send me an email.
        </p>
      </article>
      <ul className="flex flex-wrap gap-2">
        {SOCIALS.map((SOCIAL) => (
          <li className="flex gap-x-2 text-nowrap" key={SOCIAL.id}>
            <Link
              href={SOCIAL.HREF}
              aria-label={`${SITE.NAME} on ${SOCIAL.NAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SOCIAL.NAME}
            </Link>
            {"/"}
          </li>
        ))}
        <li className="line-clamp-1">
          <Link href={`mailto:${SITE.EMAIL}`} aria-label={`Email ${SITE.NAME}`}>
            {SITE.EMAIL}
          </Link>
        </li>
      </ul>
    </section>
  );
};
