# **App Name**: NGONGE Federal Solutions

## Core Features:

- Home Page Hero Banner: Dynamic hero banner with federal mission imagery and prominent CTAs for 'Download Capability Statement' and 'Request a Proposal'.
- About Us Section: Display comprehensive company information including mission, leadership bios, core values, and historical timeline.
- Capabilities Showcase: Dedicated pages for showcasing core competencies: Laundry & Linen Services, Facilities Support, and Transportation & Logistics. IT Modernization is an optional feature
- Past Performance Case Studies: Interactive, filterable display of case studies highlighting 'Problem -> Solution -> Result'.
- Certifications and Compliance Badges: Display badges for 8(a), HUBZone, ISO, and OSHA with links to downloadable PDF certificates hosted in Firebase Storage.
- Resources and Downloads: Repository for the Capability Statement, brochures, and other downloadable documents; includes blog post integration. Serve PDFs directly from Firebase Storage.
- Secure Contact Form: Contact form to securely collect Name, Agency, Email, Phone, Project Description, and File Upload (utilizing reCAPTCHA), triggering a Cloud Function to send email or store the submission in Firestore.

## Style Guidelines:

- Background color: Light desaturated navy blue (#DCE2E9) to evoke professionalism and trust.
- Primary color: Dark navy blue (#1A237E) to project a trustworthy federal aesthetic. This hue is relatively saturated, yet dark enough to provide sufficient contrast against the background.
- Accent color: Gold (#D4AF37) for highlighting key elements, conveying prestige and excellence. The gold should contrast the background and primary, while its yellow-adjacent hue complements them, forming an analogous palette.
- Body and headline font: 'Inter' (sans-serif) for a modern, clean, and professional look. Code Font: 'Source Code Pro' (monospace) for code snippets.
- Use a consistent set of professional icons related to logistics, facility support, and IT modernization. Preferably monochrome icons in gold.
- Clean grid-based layout with a sticky header for easy navigation. Implement a footer with accessibility statement for compliance.
- Implement subtle fade-in and slide-up animations to enhance user experience without being distracting.