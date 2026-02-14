import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold text-green-600">
        🍲 RecipeShare
      </Link>
      <Link
        to="/add"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </Link>
    </nav>
  );
}

export default Navbar;
