// @/lib/placeholder-images.ts

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  // --- General & Page Headers (from placeholder-images.json) ---
  {
    "id": "hero-banner",
    "description": "Hero banner showing the US Capitol building at dusk",
    "imageUrl": "/images/home_bg.jpg",
    "imageHint": "US Capitol"
  },
  {
    "id": "page-header-about",
    "description": "A diverse team of professionals in a modern office, collaborating on a project.",
    "imageUrl": "/images/page-header-about.jpg",
    "imageHint": "team meeting"
  },
  {
    "id": "page-header-capabilities",
    "description": "A large, active logistics warehouse with forklifts moving pallets and workers managing inventory.",
    "imageUrl": "/images/page-header-capabilities.jpg",
    "imageHint": "warehouse forklift"
  },
  {
    "id": "page-header-industries",
    "description": "A cityscape of a bustling business district with modern skyscrapers, representing various industries.",
    "imageUrl": "/images/page-header-industries.jpg",
    "imageHint": "business district"
  },
  {
    "id": "page-header-performance",
    "description": "A clean, modern dashboard on a computer screen showing upward-trending graphs and data analytics.",
    "imageUrl": "/images/page-header-performance.jpg",
    "imageHint": "data dashboard"
  },
  {
    "id": "page-header-certifications",
    "description": "A close-up of a person signing an official document with a fountain pen.",
    "imageUrl": "/images/About NGO.jpeg",
    "imageHint": "document signing"
  },
  {
    "id": "page-header-resources",
    "description": "A stack of neatly organized informational brochures on a wooden table.",
    "imageUrl": "/images/page-header-resources.jpg",
    "imageHint": "information brochures"
  },
  {
    "id": "page-header-contact",
    "description": "A vintage rotary phone on a desk, symbolizing direct communication.",
    "imageUrl": "/images/Contact.jpeg",
    "imageHint": "contact phone"
  },
  // --- Transportation & Logistics Images (from placeholder-data.ts) ---
  {
    id: "transportation-logistics",
    imageUrl: "/images/Transportation & Logistics.jpg",
    description: "Transportation and logistics services",
    imageHint: "Trucks and logistics operations"
  },
  {
    id: "charter-bus",
    imageUrl: "/images/Charter Bus Industry.jpg",
    description: "Charter bus transportation services",
    imageHint: "Charter bus industry hero image"
  },
  {
    id: "specialized-freight",
    imageUrl: "/images/Freight.jpg",
    description: "Specialized freight transportation",
    imageHint: "Specialized freight truck"
  },
  // --- Facilities & Maintenance Images ---
  {
    id: "facilities-support",
    imageUrl: "/images/Facility_Support.jpeg",
    description: "Facilities support and maintenance",
    imageHint: "Building maintenance and facilities"
  },
  {
    id: "janitorial-services",
    imageUrl: "/images/Janitorial Services.jpg",
    description: "Janitorial and cleaning services",
    imageHint: "Janitorial services"
  },
  // --- Laundry & Linen Images ---
  {
    id: "laundry-linen-services",
    imageUrl: "/images/Laundry & Linen Services.jpg",
    description: "Laundry and linen services",
    imageHint: "Commercial laundry equipment"
  },
  {
    id: "industrial-laundry",
    imageUrl: "/images/Industrial Laundry Services.jpg",
    description: "Industrial laundry services",
    imageHint: "Industrial laundry facility"
  },
  {
    id: "linen-supply",
    imageUrl: "/images/Linen Supply.jpg",
    description: "Linen supply services",
    imageHint: "Clean linen supply"
  },
  {
    id: "drycleaning-laundry",
    imageUrl: "/images/Drycleaning and Laundry Services.jpg",
    description: "Drycleaning and laundry services",
    imageHint: "Drycleaning services"
  },
  // --- Technology Services Images ---
  {
    id: "mobile-app-development",
    imageUrl: "/images/Mobile Application Development (Android & iOS).jpg",
    description: "Mobile application development",
    imageHint: "Mobile app development"
  },
  {
    id: "web-app-development",
    imageUrl: "/images/Web App Development.jpg",
    description: "Web application development",
    imageHint: "Web development coding"
  },
  {
    id: "digital-marketing-gen-ai",
    imageUrl: "/images/Digital Marketing & Gen AI.jpg",
    description: "Digital marketing and generative AI",
    imageHint: "AI and digital marketing"
  },
  {
    id: "cloud-services",
    imageUrl: "/images/Cloud Services.jpg",
    description: "Cloud services and solutions",
    imageHint: "Cloud computing services"
  },
  // --- Equipment & Industrial Images ---
  {
    id: "equipment-leasing",
    imageUrl: "/images/Commercial & Industrial Equipment Leasing.jpg",
    description: "Commercial and industrial equipment leasing",
    imageHint: "Equipment leasing and rental"
  },
  // --- Industry Sector Images ---
  {
    id: "federal-government",
    imageUrl: "/images/Federal Government.jpg",
    description: "Federal government services",
    imageHint: "Federal government building"
  },
  {
    id: "department-of-defense",
    imageUrl: "/images/Department of Defense Industry.jpg",
    description: "Department of Defense services",
    imageHint: "Department of Defense operations"
  },
  {
    id: "Health Care",
    imageUrl: "/images/Health Care.jpg",
    description: "Healthcare services",
    imageHint: "Healthcare facility"
  },
  {
    id: "Manufacturing",
    imageUrl: "/images/Manufacturing.png",
    description: "Manufacturing industry services",
    imageHint: "Manufacturing plant"
  },
  {
    id: "Finance & Banking",
    imageUrl: "/images/Finance & Banking.jpeg",
    description: "Finance and banking services",
    imageHint: "Banking and finance"
  },
  {
    id: "automotive",
    imageUrl: "/images/Automotive.jpeg",
    description: "Automotive industry services",
    imageHint: "Automotive industry"
  },
  {
    id: "media-advertising",
    imageUrl: "/images/Media and Advertising.jpg",
    description: "Media and advertising services",
    imageHint: "Media and advertising"
  },
  {
    id: "commercial-sector",
    imageUrl: "/images/Commercial Sector.jpg",
    description: "Commercial sector services",
    imageHint: "Commercial business"
  },
  // --- Leadership Images ---
  {
    "id": "leader-1",
    "description": "Professional headshot of a confident male executive in a suit.",
    "imageUrl": "/images/founder.jpeg", // Using image from .json data
    "imageHint": "professional headshot"
  },
  {
    "id": "leader-2",
    "description": "Professional headshot of a confident female executive in a modern office.",
    "imageUrl": "/images/Elvis Automation Advisor.jpeg",
    "imageHint": "professional headshot"
  },
  {
    "id": "leader-3",
    "description": "Professional headshot of an approachable male executive in business casual attire.",
    "imageUrl": "/images/Risk Management Advisor.jpeg",
    "imageHint": "professional headshot"
  },
  // --- Case Study Images ---
  {
    "id": "case-study-1",
    "description": "A military cargo plane being loaded with supplies, representing secure logistics.",
    "imageUrl": "/images/Department of Defense.jpeg",
    "imageHint": "military cargo plane"
  },
  {
    "id": "case-study-2",
    "description": "Interior of a modern, well-lit office building, showcasing facility management.",
    "imageUrl": "/images/General Service Administration.jpeg",
    "imageHint": "modern office"
  },
  {
    "id": "case-study-3",
    "description": "A commercial laundry facility with rows of industrial washing machines, representing healthcare laundry services.",
    "imageUrl": "/images/Veterans Health Administration.jpeg",
    "imageHint": "laundry facility"
  },
  {
    "id": "case-study-4",
    "description": "A pallet of disaster relief supplies being unloaded from a transport vehicle.",
    "imageUrl": "/images/case-study-4.jpg",
    "imageHint": "disaster relief"
  },
  // --- Blog Post Images ---
  {
    "id": "blog-post-1",
    "description": "An abstract visualization of global logistics with interconnected lines across a world map.",
    "imageUrl": "/images/blog-post-1.jpg",
    "imageHint": "global logistics"
  },
  {
    "id": "blog-post-2",
    "description": "Image for a blog post on compliance",
    "imageUrl": "/images/blog-post-2.jpg",
    "imageHint": "contract law"
  },
  {
    "id": "blog-post-3",
    "description": "An illustration of data flowing from on-premise servers to a cloud icon, representing IT modernization.",
    "imageUrl": "/images/blog-post-3.jpg",
    "imageHint": "cloud migration"
  },
  // --- Project Images ---
  {
    "id": "project-air-force",
    "description": "An F-16 fighter jet on a runway, with maintenance crew in the background.",
    "imageUrl": "/images/FE Warren Protective Clothing.png",
    "imageHint": "fighter jet"
  },
  {
    "id": "project-army",
    "description": "A soldier in uniform working on the electrical systems of a military vehicle.",
    "imageUrl": "/images/Protective Uniform Rental.png",
    "imageHint": "soldiers maintenance"
  },
  {
    "id": "project-interior",
    "description": "A wide shot of the Hoover Dam, representing the Bureau of Reclamation.",
    "imageUrl": "/images/Rental and Laundry Services.png",
    "imageHint": "hoover dam"
  },
  {
    "id": "project-dod-1",
    "description": "Technicians in coveralls performing maintenance on a military vehicle.",
    "imageUrl": "/images/Coverall Laundry Services.png",
    "imageHint": "military maintenance"
  },
  {
    "id": "project-dod-2",
    "description": "Industrial workers in protective gear in a heavy manufacturing environment.",
    "imageUrl": "/images/Industrial Coverall Rental & Laundry.png",
    "imageHint": "industrial workers"
  },
  {
    "id": "project-usda",
    "description": "A scientist in a lab coat inspecting samples in a food safety laboratory.",
    "imageUrl": "/images/Lab Coat Rental & Servicing.png",
    "imageHint": "food safety lab"
  }
];