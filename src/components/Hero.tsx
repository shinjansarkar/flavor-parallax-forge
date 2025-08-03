import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-brand-yellow rounded-full animate-parallax-slow" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-brand-yellow rounded-full animate-float" style={{animationDelay: '1s'}} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {/* Logo Section */}
        <div className="mb-8 animate-scale-in">
          <div className="inline-block p-8 bg-brand-yellow rounded-full shadow-glow mb-6">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🍴</div>
              <div className="text-brand-green-dark font-bold text-xl">GARAM MASALA</div>
              <div className="text-brand-green text-sm font-medium">FRESHLY & HOMELY</div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Authentic Indian
          <span className="block text-brand-yellow">Cloud Kitchen</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Freshly prepared homely meals delivered to your doorstep
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button
            variant="cta"
            size="lg"
            className="text-lg px-8 py-4"
            asChild
          >
            <a href="tel:6xxxxxx7">
              <Phone className="w-5 h-5" />
              Order Now: 6xxxxxx7
            </a>
          </Button>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => setShowMenu(true)}
          >
            View Menu
          </Button>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Clock className="w-6 h-6 text-brand-yellow" />
            <div>
              <div className="font-semibold">Quick Delivery</div>
              <div className="text-sm opacity-80">30-45 mins</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <MapPin className="w-6 h-6 text-brand-yellow" />
            <div>
              <div className="font-semibold">Fresh & Hot</div>
              <div className="text-sm opacity-80">Made to order</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-6 h-6 text-brand-yellow text-xl">₹</div>
            <div>
              <div className="font-semibold">Best Prices</div>
              <div className="text-sm opacity-80">Starting ₹16</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>

      {/* Modal for Menu Image */}
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl shadow-lg p-4 w-full max-w-2xl mx-4 md:mx-0">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={() => setShowMenu(false)}
              aria-label="Close"
            >
              <span className="text-2xl font-bold">&times;</span>
            </button>
            <img
              src="https://i.ibb.co/j92hYG2x/33e0e34e-0871-48f6-98c0-911694f6dd33.jpg"
              alt="Full Menu"
              className="rounded-lg w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;