import { PageIntro } from '../components/PageIntro';
import { Approach } from '../sections/Approach';

export default function ApproachPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our approach"
        title="A clear path from project brief to live operation."
        description="We bring structure to each delivery phase, managing decisions and interfaces from requirements and design through construction, commissioning and handover."
      />
      <Approach />
    </>
  );
}
