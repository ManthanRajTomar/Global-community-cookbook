export type RecipeCategory = "Breakfast" | "Lunch" | "Dinner" | "Snacks" | "Desserts" | "Healthy";
export type CuisineType = "Italian" | "Chinese" | "Indian" | "Mexican" | "American" | "Japanese" | "International";

export interface Recipe {
  id: string;
  name: string;
  category: RecipeCategory;
  cuisine: CuisineType;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  steps: string[];
  rating: number;
  description: string;
}

export const initialRecipes: Recipe[] = [
  // Breakfast
  {
    id: "b1",
    name: "Classic American Pancakes",
    category: "Breakfast",
    cuisine: "American",
    image: "/images/cat-american.png",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: ["1 1/2 cups all-purpose flour", "3 1/2 tsp baking powder", "1 tsp salt", "1 tbsp white sugar", "1 1/4 cups milk", "1 egg", "3 tbsp butter, melted"],
    steps: ["In a large bowl, sift together the flour, baking powder, salt and sugar.", "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.", "Heat a lightly oiled griddle or frying pan over medium high heat.", "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot."],
    rating: 4.8,
    description: "Fluffy, golden brown pancakes that are perfect for a lazy weekend morning."
  },
  // Lunch
  {
    id: "l1",
    name: "Vegetable Biryani",
    category: "Lunch",
    cuisine: "Indian",
    image: "/images/cat-indian.png",
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: 6,
    difficulty: "Medium",
    ingredients: ["2 cups basmati rice", "2 cups mixed vegetables", "1 large onion, sliced", "2 tomatoes, chopped", "1/4 cup yogurt", "Biryani masala", "Saffron strands soaked in milk", "Mint and coriander leaves"],
    steps: ["Wash and soak basmati rice for 30 mins. Parboil the rice.", "In a heavy bottom pan, sauté onions until golden brown. Add vegetables and spices.", "Cook until vegetables are tender, add yogurt and mix well.", "Layer the rice over the vegetables. Drizzle saffron milk and herbs.", "Cover tightly and cook on low heat for 15-20 mins (Dum)."],
    rating: 4.9,
    description: "A fragrant Indian rice dish cooked with aromatic spices and mixed vegetables."
  },
  // Dinner
  {
    id: "d1",
    name: "Wood-Fired Margherita Pizza",
    category: "Dinner",
    cuisine: "Italian",
    image: "/images/cat-italian.png",
    prepTime: "2 hours",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Medium",
    ingredients: ["Pizza dough (flour, yeast, water, salt)", "San Marzano tomatoes, crushed", "Fresh mozzarella cheese", "Fresh basil leaves", "Extra virgin olive oil"],
    steps: ["Prepare the pizza dough and let it rest for at least 1.5 hours.", "Preheat oven to highest setting with a pizza stone if available.", "Stretch dough into a 12-inch circle.", "Spread crushed tomatoes thinly over the dough.", "Tear mozzarella into chunks and distribute evenly.", "Bake for 10-15 mins until crust is blistered. Garnish with fresh basil and olive oil."],
    rating: 5.0,
    description: "Classic Neapolitan pizza with simple, fresh ingredients."
  },
  // Snacks
  {
    id: "s1",
    name: "Street Style Tacos",
    category: "Snacks",
    cuisine: "Mexican",
    image: "/images/cat-mexican.png",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: ["8 small corn tortillas", "1 lb grilled carne asada or chicken", "1/2 cup diced white onion", "1/4 cup chopped fresh cilantro", "Lime wedges", "Salsa verde"],
    steps: ["Warm the corn tortillas on a skillet.", "Chop the grilled meat into bite-sized pieces.", "Double up the tortillas and fill with meat.", "Top generously with diced onion and cilantro.", "Serve with lime wedges and salsa on the side."],
    rating: 4.7,
    description: "Authentic Mexican street tacos bursting with fresh flavors."
  },
  // Desserts
  {
    id: "ds1",
    name: "Matcha Mochi Ice Cream",
    category: "Desserts",
    cuisine: "Japanese",
    image: "/images/cat-japanese.png",
    prepTime: "30 mins",
    cookTime: "10 mins",
    servings: 8,
    difficulty: "Hard",
    ingredients: ["1 cup sweet glutinous rice flour (Mochiko)", "1/4 cup sugar", "1 cup water", "1 tbsp matcha powder", "Cornstarch for dusting", "8 scoops green tea ice cream"],
    steps: ["Scoop ice cream into balls and freeze until rock solid.", "Mix rice flour, matcha, sugar, and water in a microwave-safe bowl.", "Cover loosely and microwave for 1 minute. Stir and repeat until dough is sticky and translucent.", "Dust a surface with cornstarch and roll out the mochi dough.", "Cut into circles, wrap around the frozen ice cream balls, and freeze immediately."],
    rating: 4.6,
    description: "Chewy, sweet mochi wrapped around premium matcha ice cream."
  },
  // Healthy
  {
    id: "h1",
    name: "Sichuan Tofu Stir Fry",
    category: "Healthy",
    cuisine: "Chinese",
    image: "/images/cat-chinese.png",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: 3,
    difficulty: "Medium",
    ingredients: ["1 block firm tofu, pressed and cubed", "2 cups broccoli florets", "1 bell pepper, sliced", "2 tbsp soy sauce", "1 tbsp chili garlic sauce", "1 tsp sesame oil", "1 inch ginger, minced", "2 cloves garlic, minced"],
    steps: ["Pan-fry tofu cubes until golden on all sides. Remove from pan.", "In the same pan, stir fry broccoli and bell peppers with ginger and garlic.", "Whisk together soy sauce, chili sauce, and sesame oil.", "Return tofu to the pan, pour the sauce over, and toss until everything is coated and hot.", "Serve immediately over quinoa or brown rice."],
    rating: 4.5,
    description: "A spicy, vegetable-packed tofu stir fry with bold Sichuan flavors."
  }
];
