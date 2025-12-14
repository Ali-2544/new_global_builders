import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-20 h-20 brounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-poppins font-bold text-accent-foreground text-xl"><img src="images/logo.png" alt="" /></span>
          </div>
          <div className="hidden sm:block">
            <span className={cn(
              "font-poppins font-bold text-lg block leading-tight transition-colors",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}>
              New Global Builders
            </span>
            <span className={cn(
              "text-xs tracking-wider uppercase transition-colors",
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            )}>
              Since 1999
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                location.pathname === item.path
                  ? isScrolled
                    ? "text-accent bg-accent/10"
                    : "text-accent"
                  : isScrolled
                    ? "text-foreground hover:text-accent hover:bg-accent/5"
                    : "text-primary-foreground/90 hover:text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+923001234567"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
            )}
          >
            <Phone className="w-4 h-4" />
            <span>(042) 35700032</span>
          </a>
          <Link to="/contact">
            <Button variant="accent" size="default">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-primary" : "text-primary-foreground"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background shadow-card transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-custom py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-3 rounded-lg font-medium transition-colors",
                location.pathname === item.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
