import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
        </div>
      </div>
    </Link>
  );
}
