import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
function Reciepe() {
  const [foodData, setFoodData] = useState([]);
  const [search, setSearch] = useState("");
  const ApiKey = "";
  const ApiId = "a15b0fd2";
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${ApiId}&app_key=${APP_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setFoodData(res.data);
      })
      .catch((e) => console.log(e));
  }, [search]);
  return (
    <div>
      <h1>Food finder App</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipes">
        {foodData.map((recipe) => (
          <RecipeList
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Reciepe;
