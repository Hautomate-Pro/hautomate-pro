import { PageIntro } from '../components/PageIntro';
import { About } from '../sections/About';

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Hautomate Pro"
        title="Independent delivery support for complex data-centre projects."
        description="London-based and ready to support projects across Europe, the Middle East and Africa."
      />
      <About />
    </>
  );
}
