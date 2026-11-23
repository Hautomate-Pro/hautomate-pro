import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { company } from '../content';

// Legal content for Hautomate Pro Limited. Review with counsel before going live.
const pages: Record<string, { title: string; body: string[] }> = {
  '/privacy': {
    title: 'Privacy Notice',
    body: [
      `<strong>1. Who we are</strong>`,
      `${company.name} ("we", "us", "our") is a private limited company registered in England and Wales (company number ${company.number}), with a registered office at ${company.address.slice(1).join(', ')}.`,
      ``,
      `<strong>2. Personal information we collect</strong>`,
      `Through this website we collect the personal information you submit voluntarily, including through the enquiry form: name, email address, company name, phone number, project location, and project scope and programme details. We also collect your IP address and browser information automatically through server logs and cookies (see our Cookie Policy).`,
      ``,
      `<strong>3. Lawful basis for processing</strong>`,
      `We process your personal information under the following UK GDPR lawful bases: legitimate interests (to respond to your business enquiry), consent (for marketing, which you can withdraw at any time), and legal obligation (where we must retain records for legal, tax or regulatory purposes).`,
      ``,
      `<strong>4. How we use your information</strong>`,
      `We use your personal information to respond to your enquiry, administer our relationship with you, send marketing communications only where you have consented, maintain records required by law, and improve our website and services.`,
      ``,
      `<strong>5. Third-party providers</strong>`,
      `We may share your personal information with hosting and IT providers, email providers (SMTP), and analytics providers (only with your consent). We only engage processors under written data processing agreements.`,
      ``,
      `<strong>6. International data transfers</strong>`,
      `We do not transfer your personal information outside the United Kingdom or European Economic Area. If this changes, we will put appropriate transfer safeguards in place before any transfer occurs.`,
      ``,
      `<strong>7. Data retention schedule</strong>`,
      `Enquiry form submissions are retained for 3 years, then securely deleted. Marketing consent records are retained until you withdraw consent. Server logs and cookie data are retained for no more than 26 months. Records required for legal or tax purposes are retained as required by law.`,
      ``,
      `<strong>8. Your data protection rights</strong>`,
      `You have the right to request access, correction, erasure, restriction, data portability, and to withdraw consent or object to processing. You may also lodge a complaint with the Information Commissioner's Office (ico.org.uk). To exercise any of these rights, contact us at ${company.email}. We will respond within one calendar month.`,
      ``,
      `<strong>9. Data subject access requests (DSARs)</strong>`,
      `Email ${company.email} with "Data Subject Access Request" in the subject line. We may verify your identity before disclosing personal data. There is no fee for a reasonable request.`,
      ``,
      `<strong>10. Personal data breach response</strong>`,
      `We maintain a documented personal data breach response procedure. If a breach is likely to result in a risk to your rights and freedoms, we will notify the ICO within 72 hours where required, and affected individuals without undue delay where there is a high risk.`,
      ``,
      `<strong>11. Marketing consent</strong>`,
      `Marketing consent is entirely separate from submitting a general business enquiry. You can submit an enquiry without opting in to marketing. You can unsubscribe at any time via the unsubscribe link in marketing emails or by emailing ${company.email}.`,
      ``,
      `<strong>12. Record of processing activities</strong>`,
      `We maintain a record of our processing activities as required by the UK GDPR, including purposes, categories of data and recipients, retention periods, and security measures.`,
      ``,
      `<strong>13. EU representative</strong>`,
      `We are a UK-based company and do not currently offer goods or services to, or monitor individuals in, the European Union. We do not consider an EU representative required. We will review this if our activities change.`,
      ``,
      `<strong>14. Data Protection Officer</strong>`,
      `Based on our current processing activities, we have determined that a mandatory DPO appointment is not required. Data protection queries can be directed to ${company.email}.`,
      ``,
      `<strong>15. Cookies</strong>`,
      `Our use of cookies is described in our [Cookie Policy](/cookies). You can manage your cookie preferences through the cookie consent banner.`,
      ``,
      `<strong>16. Changes to this notice</strong>`,
      `We may update this Privacy Notice from time to time. The current version is always available at /privacy.`,
      ``,
      `<strong>Contact us</strong>`,
      `For questions about this Privacy Notice, contact us at ${company.email} or write to us at ${company.address.slice(1).join(', ')}.`,
    ],
  },
  '/cookies': {
    title: 'Cookie Policy',
    body: [
      `<strong>1. What are cookies</strong>`,
      `Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience.`,
      ``,
      `<strong>2. Cookies we use</strong>`,
      `This site uses the following categories of cookies:`,
      `• <strong>Strictly necessary cookies</strong> – essential for the site to function (security and session). These do not require your consent.`,
      `• <strong>Preference cookies</strong> – we store your chosen theme (light or dark mode) in your browser so the site remembers your preference on future visits.`,
      `• <strong>Analytics cookies</strong> – with your consent, we use analytics to understand how visitors interact with the site so we can improve it.`,
      `We do not use advertising or tracking cookies.`,
      ``,
      `<strong>3. Your cookie choices</strong>`,
      `When you first visit the site you will see a cookie consent banner. You can accept or reject non-essential cookies. Your choice is remembered using a cookie so you are not asked again on every visit. You can change your preferences at any time by clearing your cookies or revisiting the consent settings.`,
      ``,
      `<strong>4. How to control cookies</strong>`,
      `You can control and/or delete cookies as you wish – see aboutcookies.org for details. You can delete all cookies already on your device and set most browsers to prevent them from being placed. If you do this, you may need to manually adjust some preferences each time you visit a site.`,
      ``,
      `<strong>5. Changes to this policy</strong>`,
      `We may update this Cookie Policy from time to time. The current version is always available at /cookies.`,
    ],
  },
  '/terms': {
    title: 'Website Terms of Use',
    body: [
      `<strong>1. Acceptance of terms</strong>`,
      `By accessing and using this website, you accept and agree to these terms of use. If you do not agree, please do not use the site.`,
      ``,
      `<strong>2. About us</strong>`,
      `This website is operated by ${company.name} ("we", "us", "our"), a company registered in England and Wales (company number ${company.number}), with a registered office at ${company.address.slice(1).join(', ')}.`,
      ``,
      `<strong>3. Use of the site</strong>`,
      `You may use this website for lawful purposes only. You must not use the site in any way that breaches applicable law, transmit unlawful material, or attempt to interfere with the proper working of the site.`,
      ``,
      `<strong>4. Intellectual property</strong>`,
      `All content on this site, including text, graphics, logos, images and software, is the property of ${company.name} or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute or create derivative works without our prior written consent.`,
      ``,
      `<strong>5. Third-party links</strong>`,
      `This site may contain links to third-party websites. We are not responsible for the content or practices of any linked site.`,
      ``,
      `<strong>6. Disclaimer of warranties</strong>`,
      `The information on this site is provided "as is" without warranty of any kind, either express or implied.`,
      ``,
      `<strong>7. Limitation of liability</strong>`,
      `To the fullest extent permitted by law, ${company.name} shall not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of this site.`,
      ``,
      `<strong>8. Governing law</strong>`,
      `These terms are governed by the laws of England and Wales, and you submit to the exclusive jurisdiction of the courts of England and Wales.`,
      ``,
      `<strong>9. Contact us</strong>`,
      `For questions about these terms, contact us at ${company.email}.`,
    ],
  },
};

export default function Legal() {
  const { pathname } = useLocation();
  const page = pages[pathname];
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  if (!page) return <Navigate to="/" replace />;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {import.meta.env.DEV && (
          <p className="mb-8 border border-amber-500/50 bg-amber-500/10 p-4 text-sm">
            Dev notice: Legal content loaded from <code>src/pages/Legal.tsx</code>. Review with counsel before going live.
          </p>
        )}
        <h1 className="font-display text-5xl font-extrabold">{page.title}</h1>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
          {page.body.map((p) => (<p key={p}>{p}</p>))}
        </div>
      </div>
    </section>
  );
}
