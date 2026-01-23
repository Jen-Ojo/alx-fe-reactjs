import { RecipeProvider } from './components/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <RecipeProvider>
      <AddRecipeForm />
      <RecipeList />
    </RecipeProvider>
  );
}

export default App;

