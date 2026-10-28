import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import RecipeSection from "@/components/RecipeSection";
import SubmitRecipe from "@/components/SubmitRecipe";
import Reviews from "@/components/Reviews";
import ContactFooter from "@/components/ContactFooter";
import { Recipe, initialRecipes } from "@/data/recipes";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useLocalStorage<Recipe[]>("community-recipes", initialRecipes);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorite-recipes", []);

  useEffect(() => {
    // Simulate initial loading to show animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Loader2 className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
    );
  }

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Desserts", "Healthy"] as const;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="flex-grow pt-16">
        <Hero onSearch={setSearchQuery} />
        <About />
        <Categories />
        
        {mealTypes.map((mealType) => (
          <RecipeSection 
            key={mealType}
            title={`${mealType} Recipes`}
            id={mealType.toLowerCase()}
            recipes={recipes.filter(r => r.category === mealType && r.name.toLowerCase().includes(searchQuery.toLowerCase()))}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        ))}

        <SubmitRecipe onAddRecipe={handleAddRecipe} />
        <Reviews />
      </main>

      <ContactFooter />
    </div>
  );
}
