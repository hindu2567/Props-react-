// Recipe.jsx

export default function RecipeCard(data ) {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h2>{data.RecipeName}</h2>
        <p>{data.time}</p>
      </header>

      <section className="recipe-details">
        <div>
        <p>{data.serving}</p>
        <p>{data.difficulty}</p>
        <p>{data.type}</p>
        </div>
        <img className="foodimg"
        src={data.img}
        alt="image"/>
      </section>

      <footer className="recipe-footer">
        <small>{data.chefname}</small>
      </footer>
    </div>
  );
}
