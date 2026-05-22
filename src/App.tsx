import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  UserRound,
  X
} from "lucide-react";
import { useState } from "react";
import { AnalyticsBeacon } from "./components/AnalyticsBeacon";
import { StructuredData } from "./components/StructuredData";
import { experience, leadership, metrics, profile, projects, skillGroups } from "./data/profile";

const navItems = [
  ["Home", "#home"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Leadership", "#leadership"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
] as const;

const profileFacts = [
  ["Role", "Engineering Manager"],
  ["Company", "Oracle Cerner Healthcare Solutions"],
  ["Experience", "15+ years"],
  ["Focus", "Healthcare SaaS, microservices, distributed systems, AI-assisted engineering"],
  ["Location", "Bengaluru, India"]
] as const;

const homeOverview = [
  {
    icon: UserRound,
    title: "Who I am",
    text: "I moved from individual contributor to engineering manager by staying close to systems, people, and the clinical workflows they support."
  },
  {
    icon: Layers3,
    title: "What I build",
    text: "Healthcare platforms with microservices, Kafka event flows, cloud-native delivery, and production latency targets."
  },
  {
    icon: ShieldCheck,
    title: "How I lead",
    text: "I scale teams through clear ownership, stronger reviews, mentoring, onboarding discipline, and steady release execution."
  },
  {
    icon: Compass,
    title: "Where I go deep",
    text: "Clinical platform reliability, distributed architecture, roadmap translation, and practical AI-assisted engineering."
  }
] as const;

const sectionLaunchers = [
  ["Experience", "#experience", "See the IC to EM progression across Oracle Cerner and Cyient."],
  ["Work", "#work", "Review production healthcare systems, constraints, decisions, and outcomes."],
  ["Leadership", "#leadership", "Understand how I scale teams, quality practices, and stakeholder alignment."],
  ["Skills", "#skills", "Scan the leadership, architecture, backend, cloud, data, and healthcare stack."],
  ["Resume", profile.resume, "Download the resume version that backs the site content."],
  ["Contact", "#contact", "Reach me through email, LinkedIn, or GitHub."]
] as const;

function SectionLabel({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="Madhava Sathineedi profile summary">
      <div className="profile-visual">
        {profile.photoUrl ? (
          <img src={profile.photoUrl} alt={`${profile.name} profile portrait`} />
        ) : (
          <div className="profile-monogram" aria-hidden="true">
            MS
          </div>
        )}
      </div>
      <div className="profile-card-copy">
        <p className="eyebrow">Profile</p>
        <h2>{profile.name}</h2>
        <p>{profile.currentRole}</p>
      </div>
      <dl className="profile-facts">
        {profileFacts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="profile-socials" aria-label="Profile links">
        <a href={profile.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </aside>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <StructuredData />
      <AnalyticsBeacon />
      <div className="site-shell">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Madhava Sathineedi home">
            <span>MS</span>
            <strong>Madhava Sathineedi</strong>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        ) : null}

        <main id="home">
          <section className="home-hero section-wrap">
            <div className="home-intro">
              <div className="availability">
                <span />
                Engineering Manager | Healthcare SaaS | Distributed Systems
              </div>
              <h1>{profile.headline}</h1>
              <p className="hero-summary">
                I am Madhava, an engineering leader who still likes being close to the architecture. My work has grown from building backend systems and clinical data pipelines to leading teams that ship oncology, patient monitoring, and cloud-native healthcare platforms.
              </p>
              <p className="hero-note">
                Recruiters usually look for scope, signal, and proof. This portfolio is organized around those three things: the systems I have helped build, the teams I have scaled, and the measurable delivery outcomes behind the resume.
              </p>
              <div className="hero-meta">
                <span>
                  <MapPin size={16} />
                  {profile.location}
                </span>
                <span>
                  <Building2 size={16} />
                  {profile.currentRole}
                </span>
              </div>
              <div className="hero-actions">
                <a className="button primary" href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  Email me
                </a>
                <a className="button secondary" href={profile.linkedIn} target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
                <a className="button ghost" href={profile.resume}>
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </div>
            <ProfileCard />
          </section>

          <section className="home-overview section-wrap" aria-label="Profile overview">
            {homeOverview.map((item) => {
              const Icon = item.icon;
              return (
                <article className="overview-card" key={item.title}>
                  <Icon size={22} />
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </section>

          <section className="section-launcher section-wrap" aria-label="Portfolio sections">
            <div className="section-launcher-head">
              <p className="eyebrow">Explore</p>
              <h2>Choose the signal you want to inspect first.</h2>
            </div>
            <div className="launcher-grid">
              {sectionLaunchers.map(([label, href, text]) => (
                <a className="launcher-card" href={href} key={label}>
                  <span>{label}</span>
                  <p>{text}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="metrics-strip section-wrap" aria-label="Career impact metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </section>

          <section id="experience" className="section-wrap content-section">
            <SectionLabel
              eyebrow="Experience"
              title="Progression from individual contributor to platform leader."
              text="The throughline is steady: understand the clinical problem, shape the system, grow the team, and make delivery more reliable."
            />
            <div className="timeline">
              {experience.map((company) => (
                <FadeIn key={company.company}>
                  <article className="company-block">
                    <div className="company-head">
                      <h3>{company.company}</h3>
                      <p>{company.meta}</p>
                    </div>
                    <div className="role-list">
                      {company.roles.map((role) => (
                        <div className="role-card" key={`${company.company}-${role.title}`}>
                          <div className="role-title">
                            <h4>{role.title}</h4>
                            <span>{role.period}</span>
                          </div>
                          <ul>
                            {role.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="work" className="section-wrap content-section">
            <SectionLabel
              eyebrow="Featured Work"
              title="Case studies with systems, constraints, and outcomes."
              text="These are not side projects. They are production healthcare systems where latency, release quality, and clinical correctness matter."
            />
            <div className="project-grid">
              {projects.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.07}>
                  <article className="project-card">
                    <p className="project-kicker">{project.kicker}</p>
                    <h3>{project.title}</h3>
                    <p>{project.context}</p>
                    <ul>
                      {project.decisions.map((decision) => (
                        <li key={decision}>
                          <CheckCircle2 size={18} />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="outcome">
                      <strong>Outcome</strong>
                      <span>{project.outcome}</span>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>

          <section id="leadership" className="section-wrap content-section two-column">
            <SectionLabel
              eyebrow="Leadership"
              title="Engineering management with technical accountability."
              text="I like teams where architecture, delivery, mentorship, and operational quality are treated as the same system."
            />
            <div className="leadership-grid">
              {leadership.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="leadership-card" key={item.title}>
                    <Icon size={22} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="skills" className="section-wrap content-section">
            <SectionLabel
              eyebrow="Skills"
              title="A practical stack for healthcare platforms."
              text="The emphasis is not just tools. It is the ability to connect domain constraints, service design, delivery mechanics, and team growth."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div>
                      <Icon size={22} />
                      <h3>{group.title}</h3>
                    </div>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section-wrap seo-panel" aria-label="Search profile">
            <div>
              <p className="eyebrow">Search Profile</p>
              <h2>Built for recruiter discovery without keyword stuffing.</h2>
            </div>
            <div className="search-tags">
              {profile.searchTerms.map((term) => (
                <span key={term}>{term}</span>
              ))}
            </div>
          </section>

          <section id="contact" className="section-wrap contact-section">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Recruiters and engineering leaders can reach me directly.</h2>
              <p>
                I am easiest to evaluate through the work: healthcare platforms, distributed systems, engineering quality, and teams that grow without losing delivery discipline.
              </p>
            </div>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`}>
                <Mail size={19} />
                {profile.email}
              </a>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer">
                <ExternalLink size={19} />
                LinkedIn profile
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={19} />
                GitHub profile
              </a>
              <a href={profile.resume}>
                <Download size={19} />
                Download resume
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer section-wrap">
          <span>Copyright {new Date().getFullYear()} Madhava Sathineedi</span>
          <span>Healthcare SaaS | Cloud-native platforms | Engineering leadership</span>
        </footer>
      </div>
    </>
  );
}
