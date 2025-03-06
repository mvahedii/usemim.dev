import { Container } from "@/components";
import { AboutMe, ContactMe } from "@/app/(client)/(home)/components";
import { getPosts, LatestPosts } from "@/features/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <Container>
      <div className="space-y-16">
        <AboutMe />
        <LatestPosts posts={posts} />
        <ContactMe />
      </div>
    </Container>
  );
}
