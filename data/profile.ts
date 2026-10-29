// All site content lives here. Edit this file to update the portfolio.

export type Link = { label: string; href: string };

export const pages = [
  { href: "/research", label: "Research" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const profile = {
  name: "Snahashis Sarker Arnob",
  shortName: "Arnob",
  role: "Software engineer and AI researcher",
  location: "Mirpur, Dhaka, Bangladesh",
  intro:
    "Computer Science and Engineering graduate from North South University. I build full-stack web applications and do research in LLM memory, NLP and computer vision.",
  facts: [
    { label: "Based in", value: "Dhaka, Bangladesh" },
    { label: "Education", value: "BSc CSE, North South University, 2026" },
    { label: "Recent role", value: "Junior Software Engineer, Cloversoft" },
    { label: "Focus", value: "Full-stack web, LLM memory, NLP, computer vision" },
    { label: "Status", value: "Open to software engineering and AI research roles" },
  ],
  email: "arnobsarker004@gmail.com",
  phone: "+8801641061206",
  resume: "/Resume_Snahashis_Sarker_Arnob.pdf",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/snahashis-sarker-arnob/" },
    { label: "GitHub", href: "https://github.com/LyFIzH3LL" },
  ] as Link[],
};

export type Research = {
  title: string;
  subtitle?: string;
  status: string;
  summary: string;
  tags: string[];
  links?: Link[];
};

export const research: Research[] = [
  {
    title: "CHRONICLE",
    subtitle: "Contextual Hierarchical Rolling Orchestration of Narrative Intelligence with Continuous Layered Evolution",
    status: "Senior thesis",
    summary:
      "A five-tier “living summary” memory architecture for LLMs. New facts are merged through contradiction-aware semantic absorption with personalized confidence decay, context is retrieved top-down from persona to turn level, and an LLM judge plus provenance-weighted guards reject stale or adversarially injected memories.",
    tags: ["LLM memory", "Retrieval", "LLM-as-judge", "Python"],
  },
  {
    title: "Hyperspectral ink classification for historical documents",
    status: "Research project",
    summary:
      "A hyperspectral ML pipeline that separates 15 classes of historical ink — iron-gall, carbon, sepia and their mixtures — across 400–1700 nm. A band-budget meta-model predicts the minimum number of spectral bands each ink class needs for a target F1, so cheaper imaging setups can still be used where inks are chemically distinct.",
    tags: ["Hyperspectral imaging", "Computer vision", "PyTorch", "scikit-learn"],
  },
  {
    title: "The builder-worker paradox",
    subtitle: "Co-author, equal contribution. Submitted to Online Social Networks and Media (Elsevier).",
    status: "Under review",
    summary:
      "A mixed-methods study of 19,250 Reddit posts on agentic AI. Using BERTopic and GoEmotions, we show that labor-related discussion carries twice the anxiety of discussion among people building AI (p\u00a0<\u00a00.001), and that the signal survives masking of job-related keywords (94.7% retained).",
    tags: ["NLP", "BERTopic", "GoEmotions", "Statistics"],
    links: [
      { label: "Code", href: "https://github.com/umarbhasan/the-builder-worker-paradox" },
      { label: "Dataset", href: "https://doi.org/10.5281/zenodo.18238765" },
    ],
  },
];

export type Job = {
  role: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const work: Job[] = [
  {
    role: "Junior Software Engineer",
    company: "Cloversoft",
    place: "Khilkhet, Dhaka",
    period: "Sep 2025 – May 2026",
    points: [
      "Engineered a service management platform on the MERN stack.",
      "Worked in Agile Scrum with weekly sprints and GitHub-based version control.",
    ],
  },
  {
    role: "Junior Web Developer (Intern)",
    company: "Qualifie",
    place: "Mirpur, Dhaka",
    period: "Jan 2025 – Jun 2025",
    points: [
      "Managed and optimized JSON data structures that drive dynamic content.",
      "Validated schema consistency in JSON configuration files for reliable frontend rendering.",
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  links?: Link[];
};

export const projects: Project[] = [
  {
    title: "Boier Biddan",
    summary:
      "Generates illustrated Bengali children’s stories from a prompt and a chosen art style. Includes accounts, personal dashboards, a public story feed and ShurjoPay sandbox payments. Built with S.M Shahnawaz Hossain.",
    stack: ["Next.js", "Gemini", "FLUX via Hugging Face", "ShurjoPay"],
    links: [{ label: "Live site", href: "https://boier-biddan.vercel.app/" }],
  },
  {
    title: "ServeEasy",
    summary:
      "An on-demand home services marketplace where people find and hire professionals for cleaning, plumbing, cooking and more. Built solo.",
    stack: ["Next.js", "Descope auth"],
    links: [{ label: "Live site", href: "https://serve-easy-sigma.vercel.app/" }],
  },
  {
    title: "Nitrate prediction for Southern Ocean Seagliders",
    summary:
      "Predicted depth-resolved nitrate from about 860,000 SOGOS Seaglider observations with 23 oceanographic features. Cleaned the data with median imputation, IQR outlier removal, standardization and PCA, then compared Ridge, decision tree, stacking, bagged Extra Trees and XGBoost tuned with halving random search. Bagged Extra Trees reached R² 0.997 against a 0.859 Ridge baseline. Four-person team project.",
    stack: ["Python", "scikit-learn", "XGBoost", "PCA"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "C/C++"] },
  { group: "Machine learning and NLP", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "pandas"] },
  { group: "Web", items: ["MongoDB", "Express", "React", "Node.js", "Next.js"] },
  { group: "Data visualization", items: ["Matplotlib", "Seaborn", "Power BI"] },
  {
    group: "Networking",
    items: ["Cisco Packet Tracer", "Cisco IOS CLI", "Static routing", "OSPF", "RIP", "DHCP", "DNS", "NAT", "Wireshark"],
  },
  {
    group: "Research areas",
    items: ["LLM memory and RAG", "NLP and topic modeling", "Hyperspectral imaging", "Generative AI"],
  },
];

export const education = {
  school: "North South University",
  degree: "BSc in Computer Science and Engineering",
  period: "2022 – 2026",
  gpa: "3.40 / 4.00",
  note: "Preparing for the Cisco CCNA certification.",
};
