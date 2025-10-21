import { Building, FileText, HardHat, LucideIcon, Mail, Phone, ShieldCheck, Shirt, Star, Truck } from "lucide-react"

export const capabilities = [
    { 
        title: 'Transportation & Logistics', 
        href: '/capabilities/transportation-logistics',
        description: 'Secure and efficient management of freight, supply chain, and fleet operations.',
        icon: 'Truck' as const,
    },
    { 
        title: 'Facilities Support', 
        href: '/capabilities/facilities-support',
        description: 'Comprehensive maintenance for operational readiness and safety of government installations.',
        icon: 'Building' as const,
    },
    { 
        title: 'Laundry & Linen Services', 
        href: '/capabilities/laundry-linen-services',
        description: 'Specialized laundry services that meet the high standards of federal facilities.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Janitorial Services', 
        href: '/capabilities/janitorial-services',
        description: 'Maintaining clean, safe, and healthy environments for federal facilities.',
        icon: 'Building' as const,
    },
    { 
        title: 'Septic Tank and Related Services', 
        href: '/capabilities/septic-tank-services',
        description: 'Professional maintenance and services for septic systems.',
        icon: 'HardHat' as const,
    },
    { 
        title: 'Industrial Laundry Services', 
        href: '/capabilities/industrial-laundry-services',
        description: 'High-volume laundry services for industrial and commercial needs.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Linen Supply', 
        href: '/capabilities/linen-supply',
        description: 'Reliable linen supply and inventory management for various institutions.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Drycleaning and Laundry Services', 
        href: '/capabilities/drycleaning-laundry-services',
        description: 'Professional drycleaning and laundry for non-coin-operated facilities.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Charter Bus Industry', 
        href: '/capabilities/charter-bus-industry',
        description: 'Charter bus services for personnel and group transportation.',
        icon: 'Truck' as const,
    },
    {
        title: 'Specialized Freight',
        href: '/capabilities/specialized-freight',
        description: 'Specialized freight transport for household and office goods.',
        icon: 'Truck' as const,
    },
    {
        title: 'Commercial & Industrial Equipment Leasing',
        href: '/capabilities/equipment-leasing',
        description: 'Rental and leasing of other commercial and industrial machinery and equipment.',
        icon: 'HardHat' as const,
    }
];

export const industries = [
    {
        title: 'Federal Government',
        description: 'Providing mission-critical support services to a wide range of federal agencies and departments.',
        icon: 'Building' as const,
        href: '/industries/federal-government'
    },
    {
        title: 'Department of Defense',
        description: 'Delivering logistics, facility management, and support services to military bases and defense installations.',
        icon: 'ShieldCheck' as const,
        href: '/industries/department-of-defense'
    },
    {
        title: 'Health Care',
        description: 'Offering specialized linen, laundry, and facility services for federal healthcare systems like the VHA.',
        icon: 'Star' as const,
        href: '/industries/health-care'
    },
    {
        title: 'Manufacturing',
        description: 'Providing industrial laundry and equipment leasing to support manufacturing operations.',
        icon: 'Truck' as const,
        href: '/industries/manufacturing'
    },
    {
        title: 'Finance & Banking',
        description: 'Secure janitorial and facility support for financial institutions.',
        icon: 'Building' as const,
        href: '/industries/finance-banking'
    },
    {
        title: 'Automotive',
        description: 'Specialized freight and industrial laundry services for the automotive sector.',
        icon: 'Truck' as const,
        href: '/industries/automotive'
    },
    {
        title: 'Media and Advertising',
        description: 'Equipment leasing and logistics for media production and advertising events.',
        icon: 'HardHat' as const,
        href: '/industries/media-advertising'
    },
    {
        title: 'Commercial Sector',
        description: 'Extending our industrial laundry, equipment leasing, and janitorial expertise to commercial clients.',
        icon: 'Truck' as const,
        href: '/industries/commercial-sector'
    }
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/capabilities',
    children: capabilities
  },
  { 
    name: 'Industries', 
    href: '/industries',
    children: industries
  },
  { name: 'Projects', href: '/past-performance' },
  { name: 'Contact', href: '/contact' },
];

export const trustIndicators = [
    { 
        name: 'GSA Advantage',
        imageUrl: 'https://placehold.co/150x60/f0f0f0/a0a0a0?text=GSA+Advantage',
        alt: 'GSA Advantage Logo'
    },
    { 
        name: 'SAM.gov Registered',
        imageUrl: 'https://placehold.co/150x60/f0f0f0/a0a0a0?text=SAM.gov',
        alt: 'SAM.gov Registered Logo'
    },
    { 
        name: 'ISO 9001 Certified',
        imageUrl: 'https://placehold.co/150x60/f0f0f0/a0a0a0?text=ISO+9001',
        alt: 'ISO 9001 Certified Logo'
    },
    { 
        name: 'CAGE/DUNS Verified',
        imageUrl: 'https://placehold.co/150x60/f0f0f0/a0a0a0?text=CAGE/DUNS',
        alt: 'CAGE/DUNS Verified Logo'
    },
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
