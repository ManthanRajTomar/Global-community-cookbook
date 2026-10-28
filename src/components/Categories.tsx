import { motion } from "framer-motion";

const categories = [
  { name: "Italian", image: "/images/cat-italian.png", dishes: "Pizza, Pasta, Risotto" },
  { name: "Chinese", image: "/images/cat-chinese.png", dishes: "Noodles, Dumplings" },
  { name: "Indian", image: "/images/cat-indian.png", dishes: "Curry, Biryani, Naan" },
  { name: "Mexican", image: "/images/cat-mexican.png", dishes: "Tacos, Burritos" },
  { name: "American", image: "/images/cat-american.png", dishes: "Burgers, Steak" },
  { name: "Japanese", image: "/images/cat-japanese.png", dishes: "Sushi, Ramen" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Explore Cuisines</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {cat.dishes}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
