import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AdvancedMenu from "@/components/AdvancedMenu";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="menu">
          <AdvancedMenu />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-brand-yellow rounded-full">
              <span className="text-xl">🍴</span>
            </div>
            <div className="font-bold">
              <div className="text-lg">GARAM MASALA</div>
              <div className="text-xs opacity-80">FRESHLY & HOMELY</div>
            </div>
          </div>
          <p className="text-muted opacity-80 mb-4">
            Authentic Indian Cloud Kitchen • Fresh • Homely • Delicious
          </p>
          <div className="text-2xl font-bold text-brand-yellow">
            📞 6289006267
          </div>
          <p className="text-sm mt-4 opacity-60">
            © 2024 Garam Masala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
