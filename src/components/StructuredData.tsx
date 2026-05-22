import { profile } from "../data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${profile.name} | Engineering Manager Portfolio`,
  url: "https://madhavasathineedi.com/",
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    email: `mailto:${profile.email}`,
    jobTitle: "Engineering Manager",
    worksFor: {
      "@type": "Organization",
      name: "Oracle Cerner Healthcare Solutions Private Ltd."
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN"
    },
    sameAs: [profile.linkedIn, profile.github],
    knowsAbout: [
      "Healthcare SaaS",
      "Microservices",
      "Distributed Systems",
      "Kafka",
      "Cloud Native Platforms",
      "Engineering Leadership",
      "AI-assisted software development"
    ]
  },
  about: "Engineering leadership portfolio focused on healthcare SaaS, cloud-native platforms, microservices, and AI-assisted engineering."
};

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
