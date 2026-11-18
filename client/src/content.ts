// All site copy lives here so it can later move into Postgres/CMS without touching components.

export const company = {
  name: 'Hautomate Pro Limited',
  phone: '+44 7550 487800',
  phoneHref: 'tel:+447550487800',
  email: 'hautomateprouk@gmail.com',
  number: '15414164',
  address: ['Hautomate Pro Limited', 'Office 11366', '182-184 High Street North', 'East Ham, London', 'E6 2JA', 'United Kingdom'],
  hours: 'Monday to Friday, 09:00 to 17:30 (UK time)',
};

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Systems', href: '/#systems' },
  { label: 'Approach', href: '/#approach' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const heroChips = ['MEP', 'HVAC', 'EPMS', 'BMS', 'Commissioning'];

export type ServiceIcon = 'hardhat' | 'users' | 'compass' | 'clipboard' | 'gauge' | 'shield';
export const services: { icon: ServiceIcon; title: string; body: string }[] = [
  { icon: 'hardhat', title: 'Project & programme management', body: 'End-to-end delivery leadership: integrated schedules, cost control, risk registers and interface management across design, procurement and construction.' },
  { icon: 'users', title: "Owner's representative", body: 'An independent voice on your side of the table, holding contractors and vendors to scope, quality and programme commitments.' },
  { icon: 'compass', title: 'Design management & review', body: 'Technical review of MEP, HVAC, EPMS and BMS designs for constructability, resilience, maintainability and compliance with your basis of design.' },
  { icon: 'clipboard', title: 'Commissioning management', body: 'Structured Level 1 to Level 5 commissioning planning, witness testing and integrated systems testing through to handover.' },
  { icon: 'gauge', title: 'Controls & monitoring integration', body: 'Specification, deployment and integration of power monitoring and building management platforms at hyperscale.' },
  { icon: 'shield', title: 'Vendor & package coordination', body: 'Coordination of OEMs, system integrators and trade contractors so every package lands in the right sequence.' },
];

export type SystemIcon = 'wrench' | 'fan' | 'plug' | 'building';
export const systems: { key: string; short: string; full: string; icon: SystemIcon; body: string; points: string[] }[] = [
  {
    key: 'MEP', short: 'MEP', full: 'Mechanical, Electrical & Plumbing', icon: 'wrench',
    body: 'Coordinated delivery of the full building services backbone: medium and low voltage distribution, UPS, standby generation, fire protection and plumbing.',
    points: ['MV/LV switchgear and distribution coordination', 'UPS, battery and standby generator integration', 'Fire detection, suppression and life safety interfaces', 'Clash detection and services coordination in BIM'],
  },
  {
    key: 'HVAC', short: 'HVAC', full: 'Heating, Ventilation & Air Conditioning', icon: 'fan',
    body: 'Cooling strategies that keep high-density white space within tolerance while chasing every point of efficiency.',
    points: ['Chilled water plant, CRAH and air handling packages', 'Free cooling and economiser strategies', 'Liquid and direct-to-chip cooling readiness', 'Thermal performance and load bank testing'],
  },
  {
    key: 'EPMS', short: 'EPMS', full: 'Electrical Power Monitoring System', icon: 'plug',
    body: 'Real-time visibility of every breaker, meter and power path, from utility intake to rack, for operators who need to know before it fails.',
    points: ['Metering architecture and points list definition', 'Power quality and event recording', 'Network design and cyber-secure integration', 'Alarm rationalisation and operator dashboards'],
  },
  {
    // VERIFY: the original BMS screenshot was partly covered. The description's middle and
    // bullets 2 and 4 are reconstructed; confirm against the live site.
    key: 'BMS', short: 'BMS', full: 'Building Management System', icon: 'building',
    body: 'Supervisory control of mechanical plant and environmental conditions, engineered for resilience and clean handover to operations.',
    points: ['Control philosophy and sequence of operations review', 'Redundancy and failover verification', 'Point-to-point and integrated systems testing', 'Operator training and handover documentation'],
  },
];

export const phases = [
  { title: 'Define', body: 'Basis of design, requirements capture, delivery strategy and procurement route.' },
  { title: 'Design', body: 'Design management, technical reviews, value engineering and interface control.' },
  { title: 'Procure', body: 'Vendor qualification, tender evaluation and long-lead equipment tracking.' },
  { title: 'Build', body: 'Site delivery oversight, programme control, quality and HSE assurance.' },
  { title: 'Commission', body: 'L1 to L5 commissioning, integrated systems testing and handover to operations.' },
];

export const aboutPoints = [
  "Independent advice, aligned to the client's interests",
  'Engineering depth in power, cooling and controls',
  'Clear reporting that boards and site teams both trust',
];

export const regions = [
  { name: 'United Kingdom', note: 'Headquarters, London' },
  { name: 'Western Europe', note: 'Netherlands, Germany' },
  { name: 'Southern Europe', note: 'Italy' },
  { name: 'Middle East & Africa', note: 'Available for deployment' },
];

// Drop matching files into client/public/vendors/. Until then the name is shown as text.
export const vendors = [
  { name: 'RoviSys Building Technologies', file: 'rovisys.png' },
  { name: 'Schneider Electric', file: 'schneider.svg' },
  { name: 'Siemens', file: 'siemens.svg' },
  { name: 'DBA Group', file: 'dba.svg' },
  { name: 'Bouygues', file: 'bouygues.svg' },
  { name: 'Deerns', file: 'deerns.png' },
  { name: 'Caterpillar', file: 'cat.svg' },
];

export const pastClient = {
  name: 'Vantage Data Centers',
  location: 'United Kingdom',
  file: 'vantage-data-centers.png',
};

export const linkedinUrl = 'https://www.linkedin.com/company/hautomate-pro-limited/?viewAsMember=true';

export const legalLinks = [
  { label: 'Privacy Notice', to: '/privacy' },
  { label: 'Cookie Policy', to: '/cookies' },
  { label: 'Website Terms', to: '/terms' },
];
