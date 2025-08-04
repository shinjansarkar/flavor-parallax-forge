import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Logo with yellow background and icon */}
            <div className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-brand-yellow' : 'bg-brand-yellow'
            } flex items-center justify-center`}>
              {/* Fork & Knife emoji or icon */}
              <span className="text-2xl">🍴</span>
            </div>
            <div className={`font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-green' : 'text-white'
            }`}>
              <div className="text-lg">GARAM MASALA</div>
              <div className="text-xs opacity-80">FRESHLY & HOMELY</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors duration-300 hover:text-brand-green ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`font-medium transition-colors duration-300 hover:text-brand-green ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-brand-green ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-brand-green ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </button>
            <Button variant="order" size="sm">
              <Phone className="w-4 h-4" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:bg-brand-green/10' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60 md:hidden">
            <div className="absolute top-0 left-0 w-full bg-white border-t border-border/10 shadow-card">
              {/* Close (X) Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-3xl text-brand-green hover:text-brand-yellow focus:outline-none z-50"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="pt-16 pb-6 space-y-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-6 py-4 text-lg text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                >
                  Contact
                </button>
                <div className="px-6 pb-2">
                  <a href="tel:6xxxxxxxxx">
                    <Button variant="order" className="w-full text-lg py-4">
                      <Phone className="w-5 h-5" />
                      Order Now: 6xxxxxxxxx
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;