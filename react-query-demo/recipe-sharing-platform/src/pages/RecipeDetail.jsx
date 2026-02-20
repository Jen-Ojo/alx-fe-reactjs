import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/data.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;


