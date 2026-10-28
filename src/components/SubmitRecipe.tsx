import { useState } from "react";
import { useForm } from "react-hook-form";
import { Recipe, RecipeCategory, CuisineType } from "@/data/recipes";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ChefHat, ImagePlus } from "lucide-react";

interface Props {
  onAddRecipe: (recipe: Recipe) => void;
}

export default function SubmitRecipe({ onAddRecipe }: Props) {
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      category: "Dinner" as RecipeCategory,
      cuisine: "International" as CuisineType,
      prepTime: "",
      cookTime: "",
      servings: 4,
      difficulty: "Medium" as "Easy" | "Medium" | "Hard",
      description: "",
      ingredients: "",
      steps: ""
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: any) => {
    const newRecipe: Recipe = {
      id: `usr_${Date.now()}`,
      name: data.name,
      category: data.category,
      cuisine: data.cuisine,
      image: imagePreview || "/images/cat-international.png", // fallback
      prepTime: data.prepTime || "15 mins",
      cookTime: data.cookTime || "30 mins",
      servings: Number(data.servings) || 2,
      difficulty: data.difficulty,
      description: data.description,
      ingredients: data.ingredients.split('\n').filter((i: string) => i.trim() !== ''),
      steps: data.steps.split('\n').filter((s: string) => s.trim() !== ''),
      rating: 5.0
    };

    onAddRecipe(newRecipe);
    reset();
    setImagePreview(null);
    toast({
      title: "Recipe Submitted!",
      description: "Your delicious recipe has been added to the community cookbook.",
    });
  };

  return (
    <section id="submit" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <ChefHat className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-4xl font-serif font-bold mb-4">Share Your Recipe</h2>
            <p className="text-muted-foreground text-lg">
              Got a family secret or a new creation? Add it to our global cookbook.
            </p>
          </div>

          <Card className="border-border shadow-xl">
            <CardHeader className="border-b border-border bg-muted/30">
              <CardTitle>Recipe Details</CardTitle>
              <CardDescription>Fill out the form below to share with the community.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipe Name</label>
                    <Input {...register("name", { required: true })} placeholder="e.g. Grandma's Lasagna" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select onValueChange={(val) => setValue("category", val as RecipeCategory)} defaultValue="Dinner">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Breakfast", "Lunch", "Dinner", "Snacks", "Desserts", "Healthy"].map(c => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cuisine Type</label>
                    <Select onValueChange={(val) => setValue("cuisine", val as CuisineType)} defaultValue="International">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Italian", "Chinese", "Indian", "Mexican", "American", "Japanese", "International"].map(c => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Difficulty</label>
                    <Select onValueChange={(val) => setValue("difficulty", val as any)} defaultValue="Medium">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Short Description</label>
                  <Textarea {...register("description", { required: true })} placeholder="What makes this dish special?" className="h-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ingredients (one per line)</label>
                    <Textarea {...register("ingredients", { required: true })} placeholder="2 cups flour&#10;1 tsp salt&#10;..." className="h-40" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Steps (one per line)</label>
                    <Textarea {...register("steps", { required: true })} placeholder="Mix dry ingredients.&#10;Add water and knead.&#10;..." className="h-40" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Food Image</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:bg-muted/50 transition-colors relative cursor-pointer overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <>
                        <ImagePlus className="w-10 h-10 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Click to upload an image</span>
                      </>
                    )}
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg">
                  Submit Recipe to Community
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
