import { Award, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import heroConstruction from "@/assets/hero-construction.jpg";

const clients = [
  { name: "Pakistan Engineering Council", sector: "Government" },
  { name: "Ministry of Water Resources", sector: "Government" },
  { name: "National Highway Authority", sector: "Government" },
  { name: "Fauji Foundation", sector: "Industrial" },
  { name: "DHA Islamabad", sector: "Real Estate" },
  { name: "WAPDA", sector: "Utilities" },
  { name: "Bahria Town", sector: "Real Estate" },
  { name: "Lucky Cement", sector: "Industrial" },
  { name: "Capital Development Authority", sector: "Government" },
  { name: "Askari Bank", sector: "Financial" },
  { name: "Pakistan Steel Mills", sector: "Industrial" },
  { name: "Nestle Pakistan", sector: "FMCG" },
];

const certifications = [
  {
    icon: Shield,
    title: "PEC Licensed",
    description: "Registered with Pakistan Engineering Council with valid practicing license.",
    number: "License No: PEC-XXXXX",
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Certified Quality Management System ensuring consistent quality delivery.",
    number: "Certificate No: ISO-XXXXX",
  },
  {
    icon: Award,
    title: "ISO 14001:2015",
    description: "Environmental Management System certification for sustainable practices.",
    number: "Certificate No: EMS-XXXXX",
  },
  {
    icon: Award,
    title: "ISO 45001:2018",
    description: "Occupational Health and Safety Management System certification.",
    number: "Certificate No: OHSMS-XXXXX",
  },
  {
    icon: CheckCircle,
    title: "NTN Registered",
    description: "Registered with Federal Board of Revenue for tax compliance.",
    number: "NTN: XXXXXXX-X",
  },
  {
    icon: Shield,
    title: "SECP Registered",
    description: "Registered company with Securities and Exchange Commission of Pakistan.",
    number: "Reg No: XXXXXXX",
  },
];

const achievements = [
  "25+ Years of Successful Operations",
  "300+ Projects Completed",
  "5+ Countries Served",
  "150+ Expert Team Members",
  "Zero Major Safety Incidents",
  "98% Client Satisfaction Rate",
  "Award-Winning Projects",
  "Sustainable Development Focus",
];

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroConstruction})` }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Trust & Recognition</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mt-3 mb-6">
              Our Clients & Certifications
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Trusted by leading organizations across government, industrial, and private sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3">
              Trusted By Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-soft-blue/10 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl font-poppins font-bold text-primary">
                    {client.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{client.name}</h3>
                <span className="text-xs text-accent">{client.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Credentials</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3">
              Certifications & Licenses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-xl hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <cert.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>
                <span className="text-xs text-accent font-medium">{cert.number}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mt-3">
              Our Achievements
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl text-center"
              >
                <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-primary-foreground text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Clients;
