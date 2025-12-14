import { useEffect, useState, useRef } from "react";
import { Award, Building, Globe, Users } from "lucide-react";

const stats = [
  { icon: Award, value: 25, suffix: "+", label: "Years Experience" },
  { icon: Building, value: 300, suffix: "+", label: "Projects Completed" },
  { icon: Globe, value: 5, suffix: "+", label: "Countries Served" },
  { icon: Users, value: 150, suffix: "+", label: "Expert Team" },
];

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(stat.value * easeOut);

        setCounts((prev) => {
          const next = [...prev];
          next[index] = currentValue;
          return next;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
          setCounts((prev) => {
            const next = [...prev];
            next[index] = stat.value;
            return next;
          });
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-blue rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">Our Achievements</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mt-3">
            Why Choose NGB?
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <div className="text-4xl md:text-5xl font-poppins font-bold text-primary-foreground mb-2">
                {counts[index]}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
