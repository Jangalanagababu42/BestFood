import React, { createContext, useContext, useReducer, useState } from "react";
import FoodReducer, { initialData } from "./FoodReducer";
export const FoodContext = createContext();

function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(FoodReducer, initialData);
  const [addreview, setAddReview] = useState(false);
  console.log(state, "state");
  return (
    <FoodContext.Provider value={{ state, dispatch, addreview, setAddReview }}>
      {children}
    </FoodContext.Provider>
  );
}
const useFood = () => useContext(FoodContext);

export { useFood, FoodProvider };
