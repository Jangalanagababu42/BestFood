import React from "react";
import { useNavigate, useParams } from "react-router";
import { restaurantsData } from "../components/Data";
import { useFood } from "../context/FoodContext";
import AddReview from "./AddReview";

function RestaurentPage() {
  const { addreview, setAddReview } = useFood();
  const { resId } = useParams();
  const navigate = useNavigate();
  const selectedres = restaurantsData.find(
    (res) => Number(res.id) === Number(resId)
  );
  console.log(selectedres, "selectedres");
  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className=" cursor-pointer flex flex-col place-items-start "
      >
        Back
      </div>
      <div>
        <div className=" flex flex-row justify-evenly ">
          <div className=" font-semibold text-2xl">
            {selectedres.name}
            <div className="font-medium text-sm text-gray flex flex-col  ">
              <div>Address:{selectedres.address}</div>
              <div>Phone:{selectedres.phone}</div>
              <div>AverageRating:{selectedres.averageRating}</div>
            </div>
          </div>
          <div>
            <button
              className=" rounded-lg bg-primary text-white px-3 py-1 m-3 cursor-pointer"
              onClick={() => setAddReview(true)}
            >
              Add Review
            </button>
          </div>
        </div>
        <hr />
        <div>
          <div className="  font-semibold text-lg">Reviews:</div>
          <div>
            {selectedres.ratings.map((rat) => (
              <div className=" flex flex-row justify-between    ">
                <div className="flex flex-col ">
                  <div className="flex flex-row">
                    <div className="  h-10 w-10">
                      <img src={rat.pp} alt="imh" className=" rounded-full" />
                    </div>
                    <div className=" font-semibold">{rat.revName}</div>
                  </div>
                  <div>{rat.comment}</div>
                </div>
                <div className="items-center">{rat.rating}*</div>
                <hr />
                {addreview && <AddReview resId={resId} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurentPage;
