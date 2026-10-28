import { useState } from "react";
import { Recipe } from "@/data/recipes";
import RecipeCard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

interface Props {
  title: string;
  id: string;
  recipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function RecipeSection({ title, id, recipes, favorites, onToggleFavorite }: Props) {
  const [selectedCuisine, setSelectedCuisine] = useState<string>("All");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const cuisines = ["All", ...Array.from(new Set(recipes.map((r) => r.cuisine)))];

  const filteredRecipes = selectedCuisine === "All" 
    ? recipes 
    : recipes.filter((r) => r.cuisine === selectedCuisine);

  if (recipes.length === 0) return null;

  return (
    <section id={id} className="py-16 even:bg-card odd:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground">{title}</h2>
            <div className="w-16 h-1 bg-primary mt-2 rounded-full" />
          </div>
          
          <div className="w-full md:w-48">
            <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
              <SelectTrigger>
                <SelectValue placeholder="Cuisine" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <RecipeCard 
                recipe={recipe} 
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={() => onToggleFavorite(recipe.id)}
                onClick={() => setSelectedRecipe(recipe)}
              />
            </motion.div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No {selectedCuisine.toLowerCase()} recipes found for this section.
          </div>
        )}
      </div>

      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={!!selectedRecipe} 
        onClose={() => setSelectedRecipe(null)}
        isFavorite={selectedRecipe ? favorites.includes(selectedRecipe.id) : false}
        onToggleFavorite={selectedRecipe ? () => onToggleFavorite(selectedRecipe.id) : undefined}
      />
    </section>
  );
}
