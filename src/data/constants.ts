export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "15+", label: "Countries" },
  { value: "500+", label: "Coaches Certified" },
  { value: "7", label: "Course Programs" },
];

export const MESSAGING_PILLARS = [
  {
    title: "International Standard",
    description: "Courses designed by international hockey standards",
    icon: "Globe" as const,
  },
  {
    title: "Measurable Growth",
    description: "Concrete metrics for player performance improvement",
    icon: "TrendingUp" as const,
  },
  {
    title: "Certified Training",
    description: "Recognized certifications for coaches",
    icon: "Award" as const,
  },
  {
    title: "Complete Ecosystem",
    description: "From coaches through players to parents",
    icon: "Users" as const,
  },
];

export type CourseAudience = "Coaches" | "Players" | "Centers" | "Parents";

export interface Course {
  code: string;
  title: string;
  audience: CourseAudience;
  description: string;
  price: number;
  popular?: boolean;
  slug: string;
}

export const COURSES: Course[] = [
  {
    code: "CC001",
    title: "Content Analysis of Sport Performance Structure in Ice Hockey",
    audience: "Coaches",
    description:
      "Deep analysis of sport performance structure and its components in modern ice hockey. Learn to identify and optimize key performance factors.",
    price: 499,
    popular: true,
    slug: "sport-performance-structure",
  },
  {
    code: "CC002",
    title: "Training Load Periodization — Motor Skills Development",
    audience: "Coaches",
    description:
      "Master the science of periodization and motor skills development for hockey players at all levels.",
    price: 599,
    slug: "training-load-periodization",
  },
  {
    code: "CC003",
    title: "Effectiveness of Somatic Adaptation Processes",
    audience: "Coaches",
    description:
      "Understanding how the body adapts to training stimuli and how to maximize adaptation effectiveness.",
    price: 549,
    slug: "somatic-adaptation",
  },
  {
    code: "CC004",
    title: "Creating Training & Game Plans with Correct Loads",
    audience: "Coaches",
    description:
      "Learn to create scientifically-backed training and game plans with precisely calibrated workloads.",
    price: 649,
    slug: "training-game-plans",
  },
  {
    code: "CC005",
    title: "Post-Injury Load Content Creation",
    audience: "Coaches",
    description:
      "Specialized course on designing safe and effective return-to-play programs after injuries.",
    price: 699,
    slug: "post-injury-load",
  },
  {
    code: "CC006",
    title: "Specialised Educational Program for Team Members",
    audience: "Coaches",
    description:
      "Comprehensive program for educating all team staff members on modern hockey training methodologies.",
    price: 799,
    slug: "team-education-program",
  },
  {
    code: "PC001",
    title: "Proper Diet for Hockey Players",
    audience: "Players",
    description:
      "Evidence-based nutrition guide for hockey players covering pre-game, recovery, and season-long dietary strategies.",
    price: 299,
    slug: "hockey-nutrition",
  },
];

export interface Lecturer {
  name: string;
  title: string;
  credentials: string[];
  image: string;
  bio: string;
}

export const LECTURERS: Lecturer[] = [
  {
    name: "Prof. PhDr. Eugen Laczo, PhD.",
    title: "University Professor & Performance Expert",
    credentials: [
      "Olympics Trainer",
      "Slovakia National Team",
      "HC Slovan Bratislava",
      "Physiology & Diagnostics",
    ],
    image: "/images/team/team_eugen_laczo.jpg",
    bio: "University professor specializing in physiology and diagnostics. Coached Slovakia national team and served as Olympics trainer at Salt Lake City and Sydney.",
  },
  {
    name: "Mgr. Norbert Javorčík",
    title: "HDC Europe Program Director",
    credentials: [
      "HDC Europe Director",
      "Slovakia U17/U20 Coach",
      "World Championship Bronze",
      "Highest Coaching Cert",
    ],
    image: "/images/team/team_noro_javorcik.jpg",
    bio: "HDC Europe program director with FTVŠ graduate degree and highest coaching certification. Led Slovakia U18 as head coach and assisted U17/U20 to World Championship bronze.",
  },
  {
    name: "Mgr. Milan Kabát, PhD.",
    title: "Sports Education & Diagnostics Specialist",
    credentials: [
      "Sports Education PhD",
      "Athletic Fitness",
      "Performance Diagnostics",
      "Training Program Design",
    ],
    image: "/images/team/team_milan-kabat.jpg",
    bio: "Sports education PhD specializing in athletic fitness, performance diagnostics, and training program design.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "HDC Europe's certification transformed how I coach. The international standards gave me credibility with top clubs.",
    author: "Tomáš Horváth",
    role: "Head Coach",
    country: "Czech Republic",
    flag: "🇨🇿",
  },
  {
    quote:
      "The systematic approach to player development is unmatched. My players' metrics improved 40% in one season.",
    author: "Klaus Berger",
    role: "Hockey Center Director",
    country: "Austria",
    flag: "🇦🇹",
  },
  {
    quote:
      "Prof. Laczo's expertise in conditioning was a game-changer for our training program.",
    author: "Mikko Virtanen",
    role: "Head Coach",
    country: "Finland",
    flag: "🇫🇮",
  },
];

export const COUNTRIES = [
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Russia", flag: "🇷🇺" },
];

export const CERTIFICATION_STEPS = [
  {
    step: 1,
    title: "Choose Your Course",
    description: "Select from our specialized programs tailored to your role",
  },
  {
    step: 2,
    title: "Complete Training",
    description: "Intensive hands-on training with world-class lecturers",
  },
  {
    step: 3,
    title: "Pass Assessment",
    description: "Demonstrate your knowledge through theory and practical tests",
  },
  {
    step: 4,
    title: "Receive Certificate",
    description: "Earn your internationally recognized HDC certification",
  },
];

export const CONTACT_INFO = {
  phone: "+421 903 305 178",
  email: "info@eduprosport.com",
  address: "Bratislava, Slovakia",
  social: {
    facebook: "https://facebook.com/hockeydts",
    youtube: "https://youtube.com/HDCEurope",
  },
};

export const FOOTER_COLUMNS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Certifications", href: "/#certifications" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  courseCategories: [
    { label: "For Coaches", href: "/courses?audience=Coaches" },
    { label: "For Players", href: "/courses?audience=Players" },
    { label: "For Centers", href: "/courses?audience=Centers" },
    { label: "For Parents", href: "/courses?audience=Parents" },
  ],
};
