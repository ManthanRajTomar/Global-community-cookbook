import { Recipe } from "@/data/recipes";
import { Heart, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onClick: () => void;
}

export default function RecipeCard({ recipe, isFavorite, onToggleFavorite, onClick }: Props) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800";
      case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800";
      default: return "";
    }
  };

  return (
    <Card 
      className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col bg-card"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback gradient if image fails
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-orange-100', 'to-red-100', 'dark:from-orange-900/20', 'dark:to-red-900/20');
          }}
        />
        <button 
          className="absolute top-3 right-3 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-white"}`} 
          />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 text-black hover:bg-white border-none shadow-sm backdrop-blur-sm">
            {recipe.cuisine}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-bold text-lg leading-tight line-clamp-2">{recipe.name}</h3>
        </div>
        
        <div className="flex items-center gap-1 mb-3 text-sm font-medium text-amber-500">
          <Star className="w-4 h-4 fill-current" />
          <span>{recipe.rating.toFixed(1)}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <Badge variant="outline" className={`text-xs ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
