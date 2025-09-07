// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import RecipeCard from "./Recipe";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <header className="mainhead">RECIPE MENU CARD</header>
    <div className="mainParent">
      <RecipeCard
        RecipeName="MASALA CHAI"
        time="Prep Time: 5 min | Cook Time: 10 min"
        serving="Serves: 2 people"
        difficulty="Difficulty: Easy"
        type="Type: Beverage"
        chefname="Chef Dhoni"
        img="https://tse1.mm.bing.net/th/id/OIP.aMphqBjrbl-ZHloPnT3qAAHaE7?pid=Api&P=0&h=180"
      />

      <RecipeCard
        RecipeName="FILTER COFFEE"
        time="Prep Time: 10 min"
        serving="Serves: 1 person"
        difficulty="Difficulty: Medium"
        type="Type: Beverage"
        chefname="Chef Deeraj"
        img="https://tse1.mm.bing.net/th/id/OIP.Mr9wwmlX36VZ7dKaeELnNwHaLG?pid=Api&P=0&h=180"
      />

      <RecipeCard
        RecipeName="DOSA"
        time="Prep Time: 15 min | Cook Time: 20 min"
        serving="Serves: 2 people"
        difficulty="Difficulty: Medium"
        type="Type: Breakfast"
        chefname="Chef Hema"
        img="https://tse1.mm.bing.net/th/id/OIP.jxDThlGYP2HUrgeolaaGrgHaEJ?pid=Api&P=0&h=180"
      />
       <RecipeCard
        RecipeName="UPMA"
        time="Prep Time: 20 min | Cook Time: 15 min"
        serving="Serves: 40 people"
        difficulty="Difficulty: Moderate"
        type="Type: Breakfast"
        chefname=" Chef ALEX"
        img="https://tse1.mm.bing.net/th/id/OIP.eRp_qNJpgN0pkTBvs916HwHaLH?pid=Api&P=0&h=180"
      />

      <RecipeCard
        RecipeName="BIRYANI"
        time="Prep Time: 120 min | Cook Time: 45 min"
        serving="Serves: 50 people"
        difficulty="Difficulty: More Difficult"
        type="Type: Lunch/Dinner"
        chefname="Chef Bob"
        img="https://tse4.mm.bing.net/th/id/OIP.Vmgj53lEFqJuRwX5B6s-cAHaE8?pid=Api&P=0&h=180"
      />
      <RecipeCard
        RecipeName="PANEER BUTTER MASALA"
        time="Prep Time: 30 min | Cook Time: 40 min"
        serving="Serves: 4 people"
        difficulty="Difficulty: Medium"
        type="Type: Lunch/Dinner"
        chefname="Chef Ramesh"
        img="https://tse1.mm.bing.net/th/id/OIP.IdGS7krtr05EMXWQmOL1kwHaKi?pid=Api&P=0&h=180"
      />
      <RecipeCard
        RecipeName="IDLI"
        time="Prep Time: 20 min | Cook Time: 15 min"
        serving="Serves: 3 people"
        difficulty="Difficulty: Easy"
        type="Type: Breakfast"
        chefname="Chef Lakshmi"
        img="https://tse3.mm.bing.net/th/id/OIP.acHMl7OKBxP2eZEgFZ7bJgHaFj?pid=Api&P=0&h=180"
      />
      <RecipeCard
        RecipeName="PIZZA"
        time="Prep Time: 25 min | Cook Time: 20 min"
        serving="Serves: 2 people"
        difficulty="Difficulty: Medium"
        type="Type: Snack/Dinner"
        chefname="Chef Marco"
        img="https://tse3.mm.bing.net/th/id/OIP.QfaC3yB5NDWrONvYf5NC3wHaEK?pid=Api&P=0&h=180"
      />

    </div>
  </>
);

