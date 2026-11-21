import { PageIntro } from '../components/PageIntro';
import { Systems } from '../sections/Systems';

export default function SystemsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Systems expertise"
        title="Four disciplines. One integrated facility."
        description="MEP, HVAC, EPMS and BMS must work together. Explore the systems we coordinate across the data-centre lifecycle."
      />
      <Systems />
    </>
  );
}
