import { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
