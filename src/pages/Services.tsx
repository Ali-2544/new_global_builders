import { Building2, Droplets, Zap, Package, Wrench, HardHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import heroConstruction from "@/assets/hero-construction.jpg";
import projectBridge from "@/assets/project-bridge.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const services = [
  {
    icon: Building2,
    title: "Civil Engineering",
    description: "Comprehensive civil engineering services covering all aspects of infrastructure development and construction.",
    image: projectBridge,
    features: [
      "Structural Design & Analysis",
      "Highway & Road Construction",
      "Bridge & Flyover Projects",
      "Building Construction",
      "Foundation Engineering",
      "Quality Assurance & Testing",
    ],
  },
  {
    icon: Droplets,
    title: "Environmental & Water Solutions",
    description: "Sustainable water and environmental engineering solutions for communities and industries.",
    image: projectWater,
    features: [
      "Water Treatment Plants",
      "Sewage Treatment Systems",
      "Water Supply Networks",
      "Drainage Systems",
      "Environmental Impact Assessment",
      "Waste Management Solutions",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Complete electrical solutions from design to implementation for all project scales.",
    image: projectCommercial,
    features: [
      "Power Distribution Systems",
      "Substation Design & Installation",
      "Industrial Electrification",
      "Building Electrical Systems",
      "Renewable Energy Integration",
      "Control & Automation",
    ],
  },
  {
    icon: Package,
    title: "Trading & Procurement",
    description: "Strategic procurement and trading services for construction materials and equipment.",
    image: projectBridge,
    features: [
      "Construction Materials Supply",
      "Equipment Procurement",
      "Import & Export Services",
      "Vendor Management",
      "Quality Inspection",
      "Logistics Coordination",
    ],
  },
  {
    icon: Wrench,
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery within budget.",
    image: projectCommercial,
    features: [
      "Project Planning & Scheduling",
      "Cost Management",
      "Risk Assessment",
      "Quality Control",
      "Stakeholder Coordination",
      "Reporting & Documentation",
    ],
  },
  {
    icon: HardHat,
    title: "EPC Contracting",
    description: "Full Engineering, Procurement & Construction services for turnkey project delivery.",
    image: projectWater,
    features: [
      "Design & Engineering",
      "Procurement Management",
      "Construction Execution",
      "Commissioning & Handover",
      "Warranty Support",
      "After-Sales Service",
    ],
  },
];

const Services = () => {
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
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mt-3 mb-6">
              Comprehensive Engineering Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From concept to completion, we deliver excellence across civil, environmental, electrical engineering, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-3xl font-poppins font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="accent">
                      Get a Quote
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-card group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
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

export default Services;
