import { cuisineData, restaurantsData } from "../components/Data";
export const initialData = {
  restaurantsData: [],
  cuisineData: cuisineData,
};

function FoodReducer(state, action) {
  console.log(action.payload, "actcion");
  console.log(action.type, "type");
  switch (action.type) {
    case "filtercusine":
      const filterdata = restaurantsData.filter(
        (res) => Number(res.cuisine_id) === Number(action.payload)
      );
      console.log(filterdata, "filterdata");
      return { ...state, restaurantsData: [...filterdata] };
    default:
      break;
  }
}

export default FoodReducer;
