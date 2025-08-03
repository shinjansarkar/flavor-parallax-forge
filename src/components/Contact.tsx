import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, MessageCircle, X } from "lucide-react";

const Contact = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="py-20 bg-gradient-brand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-parallax-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-white rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-white animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-brand-yellow">Order?</span>
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get your favorite Indian dishes delivered fresh and hot to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Phone Order */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-8 text-center text-white">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call to Order</h3>
              <p className="opacity-90 mb-6">
                Speak directly with our team for personalized service
              </p>
              <div className="text-3xl font-bold text-brand-yellow mb-4">
                6289006267
              </div>
              <Button variant="cta" className="w-full">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Operating Hours */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-8 text-center text-white">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
              <div className="space-y-2 opacity-90 mb-6">
                <div>Monday - Sunday</div>
                <div className="text-xl font-semibold text-brand-yellow">11:00 AM - 11:00 PM</div>
                <div>Always open for orders!</div>
              </div>
              <div className="text-lg font-medium">
                Delivery: 30-45 minutes
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-8 text-center text-white">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Service Area</h3>
              <p className="opacity-90 mb-6">
                We deliver fresh, hot meals across the city
              </p>
              <div className="text-lg font-medium mb-4">
                Free delivery within 5km
              </div>
              <Button variant="hero" className="w-full bg-white/20 hover:bg-white/30">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Large CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-brand-yellow rounded-3xl p-8 md:p-12 text-brand-green-dark shadow-glow max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🍽️</div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Hungry? We've Got You Covered!
            </h3>
            <p className="text-xl mb-8 opacity-80">
              Experience the authentic taste of India with every bite. 
              Fresh ingredients, traditional recipes, and love in every meal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="order" size="lg" className="text-xl px-8 py-4">
                <Phone className="w-6 h-6" />
                Order Now: 6289006267
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-8 py-4 border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white"
                onClick={() => setShowMenu(true)}
              >
                View Full Menu
              </Button>
            </div>
          </div>
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
              <X className="w-6 h-6" />
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

export default Contact;