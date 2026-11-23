import { PageIntro } from '../components/PageIntro';
import { Link } from 'react-router-dom';
import { company } from '../content';
import { SectionLabel, SectionHeading } from '../components/SectionLabel';

export default function RecruitmentPage() {
  return (
    <>
      <PageIntro
        eyebrow="Join our team"
        title="Work with us on data-centre projects across EMEA."
        description="We are always interested in hearing from talented delivery professionals. Send us your details and a member of our team will be in touch."
      />
      <section id="recruitment" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionLabel n="06">Recruitment</SectionLabel>
          <SectionHeading>Send us your application.</SectionHeading>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            Tell us about your experience, the role you are interested in, and how you can support our
            data-centre delivery programme. CVs and portfolios are welcome as links.
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.4fr]">
            <div className="border border-line bg-surface p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold">Privacy notice for recruitment applications</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Hautomate Pro Limited is committed to protecting your personal data. The information you
                submit through this form — including your name, email, phone number, role of interest,
                message and any CV link — is used solely for the purpose of considering your application
                and communicating with you about recruitment opportunities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                We are the data controller. Our lawful basis for processing your application data is
                legitimate interests (recruitment) and, where you opt in, consent for marketing.
                We do not share your application data with third parties except where required by law.
                Application data is retained for 12 months after the recruitment process ends, then
                securely deleted.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                You have the right to access, correct, or erase your data, and to withdraw consent at
                any time. To exercise these rights, contact us at{' '}
                <a href={`mailto:${company.email}`} className="underline underline-offset-4 hover:text-brand">
                  {company.email}
                </a>
                .
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                For full details, see our{' '}
                <Link to="/privacy" className="underline underline-offset-4 hover:text-brand">
                  Privacy Notice
                </Link>
                .
              </p>
            </div>
            <div className="border border-line bg-surface p-8 md:p-12">
              <RecruitmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RecruitmentForm() {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold">Submit your application</h3>
      <p className="mb-8 mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Share your details and a link to your CV or portfolio.
      </p>
      <p className="text-sm text-muted">
        Application form coming soon. In the meantime, please email your CV to{' '}
        <a href={`mailto:${company.email}`} className="underline underline-offset-4 hover:text-brand">
          {company.email}
        </a>
        .
      </p>
    </div>
  );
}