import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] max-h-[500px]">
              <img 
                src="/images/about-cooking.png" 
                alt="Community cooking together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl m-4 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Food Brings Us <span className="text-primary italic">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Global Community Cookbook is more than just a collection of recipes. It's a celebration of diverse cultures, cherished family traditions, and the universal language of food. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking for a quick weeknight dinner, an authentic street food snack, or a decadent dessert, our community has shared their best-kept secrets here. Join us in making the world a smaller, tastier place.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">Recipes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">Cuisines</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10k</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">Cooks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
