import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  HeartPulse,
  Network,
  ShieldCheck,
  UsersRound
} from "lucide-react";

export const profile = {
  name: "Madhava Sathineedi",
  email: "madhav.naresh@gmail.com",
  linkedIn: "https://www.linkedin.com/in/madhava-sathineedi",
  github: "https://github.com/MadhavaNaresh",
  resume: "/Madhava_Sathineedi_Resume_2026_latest.docx",
  photoUrl: null as string | null,
  headline: "Engineering Manager building healthcare platforms that scale in production.",
  summary:
    "I lead engineering teams that ship clinical software with clear architecture, disciplined delivery, and measurable quality gains. My work sits at the intersection of healthcare SaaS, distributed systems, cloud-native delivery, and pragmatic AI adoption.",
  location: "Bengaluru, India",
  currentRole: "Engineering Manager, Oracle Cerner Healthcare Solutions",
  searchTerms: [
    "Madhava Sathineedi",
    "Madhava Sathineedi Engineering Manager",
    "Madhava Sathineedi Oracle Cerner",
    "Healthcare SaaS Engineering Manager",
    "Microservices Engineering Manager"
  ]
};

export const metrics = [
  { value: "15+", label: "years in enterprise software" },
  { value: "12", label: "member engineering team led" },
  { value: "~75%", label: "defect reduction driven" },
  { value: "10K+", label: "clinical events/day handled" },
  { value: "<3 sec", label: "target workflow latency" },
  { value: "200+", label: "technical interviews conducted" }
];

export const experience = [
  {
    company: "Oracle Cerner Healthcare Solutions Private Ltd.",
    meta: "Bengaluru | Aug 2013 - Present | IC -> Tech Lead -> Engineering Manager",
    roles: [
      {
        title: "Engineering Manager",
        period: "Oct 2022 - Apr 2026",
        points: [
          "Own people leadership, architecture direction, delivery execution, and platform strategy for an Oncology platform vertical.",
          "Scaled the team from 6 to 12 engineers in 8 months while maintaining delivery commitments and zero release slippages.",
          "Drove quality practices that reduced open defects from 100+ to 22 through stronger reviews, test discipline, and CI/CD hygiene.",
          "Partnered with US Product and Clinical stakeholders to shape quarterly roadmaps and delivery sequencing.",
          "Introduced AI-assisted engineering workflows using Codex, Cline, and GPT-based tools in a regulated healthcare context."
        ]
      },
      {
        title: "Senior Team Lead",
        period: "Jan 2019 - Sep 2022",
        points: [
          "Led a 6-member team delivering clinical frontend applications and real-time patient monitoring capabilities.",
          "Acted as primary technical point of contact for US business and client stakeholders.",
          "Mentored engineers through design reviews, pair programming, and knowledge-sharing sessions.",
          "Strengthened CI/CD pipelines and release practices to reduce deployment risk."
        ]
      },
      {
        title: "Senior Software Engineer",
        period: "Sep 2016 - Dec 2018",
        points: [
          "Led design reviews and mentored junior engineers across Clinical MPages Suite work.",
          "Introduced Git-based version control practices and modern engineering workflows."
        ]
      },
      {
        title: "Software Engineer",
        period: "Aug 2013 - Sep 2016",
        points: [
          "Built backend systems and data pipelines while developing deep clinical data modelling and HL7 experience.",
          "Led legacy C# platform upgrades, including 64-bit migration and resolution of 30+ defects."
        ]
      }
    ]
  },
  {
    company: "Cyient",
    meta: "Hyderabad | Jun 2010 - Jul 2013",
    roles: [
      {
        title: "Software Engineer",
        period: "Jun 2010 - Jul 2013",
        points: [
          "Developed aerospace engineering systems across the full SDLC, building foundations in reliability, system design, and engineering discipline."
        ]
      }
    ]
  }
];

export const projects = [
  {
    title: "Oncology New EHR Solution",
    kicker: "AI-enabled distributed healthcare platform",
    context:
      "A next-generation oncology platform for clinical workflows where reliability, latency, and clean service boundaries matter.",
    decisions: [
      "Led architecture across 6+ microservices with explicit ownership boundaries.",
      "Used Kafka event-driven workflows to process 10K+ clinical events per day.",
      "Kept milestone delivery steady across client-facing go-live commitments."
    ],
    outcome: "Delivered a platform foundation with sub-3-second workflow latency targets and zero release slippages across milestones."
  },
  {
    title: "Modern Vital Signs Application",
    kicker: "Real-time patient monitoring at clinical scale",
    context:
      "A high-frequency monitoring application serving US hospital networks with concurrent patient workloads and low-latency data processing.",
    decisions: [
      "Supported roughly 1,000+ concurrent patients with vitals captured every 1-5 seconds.",
      "Improved release quality through tighter CI/CD, review standards, and operational readiness.",
      "Translated clinical and client ambiguity into implementable engineering direction."
    ],
    outcome: "Reduced defects by roughly 75% and reached only 2 production incidents post-launch."
  },
  {
    title: "AI & Engineering Productivity",
    kicker: "Pragmatic AI adoption in regulated engineering",
    context:
      "A cross-cutting effort to use AI where it genuinely improves engineering throughput without weakening review discipline or domain accuracy.",
    decisions: [
      "Delivered an NLP/LLM use case mapping unstructured clinical text to cancer staging classifications.",
      "Introduced GPT-based workflows, Codex, and Cline into team development practices.",
      "Kept adoption grounded in review, traceability, and healthcare-domain caution."
    ],
    outcome: "Improved team productivity while preserving engineering standards in a regulated healthcare environment."
  }
];

export const leadership = [
  {
    icon: UsersRound,
    title: "Team Scaling",
    text: "Scaled a team from 6 to 12 engineers while protecting delivery commitments and onboarding quality."
  },
  {
    icon: ShieldCheck,
    title: "Quality Systems",
    text: "Reduced open defects from 100+ to 22 through code review discipline, test culture, and CI/CD execution."
  },
  {
    icon: GitBranch,
    title: "Roadmap Translation",
    text: "Partnered with US Product, Clinical, and client stakeholders to turn ambiguity into sequencing and engineering direction."
  },
  {
    icon: BrainCircuit,
    title: "AI Adoption",
    text: "Introduced AI-assisted workflows with enough guardrails for real healthcare engineering work."
  }
];

export const skillGroups = [
  {
    icon: BriefcaseBusiness,
    title: "Leadership",
    skills: ["Team scaling", "Hiring", "Mentoring", "Performance reviews", "Roadmap planning", "Stakeholder management"]
  },
  {
    icon: Network,
    title: "Architecture",
    skills: ["Microservices", "Distributed systems", "Kafka", "Event-driven design", "Scalability", "Reliability"]
  },
  {
    icon: Code2,
    title: "Backend",
    skills: ["Java", "Micronaut", "Spring Boot", "REST APIs", "Apache Kafka", "C#"]
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps",
    skills: ["Oracle Cloud", "AWS", "Docker", "Kubernetes", "CI/CD pipelines"]
  },
  {
    icon: Database,
    title: "Data",
    skills: ["SQL Server", "MySQL", "Redis", "Clinical data modelling", "HL7"]
  },
  {
    icon: HeartPulse,
    title: "Healthcare Systems",
    skills: ["Oncology workflows", "Clinical platforms", "Patient monitoring", "Regulated delivery"]
  }
];
