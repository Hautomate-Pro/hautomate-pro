import { PageIntro } from '../components/PageIntro';
import { Services } from '../sections/Services';

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Project leadership for critical infrastructure."
        description="From early design decisions to commissioning and handover, we help keep complex data-centre programmes coordinated, controlled and moving forward."
      />
      <Services />
    </>
  );
}
