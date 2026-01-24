import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const addFavorite = useRecipeStore(
    (state) => state.addFavorite
  );

  const recipe = useRecipeStore((state) =>
    state.recipes.find(
      (recipe) => recipe.id === Number(id)
    )
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={() => addFavorite(recipe.id)}>
        Add to Favorites
      </button>
    </div>
  );
};

export default RecipeDetails;
