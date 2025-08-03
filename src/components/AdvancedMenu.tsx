import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Flame, Leaf } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  rating?: number;
  popular?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "everyday",
    name: "Everyday Meals",
    items: [
      { id: "veg-meal", name: "Veg Meal", price: "₹70", description: "Complete vegetarian thali with dal, sabzi, rice & roti", isVeg: true, rating: 4.5 },
      { id: "fish-meal", name: "Fish Meal", price: "₹120", description: "Fresh fish curry with rice and sides", rating: 4.7 },
      { id: "egg-meal", name: "Egg Meal", price: "₹95", description: "Egg curry with rice, dal and vegetables", rating: 4.3 },
      { id: "chicken-meal", name: "Chicken Meal", price: "₹160", description: "Tender chicken curry with rice and accompaniments", rating: 4.8, popular: true },
      { id: "mutton-meal", name: "Mutton Meal", price: "₹300", description: "Rich mutton curry with rice and traditional sides", rating: 4.9, isSpicy: true }
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    items: [
      { id: "chicken-biryani", name: "Chicken Biryani", price: "₹160", description: "Aromatic basmati rice with tender chicken pieces", rating: 4.8, popular: true, isSpicy: true },
      { id: "mutton-biryani", name: "Mutton Biryani", price: "₹220", description: "Premium mutton biryani with fragrant spices", rating: 4.9, isSpicy: true }
    ]
  },
  {
    id: "main-course",
    name: "Main Course",
    items: [
      { id: "veg-hakka", name: "Veg Hakka Noodle", price: "₹100/140", description: "Stir-fried noodles with fresh vegetables", isVeg: true, rating: 4.4 },
      { id: "egg-hakka", name: "Egg Hakka Noodle", price: "₹130/160", description: "Noodles tossed with scrambled eggs", rating: 4.5 },
      { id: "chicken-hakka", name: "Chicken Hakka Noodle", price: "₹160/200", description: "Noodles with juicy chicken pieces", rating: 4.7, popular: true },
      { id: "mixed-hakka", name: "Mixed Hakka Noodle", price: "₹180/230", description: "Combination of chicken and egg noodles", rating: 4.6 },
      { id: "chicken-tandoori-butter", name: "Chicken Tandoori Butter Masala", price: "₹300/550", description: "Rich and creamy tandoori chicken in butter masala", rating: 4.9, popular: true, isSpicy: true }
    ]
  },
  {
    id: "tarkas",
    name: "Tarkas",
    items: [
      { id: "plain-tarka", name: "Plain Tarka", price: "₹50/100", description: "Traditional dal with aromatic tempering", isVeg: true, rating: 4.2 },
      { id: "egg-tarka", name: "Egg Tarka", price: "₹60/120", description: "Dal with boiled eggs", rating: 4.4 },
      { id: "chicken-tarka", name: "Chicken Tarka", price: "₹90/180", description: "Dal with tender chicken pieces", rating: 4.6, popular: true }
    ]
  },
  {
    id: "breads",
    name: "Roti & Naan",
    items: [
      { id: "butter-naan", name: "Butter Naan", price: "₹60", description: "Soft and fluffy butter naan", isVeg: true, rating: 4.3 },
      { id: "plain-naan", name: "Plain Naan", price: "₹40", description: "Classic plain naan bread", isVeg: true, rating: 4.1 },
      { id: "rumali-roti", name: "Rumali Roti", price: "₹16", description: "Thin and soft rumali roti", isVeg: true, rating: 4.0 }
    ]
  },
  {
    id: "grills",
    name: "Grill & Roasts",
    items: [
      { id: "chicken-tandoori-half", name: "Chicken Tandoori (Half)", price: "₹250", description: "Half chicken marinated in tandoori spices", rating: 4.8, isSpicy: true },
      { id: "chicken-tandoori-full", name: "Chicken Tandoori (Full)", price: "₹400", description: "Full chicken marinated in tandoori spices", rating: 4.8, popular: true, isSpicy: true },
      { id: "chicken-tikka", name: "Chicken Tikka Kabab (6pcs)", price: "₹260", description: "Juicy chicken tikka pieces grilled to perfection", rating: 4.7, isSpicy: true },
      { id: "roasted-chicken", name: "Roasted Chicken", price: "₹510", description: "Whole chicken roasted with herbs and spices", rating: 4.9, popular: true }
    ]
  }
];

const AdvancedMenu = () => {
  const [activeCategory, setActiveCategory] = useState("everyday");
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-brand-green rounded-full animate-parallax-slow" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brand-yellow rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-brand-green">Delicious</span> Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Indian flavors prepared fresh daily with love and traditional recipes
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="animate-fade-in-up">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8 bg-card shadow-card">
            {menuData.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-brand-green data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card 
                    key={item.id} 
                    className="group hover:shadow-elegant transform hover:scale-105 transition-all duration-300 border-border/50 hover:border-brand-green/50"
                  >
                    <CardContent className="p-6">
                      {/* Item Header */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          {item.isVeg && <Leaf className="w-4 h-4 text-green-600" />}
                          {item.isSpicy && <Flame className="w-4 h-4 text-red-500" />}
                          <h3 className="font-bold text-lg group-hover:text-brand-green transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {item.popular && (
                            <Badge variant="secondary" className="bg-brand-yellow text-brand-green-dark text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Rating */}
                      {item.rating && (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-brand-green">
                          {item.price}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-brand rounded-2xl p-8 text-white shadow-elegant">
            <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl mb-6 opacity-90">Call us now for hot, fresh delivery!</p>
            <Button variant="cta" size="lg" className="text-xl px-8 py-4">
              📞 Call: 6289006267
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMenu;