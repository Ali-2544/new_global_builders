import { Linkedin, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import heroConstruction from "@/assets/hero-construction.jpg";

const leadership = [
  {
    name: "Muhammad Shafique",
    position: "Chief Executive Officer",
    qualification: "BSc Civil Engineering, MBA",
    experience: "30+ years in construction industry",
  },
  {
    name: "Muhammad Tanseer Saqib",
    position: "Chief Operating Officer",
    qualification: "PhD Environmental Engineering",
    experience: "10+ years in project management",
  },
  {
    name: "Faisal Nadeem",
    position: "Director of Environmental Services",
    qualification: "MSc Environmental Science",
    experience: "18+ years in water treatment",
  },
  // Updated entry based on your provided details
  {
    name: "Hafiz Haider Ali",
    position: "Zonal Marketing Manager",
    qualification: "BBA",
    experience: "",
  },
  // New leaders added per your list
  {
    name: "Faisal Javed",
    position: "GM Marketing",
    qualification: "",
    experience: "",
  },
  {
    name: "Engr Malik Waqar",
    position: "Construction Manager",
    qualification: "",
    experience: "",
  },
  {
    name: "Shafqat Hafeez",
    position: "Legal Adviser",
    qualification: "LLB (PU)",
    experience: "",
  },
  {
    name: "ALI Shahid",
    position: "Project Manager",
    qualification: "M.Ph (Environment.)",
    experience: "",
  },
  {
    name: "Gulam Hussain",
    position: "Admin Officer",
    qualification: "",
    experience: "",
  },
  {
    name: "Ahmed Azid",
    position: "Technical Assistant",
    qualification: "",
    experience: "",
  },
];

const departments = [
  {
    name: "Civil Engineering",
    head: "Engr. Imran Hussain",
    team: "45+ Engineers",
    description: "Structural design, construction supervision, and quality assurance.",
  },
  {
    name: "Environmental Engineering",
    head: "Dr. Ayesha Siddiqui",
    team: "25+ Specialists",
    description: "Water treatment, environmental assessment, and sustainability.",
  },
  {
    name: "Electrical Engineering",
    head: "Engr. Bilal Ahmed",
    team: "30+ Engineers",
    description: "Power systems, automation, and electrical installations.",
  },
  {
    name: "Project Management",
    head: "Mr. Usman Tariq",
    team: "20+ Managers",
    description: "Planning, scheduling, cost control, and stakeholder management.",
  },
  {
    name: "Procurement & Trading",
    head: "Mr. Kamran Shah",
    team: "15+ Specialists",
    description: "Material sourcing, vendor management, and logistics.",
  },
  {
    name: "HSE Department",
    head: "Mr. Rizwan Karim",
    team: "12+ Officers",
    description: "Health, safety, and environmental compliance.",
  },
];

const Team = () => {
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
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our People</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mt-3 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Expert engineers and professionals driving excellence in every project we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3">
              Executive Team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card text-center group hover:shadow-card-hover transition-all"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-soft-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-poppins font-bold text-primary-foreground">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-poppins font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-2">{member.position}</p>
                <p className="text-muted-foreground text-xs mb-1">{member.qualification}</p>
                <p className="text-muted-foreground text-xs">{member.experience}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
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

export default Team;
