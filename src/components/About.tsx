import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, Award } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-brand-green" />,
      title: "Made with Love",
      description: "Every dish is prepared with care and traditional family recipes passed down through generations."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: "Family Recipes",
      description: "Authentic homestyle cooking that brings the warmth of Indian kitchens to your table."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-green" />,
      title: "Fresh Daily",
      description: "We prepare everything fresh daily using the finest ingredients and aromatic spices."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-green" />,
      title: "Quality Assured",
      description: "Maintaining the highest standards of hygiene and taste in every meal we serve."
    }
  ];

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Parallax Background Elements */}
      <ParallaxSection speed={0.3}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-green rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-yellow rounded-full" />
        </div>
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            About Garam Masala
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Freshly & <span className="text-brand-green">Homely</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Garam Masala, we believe in bringing authentic Indian flavors to your doorstep. 
            Our cloud kitchen specializes in traditional recipes prepared with fresh ingredients 
            and served with love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transform hover:scale-105 transition-all duration-300 border-border/50 hover:border-brand-green/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our <span className="text-brand-green">Story</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for authentic Indian cuisine, Garam Masala started 
                  as a small family kitchen with big dreams. We wanted to share the rich 
                  flavors and traditional cooking methods that have been part of our family 
                  for generations.
                </p>
                <p>
                  Today, we're proud to serve hundreds of customers daily, bringing them 
                  the taste of home-cooked Indian meals. From our signature biryanis to 
                  comfort food like dal tarka, every dish tells a story of tradition, 
                  love, and authenticity.
                </p>
                <p>
                  Our cloud kitchen model allows us to focus on what we do best - cooking 
                  exceptional food while ensuring quick delivery and maintaining the highest 
                  standards of hygiene and quality.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-brand rounded-3xl p-8 flex items-center justify-center text-white text-center shadow-elegant">
                <div>
                  <div className="text-6xl mb-4">🍛</div>
                  <h4 className="text-2xl font-bold mb-2">Traditional Thali</h4>
                  <p className="opacity-90">
                    Experience the complete Indian meal with our specially curated thalis
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-2xl animate-float">
                🌶️
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-xl animate-float" style={{ animationDelay: '1s' }}>
                🥘
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;