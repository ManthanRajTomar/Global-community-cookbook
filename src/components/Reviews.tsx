import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    initials: "SJ",
    recipe: "Classic American Pancakes",
    text: "Made these for Sunday brunch and the family went crazy! So fluffy and perfect.",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Patel",
    initials: "RP",
    recipe: "Vegetable Biryani",
    text: "Authentic taste. The ratio of spices is spot on. Reminds me of home.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rossi",
    initials: "ER",
    recipe: "Wood-Fired Margherita Pizza",
    text: "The dough recipe here is excellent. Better than my local pizzeria.",
    rating: 4
  },
  {
    id: 4,
    name: "Kenji Tanaka",
    initials: "KT",
    recipe: "Matcha Mochi Ice Cream",
    text: "A bit tricky to make the first time, but the results are incredible.",
    rating: 4
  },
  {
    id: 5,
    name: "Maria Garcia",
    initials: "MG",
    recipe: "Street Style Tacos",
    text: "So simple but so flavorful. The salsa verde pairing is a must.",
    rating: 5
  },
  {
    id: 6,
    name: "David Chen",
    initials: "DC",
    recipe: "Sichuan Tofu Stir Fry",
    text: "Quick, healthy, and packs a punch. It's now in my weekly rotation.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Community Love</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what home cooks around the world are saying about our recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="h-full bg-background border-border relative overflow-hidden group">
                <Quote className="absolute -right-4 -top-4 w-24 h-24 text-muted/30 rotate-12 transition-transform group-hover:rotate-6" />
                <CardContent className="p-6 relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-4 h-4 ${idx < review.rating ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground leading-relaxed flex-grow mb-6 italic">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">{review.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">Cooked: {review.recipe}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
