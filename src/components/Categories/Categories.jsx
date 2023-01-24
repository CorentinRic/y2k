import "./Categories.css";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="categories-select"
      >
        <option value="">Filtres</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button className="btn" onClick={() => setActiveCategory("")}>
        Réinitialiser
      </button>
    </div>
  );
}

export default Categories;
