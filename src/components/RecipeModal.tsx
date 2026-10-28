import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Recipe } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, Clock, Users, ChefHat } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function RecipeModal({ recipe, isOpen, onClose, isFavorite, onToggleFavorite }: Props) {
  if (!recipe) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border">
        <ScrollArea className="max-h-[90vh]">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-muted">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-orange-100', 'to-red-100', 'dark:from-orange-900/20', 'dark:to-red-900/20');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 md:hidden">
                <Badge variant="secondary" className="mb-2 bg-white/90 text-black">{recipe.cuisine}</Badge>
                <h2 className="text-2xl font-serif font-bold text-white leading-tight">{recipe.name}</h2>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
              <div className="hidden md:flex justify-between items-start mb-6">
                <div>
                  <Badge variant="secondary" className="mb-3">{recipe.cuisine} • {recipe.category}</Badge>
                  <DialogTitle className="text-3xl font-serif font-bold text-foreground leading-tight">{recipe.name}</DialogTitle>
                </div>
                {onToggleFavorite && (
                  <Button variant="ghost" size="icon" onClick={onToggleFavorite} className="shrink-0">
                    <Heart className={`w-6 h-6 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                  </Button>
                )}
              </div>

              <p className="text-muted-foreground text-lg mb-8 italic">
                "{recipe.description}"
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-muted/50 rounded-xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <Clock className="w-5 h-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Prep</span>
                  <span className="font-semibold">{recipe.prepTime}</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center border-l border-border/50">
                  <ChefHat className="w-5 h-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Cook</span>
                  <span className="font-semibold">{recipe.cookTime}</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center border-l border-border/50">
                  <Users className="w-5 h-5 text-primary mb-1" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Serves</span>
                  <span className="font-semibold">{recipe.servings}</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center border-l border-border/50">
                  <Star className="w-5 h-5 text-amber-500 mb-1" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Rating</span>
                  <span className="font-semibold">{recipe.rating}</span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-primary" /> Ingredients
                  </h3>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-foreground leading-relaxed">{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-[1.5]">
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-primary" /> Instructions
                  </h3>
                  <div className="space-y-6">
                    {recipe.steps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          {i !== recipe.steps.length - 1 && (
                            <div className="w-px h-full bg-border mt-2" />
                          )}
                        </div>
                        <p className="text-foreground leading-relaxed pt-1 pb-4">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
