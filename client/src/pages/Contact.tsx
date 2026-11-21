import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a conversation about your project."
        description="Tell us about your facility, programme or delivery challenge. We aim to respond to all enquiries within two working days."
      />
      <Contact />
    </>
  );
}
