import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function Hero({ onSearch }: { onSearch: (q: string) => void }) {
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearch);
    const firstSection = document.querySelector("#categories");
    if (firstSection) firstSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundAttachment: "fixed" // Parallax
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm text-sm font-semibold tracking-wider uppercase mb-4 border border-primary/30">
            A Global Community
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg leading-tight">
            Discover Recipes From Around The World
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Breakfast, Lunch, Dinner, Snacks & Desserts in One Community Cookbook
          </p>

          <form onSubmit={handleSearch} className="mt-8 relative max-w-xl mx-auto flex items-center">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for pizza, tacos, biryani..."
              className="w-full h-14 pl-12 pr-32 text-lg rounded-full bg-white/95 text-gray-900 border-none shadow-xl focus-visible:ring-primary focus-visible:ring-2"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                onSearch(e.target.value);
              }}
            />
            <Button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 bg-primary hover:bg-primary/90 text-white"
            >
              Explore
            </Button>
          </form>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
