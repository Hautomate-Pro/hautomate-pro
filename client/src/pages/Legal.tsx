import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { company } from '../content';

// Legal content for Hautomate Pro Limited. Review with counsel before going live.
const pages: Record<string, { title: string; body: string[] }> = {
  '/privacy': {
    title: 'Privacy Policy',
    body: [
      `<strong>Hautomate Pro Limited ("Hautomate", "we", "us" or "our") respects the privacy and confidentiality of individuals whose personal information we collect, receive, store, use or otherwise process in connection with our business activities.</strong>`,
      ``,
      `<strong>This Privacy Policy explains how we collect, use, disclose, store, protect and manage personal data, together with the rights available to individuals under applicable data protection legislation.</strong>`,
      ``,
      `It applies to personal information processed through our website, business communications, service enquiries, commercial engagements, recruitment activities, supplier relationships and other interactions with Hautomate.`,
      `We are committed to handling personal information responsibly, transparently and securely, in accordance with applicable data protection and privacy requirements.`,
      `This Policy should be read alongside our Website Terms of Use and Cookie Policy.`,
      ``,
      `<strong>2. About Hautomate Pro Limited</strong>`,
      `For the purposes of applicable data protection legislation, Hautomate Pro Limited acts as a data controller when it determines the purposes and means of processing personal information.`,
      `Our corporate details are:`,
      `Company Name: Hautomate Pro Limited`,
      `Company Registration Number: 15414164`,
      `Country of Registration: United Kingdom`,
      `Registered Office: Office 11366, 182-184 High Street North, London, East Ham, England, E6 2JA.`,
      `Business Email: hautomateprouk@gmail.com`,
      `Privacy Contact: hautomateprouk@gmail.com`,
      `Website: To be updated`,
      `For privacy-related enquiries, requests or complaints, please contact us using the privacy contact details above.`,
      `Where Hautomate processes personal information on behalf of a customer under that customer's instructions, Hautomate may act as a data processor rather than a data controller. Such processing will be governed by the applicable contractual and data processing arrangements.`,
      ``,
      `<strong>3. Scope of This Policy</strong>`,
      `This Policy applies to individuals whose personal information we process in connection with our business, including:`,
      `a. Visitors to our website.`,
      `b. Prospective and existing customers.`,
      `c. Representatives, employees and authorised personnel of business customers.`,
      `d. Suppliers, contractors, consultants and professional service providers.`,
      `e. Business partners and prospective commercial collaborators.`,
      `f. Individuals who communicate with us through email, telephone, online forms or other communication channels.`,
      `g. Job applicants and prospective employees.`,
      `h. Current and former employees, where applicable.`,
      `i. Other individuals whose information we receive or process in the course of our legitimate business activities.`,
      `This Policy applies regardless of whether the relevant individual is located in the United Kingdom, European Union or another country within our EMEA operating markets, subject to the territorial scope of applicable legislation.`,
      `Where specific processing activities require additional or more detailed privacy information, we may provide supplementary notices.`,

      ``,
      `<strong>4. Personal Information We Collect</strong>`,
      `The categories of personal information we collect depend on the nature of your interaction with Hautomate.`,

      `<strong>4.1 Identity and Contact Information</strong>`,
      `We may collect:`,
      `- Full name.`,
      `- Business email address.`,
      `- Telephone and mobile numbers.`,
      `- Business and correspondence addresses.`,
      `- Job title and professional designation.`,
      `- Company or organisation name.`,
      `- Other contact details voluntarily provided to us.`,

      `<strong>4.2 Professional and Business Information</strong>`,
      `Where relevant to a commercial or professional engagement, we may collect:`,
      `- Employer and organisational details.`,
      `- Professional experience and qualifications.`,
      `- Business correspondence.`,
      `- Procurement and supplier information.`,
      `- Project-related responsibilities.`,
      `- Professional references and business credentials.`,
      `- Commercial proposals and engagement records.`,

      `<strong>4.3 Enquiry and Communication Information</strong>`,
      `When you contact us or submit an enquiry, we may collect:`,
      `- The contents of your message.`,
      `- Information submitted through contact forms.`,
      `- Details of requested services or technical requirements.`,
      `- Project descriptions and relevant documentation.`,
      `- Communication history.`,
      `- Supporting documents or attachments.`,
      `- Records of meetings, discussions and business correspondence.`,

      `Please avoid submitting unnecessary personal, confidential, security-sensitive or special category information through general website enquiry facilities.`,

      `<strong>4.4 Technical and Website Usage Information</strong>`,
      `When you access our website, we or authorised service providers may collect certain technical information, subject to applicable consent requirements.`,

      `This may include:`,
      `- Internet Protocol (IP) addresses.`,
      `- Browser type and version.`,
      `- Device and operating system information.`,
      `- Website access dates and times.`,
      `- Pages visited and navigation information.`,
      `- Referring website addresses.`,
      `- Technical diagnostic and error information.`,
      `- Cookie identifiers and other online identifiers.`,

      `The collection and use of information through cookies and similar technologies are explained in our separate Cookie Policy.`,

      `<strong>4.5 Recruitment and Employment Information</strong>`,
      `Where Hautomate undertakes recruitment or employment-related activities, we may process:`,
      `- CVs and professional profiles.`,
      `- Educational qualifications.`,
      `- Employment history.`,
      `- Professional certifications.`,
      `- References.`,
      `- Interview and assessment records.`,
      `- Right-to-work information.`,
      `- Employment and contractual documentation.`,
      `- Relevant payroll and administrative information.`,

      `Additional information may be requested where required by applicable employment, immigration or regulatory obligations.`,

      `Any criminal records, health information or other special category information will only be processed where a lawful condition and appropriate safeguards exist.`,

      `<strong>4.6 Supplier and Business Partner Information</strong>`,
      `We may collect information necessary to establish and manage relationships with suppliers, subcontractors, consultants and other business partners.`,

      `This may include:`,
      `- Contact and identification details.`,
      `- Business registration information.`,
      `- Payment and invoicing information.`,
      `- Contractual records.`,
      `- Professional qualifications and credentials.`,
      `- Compliance and due diligence information.`,
      `- Business performance and engagement records.`,

      `<strong>4.7 Information Obtained from Other Sources</strong>`,
      `In certain circumstances, we may obtain personal information from sources other than the individual concerned.`,

      `These may include:`,
      `- Publicly available professional directories.`,
      `- Company and regulatory registers.`,
      `- Professional networking platforms.`,
      `- Business partners and authorised representatives.`,
      `- Recruitment agencies.`,
      `- Customer and supplier referrals.`,
      `- Professional references.`,
      `- Other lawful business information sources.`,

      `Where we obtain personal information indirectly, we will provide the required privacy information in accordance with applicable legislation, including information about the source and categories of data obtained, unless a lawful exception applies.`,

      ``,
      `<strong>5. How We Collect Personal Information</strong>`,
      `We may collect personal information through the following methods:`,
      `a. Directly from you when you contact us, submit an enquiry, request information or communicate with our representatives.`,
      `b. Through forms, applications and other interactive features on our Website.`,
      `c. During commercial negotiations, project discussions and contractual engagements.`,
      `d. Through email, telephone, online meetings and other business communication channels.`,
      `e. From customers, suppliers, contractors, professional advisers and authorised representatives.`,
      `f. Through recruitment agencies, professional networks and publicly available professional sources.`,
      `g. Automatically through Website technologies and server logs, subject to applicable legal requirements.`,
      `h. Through other lawful sources relevant to our business operations.`,

      `Where we request information directly from you, we will endeavour to explain why it is required and whether providing it is necessary for a particular purpose.`,

      ``,
      `<strong>6. Why We Use Personal Information</strong>`,
      `We process personal information only where we have an appropriate lawful basis and a defined business or legal purpose.`,

      `Depending on the circumstances, we may use personal information for the following purposes.`,

      `<strong>6.1 Responding to Enquiries and Business Development</strong>`,
      `We use contact and enquiry information to:`,
      `- Respond to requests for information.`,
      `- Understand prospective customer requirements.`,
      `- Discuss potential projects and service opportunities.`,
      `- Prepare commercial proposals and quotations.`,
      `- Arrange meetings and consultations.`,
      `- Maintain relevant business correspondence.`,

      `<strong>6.2 Providing and Managing Services</strong>`,
      `Where we enter into a commercial relationship, we may process personal information to:`,
      `- Establish and administer customer relationships.`,
      `- Deliver agreed services.`,
      `- Coordinate project activities and communications.`,
      `- Manage contractual obligations.`,
      `- Support technical and project delivery activities.`,
      `- Address customer queries and service issues.`,
      `- Maintain appropriate project and engagement records.`,

      `<strong>6.3 Managing Supplier and Business Relationships</strong>`,
      `We may process relevant information to:`,
      `- Identify and assess prospective suppliers.`,
      `- Establish commercial relationships.`,
      `- Manage procurement and contractual arrangements.`,
      `- Process invoices and payments.`,
      `- Monitor supplier performance.`,
      `- Meet applicable legal and regulatory obligations.`,

      `<strong>6.4 Recruitment and Employment</strong>`,
      `Where relevant, we process personal information to:`,
      `- Receive and evaluate applications.`,
      `- Assess professional qualifications and suitability.`,
      `- Conduct interviews and assessments.`,
      `- Verify information where legally permitted.`,
      `- Manage recruitment decisions.`,
      `- Administer employment relationships.`,

      `<strong>6.5 Website Operation and Improvement</strong>`,
      `We may use relevant technical information to:`,
      `- Maintain Website functionality.`,
      `- Diagnose technical problems.`,
      `- Protect against malicious activity.`,
      `- Monitor Website performance.`,
      `- Improve accessibility and user experience.`,
      `- Understand Website engagement through permitted analytics technologies.`,

      `Non-essential cookies and similar technologies will only be used where the applicable consent requirements have been satisfied.`,

      `<strong>6.6 Security, Fraud Prevention and Legal Compliance</strong>`,
      `We may process relevant information to:`,
      `- Protect our systems and business infrastructure.`,
      `- Detect and investigate suspected fraud or misuse.`,
      `- Respond to cybersecurity incidents.`,
      `- Establish, exercise or defend legal claims.`,
      `- Comply with legal and regulatory obligations.`,
      `- Maintain appropriate business and compliance records.`,

      `<strong>6.7 Business Communications and Marketing</strong>`,
      `Where legally permitted, we may use relevant business contact information to communicate information about our services, capabilities, corporate developments and other relevant business activities.`,

      `We will comply with applicable electronic marketing and data protection requirements.`,

      `Where consent is required, we will obtain it before sending the relevant marketing communications.`,

      `You may opt out of marketing communications at any time using the unsubscribe facility provided or by contacting us directly.`,

      `We will not treat a general enquiry or submission of contact information as automatic consent to receive unrelated marketing communications.`,

      ``,
      `<strong>7. Lawful Bases for Processing</strong>`,
      `Under applicable data protection legislation, Hautomate must identify an appropriate lawful basis for each processing activity.`,

      `Depending on the purpose and circumstances, we may rely on the following lawful bases.`,

      `<strong>7.1 Contractual Necessity</strong>`,
      `We may process personal information where necessary to:`,
      `- Enter into a contract with you.`,
      `- Take steps requested by you before entering into a contract.`,
      `- Perform our contractual obligations.`,
      `- Manage and administer an existing commercial engagement.`,

      `<strong>7.2 Legitimate Interests</strong>`,
      `We may process personal information where necessary for our legitimate business interests, provided that those interests do not override your fundamental rights and freedoms.`,

      `These interests may include:`,
      `- Managing business enquiries and relationships.`,
      `- Developing and maintaining commercial relationships.`,
      `- Improving our services and Website.`,
      `- Maintaining business and communication records.`,
      `- Protecting our systems and infrastructure.`,
      `- Preventing fraud and misuse.`,
      `- Establishing, exercising or defending legal claims.`,

      `Where we rely on legitimate interests, we will consider the impact on individuals and undertake an appropriate balancing assessment where required.`,

      `You have the right to object to processing based on legitimate interests in accordance with applicable law.`,

      `<strong>7.3 Legal Obligations</strong>`,
      `We may process personal information where necessary to comply with applicable legal obligations, including:`,
      `- Company and corporate record-keeping requirements.`,
      `- Accounting and taxation obligations.`,
      `- Employment and regulatory requirements.`,
      `- Lawful requests from competent authorities.`,
      `- Other statutory reporting and compliance obligations.`,

      `<strong>7.4 Consent</strong>`,
      `We may rely on your consent where required or appropriate, including for certain:`,
      `- Marketing communications.`,
      `- Non-essential cookies and tracking technologies.`,
      `- Optional data processing activities.`,
      `- Other activities for which consent is the appropriate legal basis.`,

      `Where we rely on consent, you may withdraw it at any time.`,

      `Withdrawal does not affect the lawfulness of processing undertaken before withdrawal.`,

      `<strong>7.5 Vital Interests and Other Lawful Bases</strong>`,
      `Where relevant and legally applicable, we may rely on other lawful bases recognised under applicable data protection legislation.`,

      `We will not assume that a lawful basis to one processing activity automatically applies to another.`,

      ``,
      `<strong>8. Special Category and Sensitive Personal Information</strong>`,
      `We do not intentionally seek to collect special category personal data through ordinary Website enquiries.`,

      `Special category information may include:`,
      `- Racial or ethnic origin.`,
      `- Political opinions.`,
      `- Religious or philosophical beliefs.`,
      `- Trade union membership.`,
      `- Genetic or biometric information used for identification.`,
      `- Health information.`,
      `- Information concerning sex life or sexual orientation.`,

      `Where such information is necessary for a legitimate and lawful business or employment purpose, we will only process it where an appropriate legal condition applies and suitable safeguards are implemented.`,

      `We may also process criminal offence information where legally permitted and subject to the relevant legal requirements and safeguards.`,

      `You should not submit special category or sensitive personal information through general Website contact facilities unless specifically requested through an appropriate and secure process.`,

      ``,
      `<strong>9. How We Share Personal Information</strong>`,
      `We do not sell personal information to third parties.`,

      `However, we may share relevant personal information with the following categories of recipients where necessary and lawful.`,

      `<strong>9.1 Professional and Business Service Providers</strong>`,
      `These may include:`,
      `- IT and technology service providers.`,
      `- Website hosting and infrastructure providers.`,
      `- Cloud storage and communication providers.`,
      `- Cybersecurity and technical support providers.`,
      `- Professional consultants and advisers.`,
      `- Accounting and administrative service providers.`,
      `- Recruitment and human resources service providers.`,

      `<strong>9.2 Customers, Suppliers and Project Stakeholders</strong>`,
      `Where necessary for the performance of a contractual or legitimate business activity, we may share relevant information with:`,
      `- Customers and their authorised representatives.`,
      `- Suppliers and subcontractors.`,
      `- Consultants and project delivery partners.`,
      `- Relevant contractors and technical service providers.`,
      `- Other authorised project stakeholders.`,

      `We will seek to ensure that information shared is appropriate and limited to what is necessary for the relevant purpose.`,

      `<strong>9.3 Legal, Regulatory and Public Authorities</strong>`,
      `We may disclose personal information where necessary to:`,
      `- Comply with applicable laws and regulations.`,
      `- Respond to lawful requests from competent authorities.`,
      `- Establish, exercise or defend legal claims.`,
      `- Protect the rights, safety and security of Hautomate or other persons.`,

      `<strong>9.4 Corporate Transactions</strong>`,
      `In connection with a proposed or actual merger, acquisition, restructuring, financing, business transfer or sale of assets, relevant personal information may be disclosed to prospective or actual transaction parties and their professional advisers, subject to appropriate confidentiality and legal safeguards.`,

      ``,
      `<strong>10. Third-Party Service Providers and Data Processors</strong>`,
      `We may engage external organisations to provide services that support our business and Website operations.`,

      `Where these organisations process personal information on our behalf, they will be engaged under appropriate contractual arrangements.`,

      `We will take reasonable steps to ensure that relevant service providers:`,
      `a. Process personal information only for authorised purposes and in accordance with our documented instructions, where acting as processors.`,
      `b. Implement appropriate technical and organisational security measures.`,
      `c. Maintain confidentiality obligations.`,
      `d. Restrict access to authorised personnel.`,
      `e. Provide reasonable assistance with applicable data protection obligations.`,
      `f. Do not appoint sub-processors without the required authorisation and safeguards.`,
      `g. Assist with the return or deletion of personal information at the end of the relevant engagement, where applicable.`,

      `Where a third-party acts as an independent data controller, its own privacy arrangements may apply to its processing activities.`,

      ``,
      `<strong>11. International Transfers of Personal Information</strong>`,
      `Hautomate operates in the EMEA region and may engage customers, suppliers, service providers and business partners located in different countries.`,

      `As a result, personal information may be transferred to or accessed from countries outside the United Kingdom or European Economic Area.`,

      `Where an international transfer is subject to applicable data protection legislation, we will ensure that an appropriate transfer mechanism and safeguards are in place.`,

      `These may include:`,
      `- An applicable UK or EU adequacy decision.`,
      `- The UK International Data Transfer Agreement.`,
      `- The UK Addendum to the EU Standard Contractual Clauses.`,
      `- EU Standard Contractual Clauses.`,
      `- Other legally recognised transfer mechanisms or applicable statutory derogations.`,

      `Where required, we will undertake appropriate transfer risk assessments or assessments of the relevant legal environment and implement supplementary safeguards.`,

      `Individuals may contact us to request further information about the safeguards applicable to relevant international transfers, subject to lawful restrictions.`,

      ``,
      `<strong>12. Data Retention</strong>`,
      `We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, meet legal obligations, resolve disputes and enforce our agreements.`,

      `Retention periods depend on the nature of the information, the purpose of processing and the relevant legal or regulatory requirements.`,

      `Our retention approach includes the following indicative categories:`,

      `**Website enquiries:** Retained for as long as necessary to respond to and manage the enquiry and any resulting business relationship, subject to applicable limitation and record-keeping requirements.`,

      `**Customer and contractual records:** Retained for the duration of the commercial relationship and thereafter for applicable contractual, legal, accounting and dispute-resolution requirements.`,

      `**Supplier and procurement records:** Retained for the duration of the relevant relationship and any additional period required for legal, financial or contractual purposes.`,

      `**Recruitment records:** Retained for a proportionate period following the conclusion of the recruitment process, unless a longer period is legally justified or separately agreed.`,

      `**Marketing preferences:** Retained for as long as necessary to administer your preferences, maintain suppression records and demonstrate compliance with applicable marketing requirements.`,

      `**Website security and technical logs:** Retained for a period proportionate to operational security, incident investigation and technical monitoring requirements.`,

      `**Cookie and consent records:** Retained in accordance with the applicable consent-management and regulatory requirements.`,

      `Where information is no longer required, we will take reasonable steps to securely delete, anonymise or otherwise dispose of it.`,

      `We will establish and maintain an internal retention schedule appropriate to our business activities.`,

      ``,
      `<strong>13. Data Security</strong>`,
      `Hautomate takes technical and organisational measures to protect personal information against unauthorised access, accidental loss, destruction, alteration, disclosure or other unlawful processing.`,

      `Depending on the nature of the information and the risks involved, these measures may include:`,
      `- Access controls and user authentication.`,
      `- Role-based access restrictions.`,
      `- Secure hosting and storage arrangements.`,
      `- Encryption where appropriate.`,
      `- Network and system security controls.`,
      `- Security monitoring and incident management.`,
      `- Appropriate confidentiality arrangements.`,
      `- Staff awareness and information handling procedures.`,
      `- Supplier and service provider assessments.`,
      `- Secure deletion and disposal procedures.`,

      `We periodically review our security arrangements and seek to improve them as our business, systems and operational requirements evolve.`,

      `However, no electronic transmission or storage system can be guaranteed to be completely secure.`,

      `If a personal data breach occurs, we will assess and respond to it in accordance with applicable legal requirements, including any applicable notification obligations to supervisory authorities and affected individuals.`,

      ``,
      `<strong>14. Your Data Protection Rights</strong>`,
      `Depending on your location and the applicable legislation, you may have the following rights in relation to your personal information.`,

      `<strong>14.1 Right of Access</strong>`,
      `You may request confirmation of whether we process your personal information and obtain a copy of the relevant information, together with other required details.`,

      `<strong>14.2 Right to Rectification</strong>`,
      `You may request that inaccurate or incomplete personal information be corrected or updated.`,

      `<strong>14.3 Right to Erasure</strong>`,
      `You may request deletion of your personal information where the applicable legal conditions for erasure are satisfied.`,

      `This right is not absolute and may be subject to legal or regulatory retention requirements.`,

      `<strong>14.4 Right to Restrict Processing</strong>`,
      `You may request that we restrict the processing of your personal information in certain circumstances recognised by law.`,

      `<strong>14.5 Right to Data Portability</strong>`,
      `Where applicable, you may request that personal information you have provided to us be supplied in a structured, commonly used and machine-readable format or transmitted to another controller.`,

      `This right applies only in the circumstances prescribed by applicable law.`,

      `<strong>14.6 Right to Object</strong>`,
      `You may object to certain processing activities, particularly where we rely on legitimate interests as our lawful basis.`,

      `You have an absolute right to object to the processing of your personal information for direct marketing purposes.`,

      `Where you object to direct marketing, we will stop processing your information for that purpose.`,

      `<strong>14.7 Right to Withdraw Consent</strong>`,
      `Where we rely on consent, you may withdraw it at any time.`,

      `Withdrawal does not affect processing lawfully undertaken before the withdrawal.`,

      `<strong>14.8 Rights Relating to Automated Decision-Making</strong>`,
      `Where applicable, you may have rights relating to decisions made solely through automated processing, including profiling, where those decisions produce legal or similarly significant effects.`,

      `We will provide the information and safeguards required by applicable legislation.`,

      `<strong>14.9 Right to Lodge a Complaint</strong>`,
      `You have the right to raise a complaint with the relevant data protection supervisory authority if you believe that your personal information has been processed unlawfully or that your data protection rights have been infringed.`,

      `Where you are located in the United Kingdom, you may contact:`,
      `**Information Commissioner's Office (ICO)**`,
      `Website: https://ico.org.uk/`,
      `Telephone: 0303 123 1113`,

      `Where you are located in the European Union, you may contact the relevant national data protection supervisory authority in the applicable Member State.`,

      `We encourage you to contact Hautomate first where you have concerns, so that we have an opportunity to address them. However, this does not affect your right to complain directly to a supervisory authority.`,

      ``,
      `<strong>15. How to Exercise Your Rights</strong>`,
      `To exercise your data protection rights or make a privacy-related request, please contact:`,

      `**Privacy Contact:** hautomateprouk@gmail.com`,
      `**Organisation:** Hautomate Pro Limited`,
      `**Subject:** Data Protection Request`,

      `Please provide sufficient information to enable us to identify the relevant records and understand your request.`,

      `We may request additional information where necessary to verify your identity and protect personal information against unauthorised disclosure.`,

      `We will respond within the applicable statutory timeframe.`,

      `Under UK GDPR and EU GDPR, the general response period is one month, subject to applicable rules allowing extensions in certain circumstances.`,

      `We will not ordinarily charge a fee for handling a valid data subject request. However, applicable legislation permits charges or refusal in certain exceptional circumstances, such as manifestly unfounded or excessive requests.`,

      ``,
      `<strong>16. Direct Marketing and Communications</strong>`,
      `Hautomate may communicate with business contacts, customers and prospective customers about relevant services, capabilities, corporate developments and business opportunities.`,

      `All direct marketing activities will be undertaken in accordance with applicable data protection and electronic communications legislation.`,

      `Where consent is required, we will obtain it before sending marketing communications.`,

      `Where another lawful marketing route is available, we will ensure that the applicable statutory requirements are satisfied.`,

      `You may unsubscribe from marketing emails at any time using the relevant unsubscribe link or by contacting us.`,

      `We may retain limited information on a suppression list to ensure that individuals who have opted out are not inadvertently contacted again for marketing purposes.`,

      `Opting out of marketing communications will not prevent us from sending essential service, contractual, security or administrative communications where necessary and lawful.`,

      ``,
      `<strong>17. Cookies and Similar Technologies</strong>`,
      `Our website may use cookies and similar technologies to support functionality, security, performance, analytics and other permitted purposes.`,

      `Where applicable, we will obtain consent before activating non-essential cookies or similar technologies.`,

      `You can review and manage your cookie preferences through the cookie management facility available on our website.`,

      `For detailed information about the cookies and tracking technologies we use, their purposes and how to manage your preferences, please consult our separate Cookie Policy.`,

      ``,
      `<strong>18. Third-Party Websites and External Platforms</strong>`,
      `Our website may contain links to third-party websites, platforms, publications or services.`,

      `These external resources may operate independently of Hautomate and may have their own privacy policies, data collection practices and security arrangements.`,

      `We do not control the privacy practices of independent third-party websites.`,

      `We encourage you to review the relevant privacy documentation before providing personal information to any external platform.`,

      ``,
      `<strong>19. Children's Privacy</strong>`,
      `Our website and services are intended primarily for professional, corporate and business audiences.`,

      `We do not knowingly target children or intentionally collect children's personal information through our ordinary Website facilities.`,

      `Where we become aware that personal information relating to a child has been collected in circumstances requiring consent or additional safeguards, we will take appropriate steps in accordance with applicable law.`,

      ``,
      `<strong>20. Automated Decision-Making and Profiling</strong>`,
      `Hautomate does not intend to make decisions producing legal or similarly significant effects on individuals solely through automated processing or profiling as part of its ordinary Website enquiry activities.`,

      `Where our business activities change and such processing is introduced, we will provide the required information and implement the appropriate safeguards before commencing the relevant processing.`,

      `Any automated tools used for operational assistance will remain subject to applicable data protection requirements.`,

      ``,
      `<strong>21. Confidential and Commercially Sensitive Information</strong>`,
      `We recognise that individuals and organisations may communicate commercially sensitive or confidential information to us in the course of business discussions.`,

      `We will handle such information in accordance with applicable contractual obligations, confidentiality arrangements and legal requirements.`,

      `However, general Website enquiry facilities should not be treated as secure channels for transmitting highly confidential project documentation, security-sensitive infrastructure information or other restricted material.`,

      `Where necessary, we will establish appropriate confidentiality agreements and secure information exchange arrangements.`,

      ``,
      `<strong>22. Personal Data Breaches and Incident Management</strong>`,
      `Where Hautomate becomes aware of a suspected or actual personal data breach, we will assess the nature and extent of the incident and take appropriate containment, investigation and remediation measures.`,

      `Where legally required, we will notify the relevant supervisory authority within the applicable statutory timeframe and communicate with affected individuals where the breach is likely to result in a high risk to their rights and freedoms.`,

      `We will also maintain appropriate internal records of personal data breaches in accordance with applicable legislation.`,

      ``,
      `<strong>23. Changes to This Privacy Policy</strong>`,
      `We may periodically revise this Privacy Policy to reflect changes in:`,
      `- Applicable legislation and regulatory guidance.`,
      `- Our business activities and operational requirements.`,
      `- The personal information we collect and process.`,
      `- Website features and technology.`,
      `- Third-party service providers and data sharing arrangements.`,
      `- International data transfer arrangements.`,

      `The latest version will be published on our website with its corresponding effective and revision dates.`,

      `Where a change materially affects how we process personal information, we will take appropriate steps to notify affected individuals and obtain fresh consent where legally required.`,

      `We will not introduce materially different or incompatible processing purposes without first addressing the applicable transparency and legal requirements.`,

      ``,
      `<strong>24. Contact and Complaints</strong>`,
      `For questions, concerns, complaints or requests relating to this Privacy Policy or our handling of personal information, please contact:`,

      `**Hautomate Pro Limited**`,
      `Privacy Contact: hautomateprouk@gmail.com`,
      `Registered Office: Office 11366, 182-184 High Street North, London, East Ham, England, E6 2JA.`,
      `Company Registration Number: 15414164`,
      `Website: To be updated`,

      `Please use the subject line "Privacy and Data Protection Enquiry".`,

      `We will consider privacy-related enquiries carefully and respond in accordance with applicable legal requirements.`,

      `**End of Privacy Policy**`,
    ],
  },
  '/cookies': {
    title: 'Cookie Policy',
    body: [
      `<strong>Hautomate Pro Limited ("Hautomate", "we", "us" or "our") is committed to respecting the privacy of individuals who access and use our website.</strong>`,
      ``,
      `<strong>This Cookie Policy explains how and why we use cookies and similar technologies when you visit our website, the types of information these technologies may collect, and how you can manage your preferences.</strong>`,
      ``,
      `This Policy should be read alongside our Privacy Policy and Website Terms of Use.`,
      `We aim to comply with applicable cookie and electronic communications requirements, including the UK Privacy and Electronic Communications Regulations 2003 (PECR), the UK GDPR, the Data Protection Act 2018, as amended, and the EU ePrivacy framework and EU GDPR where applicable.`,
      ``,
      `<strong>2. What Are Cookies?</strong>`,
      `Cookies are small text files that websites may place on your computer, mobile phone, tablet or other internet-enabled device when you visit a website.`,
      `They enable websites to recognise devices, remember preferences, support website functionality, improve performance and, where permitted, analyse browsing behaviour.`,
      `Cookies may be:`,
      `**First-party cookies:** Cookies placed directly by the website you are visiting.`,
      `**Third-party cookies:** Cookies placed by external service providers whose technologies or services are integrated into the website.`,
      `**Session cookies:** Temporary cookies that generally expire when you close your browser.`,
      `**Persistent cookies:** Cookies that remain on your device for a specified period or until deleted.`,
      ``,
      `<strong>3. Similar Tracking Technologies</strong>`,
      `In addition to conventional cookies, we may use other technologies that perform similar functions, including:`,
      `- Local storage and session storage.`,
      `- Tracking pixels and web beacons.`,
      `- Software development kits (SDKs).`,
      `- Device identifiers.`,
      `- Tags and scripts.`,
      `- Other technologies that store information on or access information from your device.`,
      `Where these technologies are subject to cookie storage and access requirements, we will apply the relevant consent and transparency obligations.`,
      ``,
      `<strong>4. Categories of Cookies We May Use</strong>`,
      `Depending on the Website's functionality and the technologies deployed, cookies may fall into the following categories.`,
      ``,
      `<strong>4.1 Strictly Necessary Cookies</strong>`,
      `These cookies are essential for the secure and proper operation of the Website or for providing a service expressly requested by the visitor.`,
      `They may support:`,
      `- Website security and protection against malicious activity.`,
      `- Network management and load balancing.`,
      `- Session management.`,
      `- Essential website functionality.`,
      `- Storage of cookie consent preferences.`,
      `Where a cookie or similar technology meets the applicable legal exemption for strictly necessary technologies, consent may not be required.`,
      `We will not classify a technology as strictly necessary merely because it is useful, convenient or beneficial to our business.`,
      ``,
      `<strong>4.2 Functional or Preference Cookies</strong>`,
      `These technologies may remember your preferences and improve your experience when returning to the Website.`,
      `Depending on implementation, they may support:`,
      `- Language preferences.`,
      `- Regional or display settings.`,
      `- User interface preferences.`,
      `- Other optional personalisation features.`,
      `Where required by applicable law, we will obtain your consent before activating these technologies.`,

      ``,
      `<strong>4.3 Analytics and Performance Cookies</strong>`,
      `These technologies help us understand how visitors interact with the Website and evaluate its performance.`,
      `Where implemented and subject to consent requirements, they may help us understand:`,
      `- Website traffic and visitor volumes.`,
      `- Pages viewed and navigation patterns.`,
      `- Time spent on particular pages.`,
      `- Technical errors and performance issues.`,
      `- General engagement with Website content.`,
      `We may use this information to improve the Website, its accessibility, usability and overall performance.`,
      `Analytics technologies will not be activated before the required consent has been obtained.`,
      ``,
      `<strong>4.4 Marketing and Advertising Cookies</strong>`,
      `If implemented, these technologies may be used to measure marketing effectiveness, understand interactions with promotional content or deliver relevant communications and advertising.`,
      `They may be operated by Hautomate or authorised third-party service providers.`,
      `Such technologies will only be activated where the appropriate legal requirements, including prior consent where required, have been satisfied.`,
      `Hautomate does not assume that advertising or behavioural tracking technologies are necessary for the operation of the Website.`,
      ``,
      `<strong>5. Third-Party Cookies and Service Providers</strong>`,
      `Certain Website features may rely on third-party services, platforms or embedded technologies.`,
      `Depending on the Website's configuration, these may include hosting infrastructure, security services, analytics providers, video platforms, mapping services, communication tools or other external service providers.`,
      `Where third-party technologies place or access information on your device, we will identify them in our cookie inventory and provide appropriate information about their purposes.`,
      `Third-party providers may process information in accordance with their own privacy documentation and contractual arrangements with Hautomate.`,
      `We will take reasonable steps to assess relevant third-party providers and establish appropriate data protection and security arrangements.`,
      `A third-party provider's presence on the website does not automatically authorise it to set non-essential cookies or process personal data without an appropriate legal basis.`,

      ``,
      `<strong>6. Cookie Consent and Your Choices</strong>`,
      `When you first visit our website, you may be presented with a cookie consent mechanism that enables you to manage your preferences.`,
      `Where required by applicable law, we will obtain your consent before placing or accessing non-essential cookies and similar technologies.`,
      `Our cookie consent mechanism is intended to provide the following options:`,
      `**Accept All:** Allows all cookie categories presented for consent to be activated.`,
      `**Reject All:** Rejects all non-essential cookie categories.`,
      `**Manage Preferences:** Allows you to review and select individual categories of optional cookies.`,
      `Strictly necessary technologies may remain active where they satisfy the applicable legal exemption.`,
      `Your decision to reject optional cookies will not prevent you from accessing the essential functionality of the Website.`,
      `We will not use pre-ticked consent boxes, implied consent or continued browsing as a substitute for valid consent where consent is required.`,
      ``,
      `<strong>7. Withdrawing or Changing Your Consent</strong>`,
      `You may change or withdraw your cookie preferences at any time.`,
      `To do so, use the "Cookie Settings" or equivalent preference-management link available on our Website.`,
      `Where available, you may also manage or delete cookies through your browser settings.`,
      `Please note that deleting cookies through your browser may remove stored preferences, meaning that the consent mechanism may be displayed again on your next visit.`,
      `Withdrawal of consent will not affect the lawfulness of processing undertaken before the withdrawal.`,
      `We will take reasonable steps to ensure that withdrawal is as straightforward as providing consent.`,
      ``,
      `<strong>8. Cookie Retention Periods</strong>`,
      `Cookies may remain on your device for different periods depending on their purpose and configuration.`,
      `Session cookies generally expire when your browsing session ends, while persistent cookies remain until their specified expiry date or until they are deleted.`,
      `We will document the applicable retention period for each cookie or similar technology in our cookie inventory.`,
      `Retention periods will be proportionate to the purpose for which the relevant technology is used and will be reviewed periodically.`,
      ``,
      `<strong>9. Personal Data and Cookies</strong>`,
      `Some cookies and similar technologies may collect or generate information that constitutes personal data.`,
      `Depending on the technologies used, this information may include:`,
      `- Online identifiers.`,
      `- IP addresses.`,
      `- Device and browser information.`,
      `- Website interaction data.`,
      `- Approximate geographical information.`,
      `- Session and navigation information.`,
      `- Preference and consent records.`,
      `Where personal data is processed, Hautomate will ensure that an appropriate lawful basis is established under applicable data protection legislation.`,
      `The relevant lawful basis will depend on the nature and purpose of the processing.`,
      `Where consent is required for storing or accessing information on your device, we will obtain that consent independently of any other lawful basis that may apply to subsequent personal data processing.`,
      `Further information about the purposes of processing, data sharing, international transfers, retention and individual rights is provided in our Privacy Policy.`,
      ``,
      `<strong>10. International Data Transfers</strong>`,
      `Some third-party technology providers may process information outside the United Kingdom or European Economic Area.`,
      `Where personal data is transferred internationally, Hautomate will implement appropriate safeguards and comply with applicable international data transfer requirements.`,
      `Depending on the circumstances, these safeguards may include:`,
      `- An adequacy decision or applicable adequacy regulation.`,
      `- The UK International Data Transfer Agreement.`,
      `- The UK Addendum to the EU Standard Contractual Clauses.`,
      `- EU Standard Contractual Clauses.`,
      `- Other legally recognised transfer mechanisms.`,
      `Where required, additional safeguards and transfer risk assessments will be undertaken.`,

      ``,
      `<strong>11. Security</strong>`,
      `We take reasonable technical and organisational measures to protect information collected through our website.`,
      `These measures may include appropriate access controls, security configurations, provider assessments and monitoring arrangements.`,
      `However, internet-based technologies cannot be guaranteed to be completely secure.`,
      `We encourage visitors to maintain appropriate security settings on their devices and browsers.`,
      ``,
      `<strong>12. Managing Cookies Through Your Browser</strong>`,
      `Most internet browsers allow users to view, restrict, block or delete cookies.`,
      `You may consult your browser's help documentation for instructions on managing cookie preferences.`,
      `Please be aware that blocking certain cookies may affect some website features or functionality.`,
      `Browser controls do not replace the Website's obligation to obtain consent where required by law.`,
      ``,
      `<strong>13. Children's Privacy</strong>`,
      `Our website is intended primarily for business, professional and corporate audiences.`,
      `We do not knowingly design the website to target children or collect children's personal information through cookie-based profiling or behavioural advertising.`,
      `Where we become aware that personal information relating to a child has been collected unlawfully, we will take appropriate steps in accordance with applicable legislation.`,
      ``,
      `<strong>14. Changes to This Cookie Policy</strong>`,
      `We may update this Policy to reflect changes in:`,
      `- Applicable legislation and regulatory guidance.`,
      `- Website functionality and technical configuration.`,
      `- Cookies and tracking technologies deployed.`,
      `- Third-party service providers.`,
      `- Our business operations and data processing activities.`,
      `The latest version will be published on our website with its corresponding revision date.`,
      `Where changes materially affect the way consent is obtained or information is processed, we will take appropriate steps to provide notice and obtain fresh consent where legally required.`,
      ``,
      `<strong>15. Contact Information</strong>`,
      `If you have questions, concerns or requests relating to this Cookie Policy or our use of cookies and similar technologies, please contact:`,
      `**Hautomate Pro Limited**`,
      `Email: hautomateprouk@gmail.com`,
      `Registered Office: Office 11366, 182-184 High Street North, London, East Ham, England, E6 2JA`,
      `Website: To be updated`,
      `For privacy-related enquiries, please use the subject line "Cookie and Privacy Enquiry".`,
      `**End of Cookie Policy**`,
    ],
  },
  '/terms': {
    title: 'Website Terms of Use',
    body: [
      `<strong># WEBSITE TERMS OF USE</strong>`,
      ``,
      `<strong>Hautomate Pro Limited</strong>`,
      ``,
      `<strong>Effective Date:</strong> 23rd November 2026`,
      `<strong>Last Updated:</strong> 23rd November 2026`,
      ``,
      `<strong>## 1. Introduction and Acceptance</strong>`,
      `Welcome to the website of Hautomate Pro Limited ("Hautomate", "we", "us" or "our").`,
      `These Website Terms of Use ("Terms") govern your access to and use of our website, including its content, information, resources, features, enquiry facilities and any other materials made available through it (collectively, the "Website").`,
      `By accessing or using this Website, you acknowledge that you have read and understood these Terms and agree to comply with them, subject to any mandatory rights or protections available to you under applicable law.`,
      `If you do not agree with these Terms, you should discontinue using the Website.`,
      `These Terms apply to visitors, prospective customers, existing customers, suppliers, contractors, business partners and other persons accessing the Website.`,
      ``,
      `<strong>## 2. Company Information</strong>`,
      `The Website is owned and operated by:`,
      `**Registered Company Name:** Hautomate Pro Limited`,
      `**Company Registration Number:** 15414164`,
      `**Place of Registration:** [England and Wales / Scotland / Northern Ireland, as applicable]`,
      `**Registered Office:** Office 11366, 182-184 High Street North, London, East Ham, England, E6 2JA`,
      `**Business Address:** Same as registered office`,
      `**Email:** hautomateprouk@gmail.com`,
      `**Website:** To be updated`,
      `Hautomate Pro Limited is a company incorporated in the United Kingdom and operates in the engineering, industrial automation, electrical infrastructure, control systems and technical project delivery sectors.`,
      ``,
      `<strong>## 3. Scope and Nature of Website Content</strong>`,
      `The Website provides general information about Hautomate's business, capabilities, areas of expertise, services, projects, professional activities and other relevant corporate information.`,
      `Unless expressly agreed otherwise in a separate written contract, all information published on the Website is provided for general informational and business development purposes only.`,
      `Nothing on the Website shall, by itself:`,
      `a. Constitute a binding offer to provide services or enter into a commercial relationship.`,
      `b. Establish a contractual, agency, employment, partnership, joint venture or fiduciary relationship.`,
      `c. Constitute a formal technical proposal, engineering specification, design approval or project instruction.`,
      `d. Guarantee the availability, suitability, performance, delivery, cost or commercial outcome of any service or solution.`,
      `e. Replace project-specific technical assessments, engineering calculations, surveys, risk assessments or professional advice.`,
      `Any engagement for professional services shall be governed by a separate written agreement, proposal, statement of work, purchase order or other contractual document accepted by the relevant parties.`,
      ``,
      `<strong>## 4. Permitted Use of the Website</strong>`,
      `You may access and use the Website for lawful purposes, including:`,
      `a. Obtaining information about Hautomate and its business activities.`,
      `b. Reviewing our capabilities, services and professional experience.`,
      `c. Making legitimate business, project or partnership enquiries.`,
      `d. Contacting us regarding potential projects, procurement opportunities or professional collaborations.`,
      `e. Accessing publicly available corporate information and resources.`,
      `You agree to use the Website responsibly and in compliance with all applicable laws and regulations.`,
      ``,
      `<strong>## 5. Prohibited Activities</strong>`,
      `You must not, directly or indirectly:`,
      `a. Use the Website for any unlawful, fraudulent, deceptive or malicious purpose.`,
      `b. Attempt to gain unauthorised access to the Website, its servers, databases, systems or associated infrastructure.`,
      `c. Introduce viruses, malware, malicious code or other harmful technological components.`,
      `d. Interfere with, disrupt, damage or compromise the security, availability or functionality of the Website.`,
      `e. Scrape, harvest, extract or systematically collect information from the Website without our prior written permission, except where permitted by applicable law.`,
      `f. Use automated systems, bots, scripts or similar technologies to access or interact with the Website in a manner that imposes unreasonable loads or circumvents security controls.`,
      `g. Reproduce, modify, distribute, commercially exploit or republish Website content without appropriate authorisation.`,
      `h. Misrepresent your identity, affiliation or authority when communicating with Hautomate.`,
      `i. Use our name, trademarks, branding or intellectual property in a misleading or unauthorised manner.`,
      `j. Attempt to circumvent access restrictions or security mechanisms.`,
      `We reserve the right to restrict, suspend or block access where we reasonably believe that these Terms have been breached or that such action is necessary to protect the Website, our business or other users.`,

      ``,
      `<strong>## 6. Intellectual Property Rights</strong>`,
      `Unless otherwise stated, all intellectual property rights in the Website and its contents belong to Hautomate Pro Limited or the relevant third-party rights holders.`,
      `This includes, without limitation:`,
      `- Company names, logos, trademarks and branding.`,
      `- Website design, layouts, graphics and visual materials.`,
      `- Text, descriptions, publications and corporate content.`,
      `- Technical materials, diagrams, illustrations and presentations.`,
      `- Proprietary methodologies, documentation and original materials.`,
      `Nothing in these Terms transfers ownership of any intellectual property to you.`,
      `You are granted a limited, non-exclusive, non-transferable and revocable licence to access and use the Website for personal or legitimate business information purposes.`,
      `You must not reproduce, distribute, modify, publish, commercially exploit, reverse engineer or otherwise use our intellectual property without our prior written consent, except where permitted by law.`,
      `Any request to use Hautomate's intellectual property should be directed to our official business contact address.`,
      `Third-party trademarks, logos and materials remain the property of their respective owners.`,
      ``,
      `<strong>## 7. Accuracy and Availability of Information</strong>`,
      `We make reasonable efforts to ensure that information published on the Website is accurate, current and presented in good faith.`,
      `However, we do not warrant or guarantee that:`,
      `a. All information will always be complete, accurate or up to date.`,
      `b. The Website will be continuously available, uninterrupted or error-free.`,
      `c. Website content will be suitable for every commercial, technical or operational purpose.`,
      `d. All identified services, capabilities or resources will be available in every geographical market.`,
      `e. Any published project descriptions, case studies, illustrations or performance information will be representative of every future engagement.`,
      `Information may be updated, amended, suspended or withdrawn without prior notice.`,
      `Where information is expressly incorporated into a signed contractual document, the terms of that agreement shall govern the relevant engagement.`,

      ``,
      `<strong>## 8. Technical and Engineering Disclaimer</strong>`,
      `Hautomate operates in technical and engineering-related sectors, including electrical infrastructure, industrial automation, building and energy management systems, control systems, data centre infrastructure and related engineering services.`,
      `Information presented on the Website is not a substitute for project-specific professional engineering advice, design verification, technical validation, commissioning, certification or statutory approvals.`,
      `No person should rely solely on general Website information when making safety-critical, engineering, construction, operational or investment decisions.`,
      `Any technical solution or recommendation must be assessed against the relevant project requirements, operating environment, applicable standards, design documentation and statutory obligations.`,
      `Where Hautomate provides professional engineering or project delivery services, the scope, deliverables, assumptions, exclusions, responsibilities and applicable professional standards shall be established through the relevant contractual documentation.`,
      `Nothing in this section excludes or restricts any professional duty or liability that cannot lawfully be excluded.`,
      ``,
      `<strong>## 9. Third-Party Websites and External Resources</strong>`,
      `The Website may contain links to external websites, platforms, publications, service providers or other third-party resources.`,
      `These links are provided for convenience and informational purposes.`,
      `Hautomate does not own, operate or control all external websites and is not responsible for their content, availability, security, privacy practices, accuracy or commercial activities.`,
      `The inclusion of a third-party link does not constitute an endorsement, recommendation, partnership or guarantee of the relevant third party.`,
      `Your use of external websites is subject to their respective terms and privacy policies.`,
      ``,
      `<strong>## 10. Enquiries and User Submissions</strong>`,
      `Where the Website provides contact forms, enquiry facilities or other communication channels, you agree that information submitted will be accurate, lawful and provided in good faith.`,
      `You must not submit:`,
      `a. False, misleading or fraudulent information.`,
      `b. Confidential information belonging to another person without proper authority.`,
      `c. Information that infringes another person's intellectual property or other legal rights.`,
      `d. Malicious code or harmful attachments.`,
      `e. Unsolicited promotional material or communications prohibited by applicable law.`,
      `Submitting an enquiry does not automatically create a contractual relationship or oblige Hautomate to provide services, respond within a particular timeframe, accept an engagement or maintain confidentiality.`,
      `Any confidentiality obligations shall arise from an applicable written confidentiality agreement, non-disclosure agreement or other enforceable arrangement, and not merely from submitting information through the Website.`,
      `We may retain and process submitted information in accordance with our Privacy Policy and applicable data protection legislation.`,
      ``,
      `<strong>## 11. Confidentiality and Proprietary Information</strong>`,
      `You must not assume that information displayed publicly on the Website is confidential or that information submitted through the Website will automatically be treated as confidential.`,
      `Where you intend to disclose commercially sensitive, proprietary, security-sensitive or confidential project information, you should first contact Hautomate to establish an appropriate confidentiality arrangement.`,
      `Nothing in this section authorises either party to disregard confidentiality obligations imposed by law or an existing contractual agreement.`,

      ``,
      `<strong>## 12. Limitation of Liability</strong>`,
      `To the fullest extent permitted by applicable law, Hautomate shall not be liable for indirect, incidental, special, exemplary or consequential losses arising from or connected with the use of, inability to use, or reliance upon the Website.`,
      `This includes, where legally permissible:`,
      `a. Loss of profits, revenue or anticipated savings.`,
      `b. Loss of business opportunities or contracts.`,
      `c. Loss of goodwill or reputation.`,
      `d. Loss or corruption of data.`,
      `e. Business interruption.`,
      `f. Losses arising from third-party websites, platforms or services.`,
      `Nothing in these Terms shall exclude or restrict liability for:`,
      `a. Death or personal injury resulting from negligence.`,
      `b. Fraud or fraudulent misrepresentation.`,
      `c. Any liability that cannot lawfully be excluded or restricted.`,
      `d. Any other liability which applicable law prohibits us from excluding.`,
      `Where the Website is used in connection with a business-to-business relationship, any additional limitations of liability shall be subject to the relevant commercial agreement and applicable law.`,
      ``,
      `<strong>## 13. Indemnification</strong>`,
      `To the extent permitted by applicable law, you agree to indemnify Hautomate against reasonable losses, liabilities, damages, costs and expenses arising directly from your unlawful use of the Website, material breach of these Terms, infringement of third-party rights or deliberate misuse of the Website.`,
      `This provision does not apply to the extent that the relevant loss results from Hautomate's own negligence, breach of duty, unlawful conduct or other circumstances for which liability cannot lawfully be transferred to you.`,
      ``,
      `<strong>## 14. Privacy and Data Protection</strong>`,
      `Hautomate respects the privacy and data protection rights of Website visitors, prospective customers, business contacts and other individuals whose personal information we process.`,
      `Any personal data collected through the Website shall be processed in accordance with applicable data protection legislation, including the UK GDPR, Data Protection Act 2018, as amended, and the EU GDPR where applicable.`,
      `Our processing activities and the rights available to individuals are explained in our separate Privacy Policy.`,
      `Our use of cookies and similar technologies is explained in our Cookie Policy.`,
      `These Terms should be read together with those policies. Acceptance of these Terms does not constitute consent to non-essential cookies, marketing communications or any other processing requiring separate consent.`,
      ``,
      `<strong>## 15. Website Security and Cybersecurity</strong>`,
      `We implement reasonable technical and organisational measures intended to protect the Website and its associated infrastructure.`,
      `However, no website, internet transmission or electronic storage system can be guaranteed to be completely secure.`,
      `You are responsible for maintaining appropriate security on your own devices and networks when accessing the Website.`,
      `You must notify Hautomate promptly if you become aware of any suspected security vulnerability, unauthorised access or malicious activity affecting the Website.`,
      `Nothing in this section limits Hautomate's statutory obligations concerning personal data breaches or information security.`,
      ``,
      `<strong>## 16. Suspension, Modification and Termination</strong>`,
      `We reserve the right to modify, suspend, restrict or discontinue any part of the Website at any time, including for maintenance, security, operational, commercial or legal reasons.`,
      `We may restrict access where reasonably necessary to protect the Website, our business, other users or third parties.`,
      `We shall not be liable for temporary interruptions or modifications to the Website except where liability cannot lawfully be excluded.`,

      ``,
      `<strong>## 17. Changes to These Terms</strong>`,
      `We may revise these Terms periodically to reflect changes in legislation, regulatory requirements, business operations, Website functionality or other relevant circumstances.`,
      `The revised version will be published on the Website with an updated effective or revision date.`,
      `Your continued use of the Website after publication of revised Terms will constitute acceptance only to the extent that such acceptance is legally effective. Where affirmative notice or agreement is required, we will obtain it through an appropriate process.`,
      ``,
      `<strong>## 18. Governing Law and Jurisdiction</strong>`,
      `These Terms and any non-contractual obligations arising from or in connection with them shall be governed by the laws of England and Wales, unless mandatory applicable law requires otherwise.`,
      `Subject to mandatory statutory rights and applicable jurisdictional rules, the courts of England and Wales shall have jurisdiction over disputes arising from or connected with these Terms.`,
      `Nothing in this section deprives a consumer of mandatory rights to bring proceedings or rely on protections available under applicable consumer protection legislation.`,
      ``,
      `<strong>## 19. Severability</strong>`,
      `If any provision of these Terms is found to be unlawful, invalid or unenforceable, that provision shall be severed or modified to the minimum extent necessary.`,
      `The remaining provisions shall continue in full force and effect.`,
      ``,
      `<strong>## 20. No Waiver</strong>`,
      `Failure or delay by Hautomate in exercising any right or remedy under these Terms shall not constitute a waiver of that right or remedy.`,
      `Any waiver must be expressly communicated in writing and shall apply only to the specific circumstances for which it is given.`,
      ``,
      `<strong>## 21. Entire Understanding</strong>`,
      `These Terms govern access to and use of the Website.`,
      `They do not replace or override any separate written contract, service agreement, statement of work, purchase order, non-disclosure agreement or other legally binding commercial agreement entered into between Hautomate and another party.`,
      `Where a separate agreement governs a particular engagement, its provisions shall take precedence over these Website Terms to the extent of any inconsistency relating to that engagement.`,
      ``,
      `<strong>## 22. Contact Information</strong>`,
      `For questions, complaints, legal notices or other communications concerning these Terms, please contact:`,
      `**Hautomate Pro Limited**`,
      `Email: hautomateprouk@gmail.com`,
      `Registered Office: Office 11366, 182-184 High Street North, London, East Ham, England, E6 2JA`,
      `Website: To be updated`,
      `**End of Website Terms of Use**`,
    ],
  },
};

export default function Legal() {
  const { pathname } = useLocation();
  const page = pages[pathname];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted md:text-lg">
          {renderLegalBody(page.body)}
        </div>
      </div>
    </section>
  );
}

function renderLegalBody(body: string[]) {
  const blocks: Array<
    | { type: 'paragraph'; text: string; key: number }
    | { type: 'unordered' | 'ordered'; items: string[]; key: number }
  > = [];

  for (let index = 0; index < body.length; index += 1) {
    const text = body[index].trim();
    if (!text) continue;

    const listMatch = text.match(/^(-|[a-z]\.)\s+/i);
    if (!listMatch) {
      blocks.push({ type: 'paragraph', text, key: index });
      continue;
    }

    const type = listMatch[1] === '-' ? 'unordered' : 'ordered';
    const items = [text.replace(/^(-|[a-z]\.)\s+/i, '')];
    while (index + 1 < body.length) {
      const next = body[index + 1].trim();
      const nextMatch = next.match(/^(-|[a-z]\.)\s+/i);
      if (!nextMatch || (nextMatch[1] === '-') !== (type === 'unordered')) break;
      items.push(next.replace(/^(-|[a-z]\.)\s+/i, ''));
      index += 1;
    }
    blocks.push({ type, items, key: index - items.length + 1 });
  }

  return blocks.map((block) => {
    if (block.type !== 'paragraph') {
      const List = block.type === 'unordered' ? 'ul' : 'ol';
      return (
        <List key={block.key} className={`space-y-2 pl-6 ${block.type === 'unordered' ? 'list-disc' : 'list-[lower-alpha]'}`}>
          {block.items.map((item, index) => <li key={index}>{renderInlineFormatting(item)}</li>)}
        </List>
      );
    }

    const heading = block.text.match(/^<strong>([\s\S]*)<\/strong>$/);
    const headingText = heading?.[1].replace(/^#{1,2}\s*/, '');
    if (heading && (/^#{1,2}\s/.test(heading[1]) || /^\d+(?:\.\d+)*\.\s+/.test(headingText ?? '') || headingText === 'WEBSITE TERMS OF USE')) {
      const level = /^\d+\.\d+\./.test(headingText ?? '') ? 'h3' : 'h2';
      const Heading = level;
      return <Heading key={block.key} className="pt-4 font-display text-xl font-bold text-ink">{headingText}</Heading>;
    }

    return <p key={block.key}>{renderInlineFormatting(block.text)}</p>;
  });
}

function renderInlineFormatting(text: string) {
  return text.split(/(<strong>[\s\S]*?<\/strong>|\*\*[\s\S]*?\*\*)/g).map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      return <strong key={index}>{part.slice(8, -9)}</strong>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
