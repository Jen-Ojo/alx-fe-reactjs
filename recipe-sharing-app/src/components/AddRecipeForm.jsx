import { useState, useContext } from 'react';
import { RecipeContext } from './recipeStore';

const AddRecipeForm = () => {
  const { addRecipe } = useContext(RecipeContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addRecipe({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe name"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

