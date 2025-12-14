import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-accent-foreground mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Let's discuss how NGB can help bring your construction and engineering vision to life with quality, safety, and timely execution.
        </p>
        <Link to="/contact">
          <Button variant="default" size="xl">
            Request Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
