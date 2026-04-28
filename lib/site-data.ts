export type Service = {
  title: string
  description: string
  icon: string
}

export type ProjectCategory = "Website" | "App" | "UI/UX" | "SEO"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  description: string
  techStack: string[]
  image: string
  tags: string[]
  problem: string
  solution: string
  result: string
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "High-performance business websites focused on trust, speed, and conversion.",
    icon: "Globe",
  },
  {
    title: "Mobile App Development",
    description:
      "Scalable iOS and Android apps designed for real users and long-term growth.",
    icon: "Smartphone",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean user journeys and polished interfaces that improve engagement.",
    icon: "Palette",
  },
  {
    title: "SEO Optimization",
    description:
      "Technical and content SEO strategies to increase qualified traffic.",
    icon: "Search",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Conversion-ready online stores with smooth checkout and easy management.",
    icon: "ShoppingCart",
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable updates, monitoring, and support to keep products running smoothly.",
    icon: "ShieldCheck",
  },
]

export const projects: Project[] = [
  {
    slug: "ielts-learning-app",
    title: "IELTS Learning App",
    category: "App",
    shortDescription: "A mobile platform for IELTS prep with smart progress tracking.",
    description:
      "An end-to-end learning app helping students prepare for IELTS with lessons, quizzes, and analytics.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    tags: ["Education", "Mobile", "Analytics"],
    problem: "Students lacked a structured and trackable IELTS preparation workflow.",
    solution:
      "We designed modular learning paths, adaptive quizzes, and a dashboard to track scores.",
    result:
      "User session duration increased by 40% and weekly active learners doubled in 3 months.",
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    category: "Website",
    shortDescription: "A modern online store with fast checkout and mobile-first UX.",
    description:
      "A full storefront with product management, secure payment flow, and performance optimization.",
    techStack: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
    tags: ["E-commerce", "Conversion", "Performance"],
    problem: "The previous store had a high cart abandonment rate on mobile devices.",
    solution:
      "We rebuilt the checkout experience and improved loading speed with optimized rendering.",
    result:
      "Checkout completion increased by 31% and bounce rate dropped by 24%.",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    category: "Website",
    shortDescription: "A listings platform with advanced filters and lead capture.",
    description:
      "A property discovery platform with map view, agent profiles, and lead automation.",
    techStack: ["Next.js", "Mapbox", "Supabase", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    tags: ["Real Estate", "Leads", "Map"],
    problem: "Users could not quickly find relevant properties by location and budget.",
    solution:
      "We introduced powerful filtering, saved searches, and optimized listing pages.",
    result:
      "Qualified lead submissions increased by 55% after launch.",
  },
  {
    slug: "corporate-website",
    title: "Corporate Website",
    category: "Website",
    shortDescription: "A premium corporate site designed to build trust and authority.",
    description:
      "A high-end company website featuring case studies, service pages, and lead CTAs.",
    techStack: ["Next.js", "MDX", "Vercel", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    tags: ["Corporate", "Branding", "Trust"],
    problem: "The brand lacked a polished online presence for enterprise clients.",
    solution:
      "We crafted a refined visual system and content hierarchy focused on credibility.",
    result:
      "Inbound enterprise inquiries grew by 2.2x within 10 weeks.",
  },
  {
    slug: "restaurant-booking-app",
    title: "Restaurant Booking App",
    category: "App",
    shortDescription: "A reservation app with live slot updates and customer reminders.",
    description:
      "A booking system for restaurants with customer profiles and smart table management.",
    techStack: ["Flutter", "Node.js", "MongoDB", "Twilio"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    tags: ["Hospitality", "Booking", "Automation"],
    problem: "Manual booking caused double reservations and poor customer follow-up.",
    solution:
      "We built real-time slot handling and automated reminders to reduce booking friction.",
    result:
      "No-show rate decreased by 28% and booking efficiency improved significantly.",
  },
  {
    slug: "seo-campaign-website",
    title: "SEO Campaign Website",
    category: "SEO",
    shortDescription:
      "A content-driven website built to rank for high-intent service keywords.",
    description:
      "An SEO-first campaign site with optimized architecture, content hubs, and schema markup.",
    techStack: ["Next.js", "Schema.org", "Ahrefs", "Google Search Console"],
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
    tags: ["SEO", "Content", "Ranking"],
    problem: "The business had low visibility for valuable search terms in its niche.",
    solution:
      "We restructured content, improved technical SEO, and targeted transactional keywords.",
    result: "Organic traffic increased by 170% in 6 months.",
  },
  {
    slug: "uiux-dashboard",
    title: "UI/UX Dashboard",
    category: "UI/UX",
    shortDescription: "A SaaS analytics dashboard with a clear data-first design system.",
    description:
      "A dashboard redesign focusing on usability, accessibility, and visual consistency.",
    techStack: ["Figma", "React", "Storybook", "TailwindCSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    tags: ["SaaS", "UX", "Design System"],
    problem: "Users struggled to understand key metrics in the old interface.",
    solution:
      "We redesigned data hierarchy, interaction patterns, and component consistency.",
    result: "Task completion speed improved by 36% in usability testing.",
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "App",
    shortDescription: "A platform for attendance, grades, and school communication.",
    description:
      "A management suite for schools with parent portals and teacher tools.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    tags: ["Education", "Operations", "Communication"],
    problem: "Administrative workflows were fragmented across multiple systems.",
    solution:
      "We unified student records, attendance, and reporting into one secure platform.",
    result:
      "Admin processing time dropped by 45% and parent engagement increased.",
  },
]

export const testimonials = [
  {
    name: "Nafis Rahman",
    role: "Founder, LearnUp",
    quote:
      "Smart Trend Digital delivered exactly what we needed. Their process was clear, fast, and highly professional.",
  },
  {
    name: "Farzana Akter",
    role: "Marketing Lead, UrbanCart",
    quote:
      "Our new website feels premium and converts better. The team understood business goals, not just design.",
  },
  {
    name: "Tanvir Hossain",
    role: "Director, HomeBridge BD",
    quote:
      "From UX planning to launch, they handled everything with great communication and quality execution.",
  },
]

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take 4 to 12 weeks depending on scope, integrations, and review cycles.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, and feature iteration support.",
  },
  {
    question: "Can you redesign an existing website or app?",
    answer:
      "Yes. We can audit your current product, improve UX, and rebuild for modern performance.",
  },
  {
    question: "Do you support SEO and technical optimization?",
    answer:
      "Yes. We provide technical SEO, on-page optimization, and content structure improvements.",
  },
]

export const clientLogos = [
  "LearnUp",
  "UrbanCart",
  "HomeBridge",
  "EduPulse",
  "NexaFoods",
  "BrightPath",
]

export const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "85+" },
  { label: "Years Experience", value: "6+" },
]
