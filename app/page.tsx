import { Container } from "@/shared/components";
import { AboutMe } from "@/app/(home)/components";

export default function Home() {
  return (
    <Container>
      <div className="space-y-16">
        <AboutMe />
      </div>
    </Container>
  );
}
