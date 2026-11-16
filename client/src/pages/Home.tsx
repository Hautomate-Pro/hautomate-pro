import { About } from '../sections/About';
import { Approach } from '../sections/Approach';
import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { Systems } from '../sections/Systems';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Systems />
      <Approach />
      <About />
      <Contact />
    </>
  );
}
