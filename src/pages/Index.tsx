import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Building2, Droplets, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import aboutImage from "@/assets/about-team.jpg";
import projectBridge from "@/assets/project-bridge.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMosque from "@/assets/project-mosque.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CounterSection from "@/components/sections/CounterSection";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    icon: Building2,
    title: "Civil Engineering",
    description: "Comprehensive civil engineering solutions including structural design, construction management, and infrastructure development.",
  },
  {
    icon: Droplets,
    title: "Environmental & Water",
    description: "Water treatment plants, sewage systems, and environmental infrastructure for sustainable development.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Complete electrical solutions from power distribution to renewable energy systems.",
  },
  {
    icon: Package,
    title: "Trading & Specialty",
    description: "Procurement and trading of construction materials, equipment, and specialty services.",
  },
];

const projects = [
  {
    image: projectBridge,
    title: "Motorway Bridge Project",
    location: "Lahore, Pakistan",
    category: "Civil Infrastructure",
    status: "Completed",
  },
  {
    image: projectWater,
    title: "Water Treatment Plant",
    location: "Karachi, Pakistan",
    category: "Environmental",
    status: "Completed",
  },
  {
    image: projectCommercial,
    title: "Commercial Complex",
    location: "Islamabad, Pakistan",
    category: "Commercial",
    status: "In Progress",
  },
  {
    image: projectMosque,
    title: "Grand Mosque Construction",
    location: "Riyadh, Saudi Arabia",
    category: "Religious",
    status: "Completed",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Established 1999 • 25+ Years of Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-primary-foreground mb-6 leading-tight">
              Total Civil & Water Engineering Solutions
              <span className="text-accent"> Since 1999</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Engineering, Procurement & Construction services delivering quality, safety, and timely execution across Pakistan and overseas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="hero-primary" size="lg">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="text-accent font-medium uppercase tracking-wider text-sm">About Us</span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3 mb-6">
                Building Tomorrow's Infrastructure Today
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                New Global Builders (NGB) has been a pioneer in the construction and engineering industry since 1999. With over two decades of experience, we specialize in delivering comprehensive EPC solutions across Pakistan and overseas markets.
              </p>
              <ul className="space-y-3 mb-8">
                {["PEC Licensed & NTN Registered", "ISO Certified Quality Management", "300+ Successfully Completed Projects", "Expert Team of Engineers"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img src={aboutImage} alt="NGB Engineering Team" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <span className="text-4xl font-poppins font-bold">25+</span>
                <span className="block text-sm font-medium">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3 mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive engineering and construction solutions tailored to meet the demands of government, industrial, and private sector clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Explore our diverse portfolio of successfully delivered projects across various sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-card bg-card"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/90 text-green-50"
                        : "bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-accent text-xs font-medium uppercase tracking-wide">{project.category}</span>
                  <h3 className="text-lg font-poppins font-semibold text-foreground mt-1 mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="accent" size="lg">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
