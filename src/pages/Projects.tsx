import { useState } from "react";
import { MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import heroConstruction from "@/assets/hero-construction.jpg";
import projectBridge from "@/assets/project-bridge.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMosque from "@/assets/project-mosque.jpg";

const categories = ["All", "Civil", "Environmental", "Commercial", "Religious", "Overseas"];

const projects = [
  {
    image: '/images/p2.jpeg',
    title: "Construction of 1 6 3 C C A - 1 Plaza T Block",
    location: "DHA Phase VIII Lahore",
    category: "Civil",
    status: "Completed",
    year: "-",
    description: "Construction of 1 6 3 C C A - 1 Plaza T Bock\nDHA Phase VIII Lahore",
  },
  {
    image: '/images/p3.jpeg',
    title: "Construction of 1 6 3 C C A - 1 Plaza T Block",
    location: "DHA Phase VIII Lahore",
    category: "Civil",
    status: "Completed",
    year: "-",
    description: "Construction of 1 6 3 C C A - 1 Plaza T Bock\nDHA Phase VIII Lahore",
  },
  {
    image: '/images/p5.jpeg',
    title: "Construction of 1 6 3 C C A - 1 Plaza T Block",
    location: "DHA Phase VIII Lahore",
    category: "Civil",
    status: "Completed",
    year: "-",
    description: "Construction of 1 6 3 C C A - 1 Plaza T Bock\nDHA Phase VIII Lahore",
  },
  {
    image: '/images/p8.jpeg',
    title: "Construction of 1 6 3 C C A - 1 Plaza T Block",
    location: "DHA Phase VIII Lahore",
    category: "Civil",
    status: "Completed",
    year: "-",
    description: "Construction of 1 6 3 C C A - 1 Plaza T Bock\nDHA Phase VIII Lahore",
  },
  {
    image: '/images/p7.jpeg',
    title: "Heran Manar Tuff Paver Work",
    location: "Sheikhupura",
    category: "Civil",
    status: "Completed",
    year: "-",
    description: "Heran Manar Tuff Paver Work\nsheikhupura",
  },
  {
    image: '/images/p9.jpeg',
    title: "c i t y Construction of 6 1 5 - D",
    location: "H o u s i n g Faisalabad",
    category: "Civil",
    status: "Completed",
    year: "-",
    description: "c i t y Construction of 6 1 5 - D\nH o u s i n g Faisalabad.",
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

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
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mt-3 mb-6">
              Projects That Define Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our diverse portfolio of successfully delivered projects across Pakistan and overseas.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted sticky top-[72px] z-30 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-84 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-74 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500/90 text-green-50"
                        : "bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-primary-foreground">
                    {project.year}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mt-2 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
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

export default Projects;
