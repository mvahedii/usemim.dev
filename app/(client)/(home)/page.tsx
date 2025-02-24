import { Container } from "@/components";
import {
  AboutMe,
  LatestPost,
  LatestLearnings,
  ContactMe,
} from "@/app/(client)/(home)/components";

export default function Home() {
  return (
    <Container>
      <div className="space-y-16">
        <AboutMe />
        <LatestPost />
        <LatestLearnings />
        <ContactMe />
      </div>
    </Container>
  );
}
