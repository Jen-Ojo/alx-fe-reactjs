import { useContext } from 'react';
import { RecipeContext } from './recipeStore';

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
