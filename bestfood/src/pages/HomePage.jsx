import React from "react";
import { useFood } from "../context/FoodContext";
import RestaurentCard from "./RestaurentCard";

function HomePage() {
  const { state, dispatch } = useFood();
  console.log(state.restaurantsData, "restaurantsData");
  return (
    <div>
      <div className=" font-semibold text-3xl mt-5 p-5 text-primary">
        BestFood -{" "}
        <span className=" font-medium text-sm">
          Know the Best Place for Food
        </span>
      </div>
      <div className=" font-semibold text-xl">Select Your Cousine:</div>
      <div>
        <div>
          {state.cuisineData.map((cuisine) => (
            <button
              className=" rounded-lg bg-primary text-white px-3 py-1 m-3 cursor-pointer"
              onClick={() =>
                dispatch({ type: "filtercusine", payload: cuisine.id })
              }
            >
              {cuisine.name}
            </button>
          ))}
        </div>

        <div>
          {state.restaurantsData !== [] &&
            state.restaurantsData.map((res) => <RestaurentCard res={res} />)}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
