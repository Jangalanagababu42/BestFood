import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFood } from "../context/FoodContext";

function AddReview({ resId }) {
  const { addreview, setAddReview, dispatch } = useFood();
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    review: "",
  });

  const handleSubmit = () => {
    dispatch({
      type: "addreview",
      payload: { resId: { resId }, reviewdata: { id: uuid(), ...formData } },
    });
    setAddReview(false);
    console.log(formData, "formData");
  };
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed p-4 left-0 top-0 right-0 h-screen z-50 flex justify-center items-center bg-backgrounddim">
      <div className="w-2/5 md:w-2/6 sm:w-full flex flex-col bg-white rounded-lg ">
        <div className=" flex  justify-between">
          <p className=" font-semibold  text-xl ml-5 mt-2 p-2">
            Add Your Review{" "}
          </p>

          <button
            onClick={() => setAddReview(false)}
            className="mr-5 mt-2 p-2  text-2xl"
          >
            <FontAwesomeIcon icon={faXmark} style={{ color: "red" }} />
          </button>
        </div>
        <div>
          <form>
            <div>
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div>
              <label for="review">Add review:</label>
              <textarea
                type="text"
                id="review"
                name="review"
                value={formData.review}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div>
              <label for="rating">Rating</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              >
                <optgroup label="choose rating">
                  Choose
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </optgroup>
              </select>
            </div>
            <button onClick={() => handleSubmit()}>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddReview;
