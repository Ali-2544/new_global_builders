import { CheckCircle, Target, Eye, Award, Clock, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import aboutImage from "@/assets/about-team.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const timeline = [
  {
    year: "1999",
    title: "Company Founded",
    description: "NGB established as a civil engineering firm in Pakistan.",
  },
  {
    year: "2005",
    title: "First Major Project",
    description: "Completed first government infrastructure project.",
  },
  {
    year: "2012",
    title: "Environmental Division",
    description: "Expanded into water and environmental engineering.",
  },
  {
    year: "2017",
    title: "Pakistan Operations Growth",
    description: "Major expansion of operations across Pakistan.",
  },
  {
    year: "2020",
    title: "International Expansion",
    description: "Began overseas operations in Middle East.",
  },
  {
    year: "Present",
    title: "EPC Excellence",
    description: "Full EPC services with 300+ completed projects.",
  },
];

const values = [
  {
    icon: Target,
    title: "Quality Excellence",
    description: "We deliver projects that exceed expectations through rigorous quality control and industry best practices.",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Meeting deadlines is our commitment. We plan meticulously and execute efficiently.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We build lasting relationships through transparency, communication, and dedication to client success.",
  },
  {
    icon: Award,
    title: "Safety First",
    description: "Zero compromise on safety. Our comprehensive HSE policies protect our people and projects.",
  },
];

const About = () => {
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
            <span className="text-accent font-medium uppercase tracking-wider text-sm">About NGB</span>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mt-3 mb-6">
              25+ Years of Engineering Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Building Pakistan's infrastructure and expanding our expertise across borders since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3 mb-6">
                From Vision to Reality
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                New Global Builders (NGB) was founded in 1999 with a vision to transform Pakistan's infrastructure landscape. What started as a small civil engineering firm has grown into a comprehensive EPC (Engineering, Procurement & Construction) company serving clients across Pakistan and overseas.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to quality, safety, and timely execution has earned us the trust of government organizations, industrial clients, private developers, and international partners. We specialize in civil, environmental, water, and electrical engineering projects that shape communities and drive economic growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["PEC Licensed", "ISO Certified", "NTN Registered", "HSE Compliant"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="NGB Engineering Team"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <span className="text-4xl font-poppins font-bold">300+</span>
                <span className="block text-sm font-medium text-primary-foreground/80">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading engineering and construction company in Pakistan and the region, known for innovation, quality, and sustainable development that transforms communities and improves lives.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional engineering and construction services through technical excellence, innovative solutions, and unwavering commitment to safety, quality, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3">
              Milestones & Achievements
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-card inline-block">
                      <span className="text-accent font-poppins font-bold text-xl">{item.year}</span>
                      <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full relative z-10 hidden md:block"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium uppercase tracking-wider text-sm">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card text-center hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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

export default About;
