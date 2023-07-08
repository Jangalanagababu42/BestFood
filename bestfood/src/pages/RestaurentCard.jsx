import React from "react";
import MenuCard from "./MenuCard";
import { useNavigate } from "react-router";

function RestaurentCard({ res }) {
  console.log(res, "res");
  const navigate = useNavigate();
  //   navigate(`/post/${post._id}`)

  return (
    <div className="m-5 p-5 flex flex-col place-items-start">
      <div
        className=" font-semibold text-primary text-xl cursor-pointer"
        onClick={() => navigate(`/restaurent/${res.id}`)}
      >
        Dishes By {res.name}
      </div>
      <div
        className=" font-medium text-sm text-gray mb-5 cursor-pointer"
        onClick={() => navigate(`/restaurent/${res.id}`)}
      >
        -{res.description}
      </div>
      <div className="flex flex-row gap-4">
        {res.menu.length > 0 &&
          res.menu.map((item) => <MenuCard item={item} resname={res.name} />)}
      </div>
    </div>
  );
}

export default RestaurentCard;
