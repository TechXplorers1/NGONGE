import { Building, FileText, HardHat, LucideIcon, Mail, Phone, ShieldCheck, Shirt, Star, Truck } from "lucide-react"

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/capabilities' },
  { name: 'Projects', href: '/past-performance' },
  { name: 'Contact', href: '/contact' },
];

export const trustIndicators = [
    { name: 'GSA Advantage' },
    { name: 'SAM.gov Registered' },
    { name: 'ISO 9001 Certified' },
    { name: 'CAGE/DUNS Verified' },
];

export const capabilities = [
    { 
        title: 'Transportation & Logistics', 
        href: '/capabilities/transportation-logistics',
        description: 'Secure and efficient management of freight, supply chain, and fleet operations.',
        icon: 'Truck' as const,
        details: 'Coordinating the movement of goods via ground, air, and sea, including specialized handling for sensitive, oversized, or hazardous materials.'
    },
    { 
        title: 'Facilities Support', 
        href: '/capabilities/facilities-support',
        description: 'Comprehensive maintenance for operational readiness and safety of government installations.',
        icon: 'Building' as const,
        details: 'Proactive and corrective maintenance for all building systems, including HVAC, electrical, plumbing, and structural components.'
    },
    { 
        title: 'Laundry & Linen Services', 
        href: '/capabilities/laundry-linen-services',
        description: 'Specialized laundry services that meet the high standards of federal facilities.',
        icon: 'Shirt' as const,
        details: 'Hygienically clean processing of medical, military, and institutional textiles in compliance with all regulations.'
    },
    { 
        title: '561720 - Janitorial Services', 
        href: '#',
        description: 'Maintaining clean, safe, and healthy environments for federal facilities.',
        icon: 'Building' as const,
    },
    { 
        title: '562991 - Septic Tank and Related Services', 
        href: '#',
        description: 'Professional maintenance and services for septic systems.',
        icon: 'HardHat' as const,
    },
    { 
        title: '812332 - Industrial Laundry Services', 
        href: '#',
        description: 'High-volume laundry services for industrial and commercial needs.',
        icon: 'Shirt' as const,
    },
    { 
        title: '812331 - Linen Supply', 
        href: '#',
        description: 'Reliable linen supply and inventory management for various institutions.',
        icon: 'Shirt' as const,
    },
    { 
        title: '812320 - Drycleaning and Laundry Services', 
        href: '#',
        description: 'Professional drycleaning and laundry for non-coin-operated facilities.',
        icon: 'Shirt' as const,
    },
    { 
        title: '485510 - Charter Bus Industry', 
        href: '#',
        description: 'Charter bus services for personnel and group transportation.',
        icon: 'Truck' as const,
    },
    {
        title: '484230 - Specialized Freight',
        href: '#',
        description: 'Specialized freight transport for household and office goods.',
        icon: 'Truck' as const,
    },
    {
        title: '532490 - Commercial & Industrial Equipment Leasing',
        href: '#',
        description: 'Rental and leasing of other commercial and industrial machinery and equipment.',
        icon: 'HardHat' as const,
    }
];

export const caseStudies = [
  {
    client: 'Department of Defense',
    category: 'Transportation & Logistics',
    problem: 'Needed to streamline the delivery of sensitive equipment to multiple bases across the country under a tight deadline.',
    solution: 'Deployed a dedicated logistics team with advanced tracking technology to coordinate multi-modal transport and ensure real-time visibility.',
    result: 'Achieved 100% on-time delivery with zero security incidents, resulting in a 15% reduction in transportation costs for the agency.',
    imageId: 'case-study-1',
  },
  {
    client: 'General Services Administration',
    category: 'Facilities Support',
    problem: 'A large federal building required a complete overhaul of its HVAC and electrical systems without disrupting daily operations.',
    solution: 'Implemented a phased approach to renovations, working during off-hours and weekends. Used modular components to speed up installation.',
    result: 'Completed the project 2 months ahead of schedule and 5% under budget, with a 30% increase in energy efficiency.',
    imageId: 'case-study-2',
  },
  {
    client: 'Veterans Health Administration',
    category: 'Laundry & Linen Services',
    problem: 'A major VA hospital was facing inconsistent linen availability and quality, impacting patient care.',
    solution: 'Established an on-site management program with a robust inventory system and quality control checks at every stage.',
    result: 'Improved linen availability to 99.8% and exceeded all hygienic standards, leading to higher patient satisfaction scores.',
    imageId: 'case-study-3',
  },
    {
    client: 'Department of Homeland Security',
    category: 'Transportation & Logistics',
    problem: 'Required urgent and secure transport of disaster relief supplies to a remote area following a natural disaster.',
    solution: 'Leveraged our rapid response network and chartered specialized aircraft to deliver supplies within 12 hours of the request.',
    result: 'Enabled critical aid to reach affected populations 24 hours faster than anticipated, supporting life-saving operations.',
    imageId: 'case-study-4',
  },
];


export const certifications = [
  {
    name: '8(a) Business Development Program',
    icon: Star,
    description: 'Certified by the SBA, this program helps small, disadvantaged businesses compete in the marketplace.',
    downloadUrl: '#',
  },
  {
    name: 'HUBZone Certified',
    icon: Building,
    description: 'The Historically Underutilized Business Zones (HUBZone) program fuels small business growth in historically underutilized business zones.',
    downloadUrl: '#',
  },
  {
    name: 'ISO 9001:2015',
    icon: ShieldCheck,
    description: 'An international standard that specifies requirements for a quality management system (QMS).',
    downloadUrl: '#',
  },
  {
    name: 'OSHA Compliance',
    icon: HardHat,
    description: 'Committed to maintaining the highest standards of workplace safety and health as outlined by OSHA.',
    downloadUrl: '#',
  },
];


export const leadershipTeam = [
  {
    name: 'Frank Ngonge',
    title: 'Founder & CEO',
    bio: 'With over 20 years of experience in federal logistics, Frank leads NGONGE with a focus on mission success and client satisfaction. His strategic vision has been instrumental in the company\'s growth.',
    imageId: 'leader-1',
  },
  {
    name: 'Sanda Vighen',
    title: 'Chief Operating Officer',
    bio: 'Sanda oversees all operational aspects of NGONGE. Her expertise in facility management and process optimization ensures that we deliver efficient and high-quality services to every government partner.',
    imageId: 'leader-2',
  },
  {
    name: 'Godwill Tumban',
    title: 'Chief Financial Officer',
    bio: 'Godwill is a master of supply chain management. He directs our transportation and logistics division, ensuring that every delivery is secure, on-time, and within budget.',
    imageId: 'leader-3',
  },
];

export const companyTimeline = [
    { year: '2015', event: 'NGONGE LLC founded to provide federal and local government services.' },
    { year: '2017', event: 'Awarded first federal contract with the General Services Administration (GSA).' },
    { year: '2019', event: 'Achieved 8(a) and HUBZone certifications from the Small Business Administration (SBA).' },
    { year: '2021', event: 'Expanded service offerings to include comprehensive facilities support and laundry services.' },
    { year: '2023', event: 'Received ISO 9001:2015 certification for quality management.' },
];

export const blogPosts = [
  {
    title: 'The Future of Federal Logistics: Trends to Watch',
    date: '2024-05-15',
    author: 'John Doe',
    excerpt: 'As technology evolves, so does the landscape of federal logistics. Here are the key trends government agencies and contractors need to be aware of...',
    slug: 'future-of-federal-logistics',
    imageId: 'blog-post-1',
  },
  {
    title: 'Navigating Compliance in Government Contracting',
    date: '2024-04-22',
    author: 'Jane Smith',
    excerpt: 'Compliance is the backbone of successful government contracting. This post breaks down the essentials of maintaining good standing...',
    slug: 'navigating-compliance',
    imageId: 'blog-post-2',
  },
  {
    title: 'Why IT Modernization is Critical for Mission Success',
    date: '2024-03-10',
    author: 'Samuel Green',
    excerpt: 'Outdated IT infrastructure can pose significant risks. Learn how strategic IT modernization can enhance security and efficiency for federal agencies...',
    slug: 'it-modernization-critical',
    imageId: 'blog-post-3',
  },
];

export const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "proposals@ngonge.com",
        href: "mailto:proposals@ngonge.com"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567"
    }
];

export const companyCodes = {
    duns: "123456789",
    cage: "98765"
}

export const resources = [
  {
    title: 'Capability Statement',
    description: 'A comprehensive overview of our services, past performance, and core competencies.',
    downloadUrl: '#',
    icon: FileText
  },
  {
    title: 'Logistics Solutions Brochure',
    description: 'Detailed information on our transportation and logistics services.',
    downloadUrl: '#',
    icon: Truck
  },
    {
    title: 'Facilities Support Brochure',
    description: 'Learn more about how we manage and maintain federal facilities for peak performance.',
    downloadUrl: '#',
    icon: Building
  }
];
