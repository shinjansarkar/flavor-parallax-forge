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
            <div className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-brand-green' : 'bg-brand-yellow'
            }`}>
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
          <div className="md:hidden bg-white border-t border-border/10 shadow-card">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-brand-green/10 hover:text-brand-green transition-colors"
              >
                Contact
              </button>
              <div className="px-4 pb-2">
                <Button variant="order" className="w-full">
                  <Phone className="w-4 h-4" />
                  Order Now: 6xxxxxx7
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;