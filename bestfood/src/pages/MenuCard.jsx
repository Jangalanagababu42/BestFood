import React from "react";

function MenuCard({ item, resname }) {
  return (
    <div
      className=" rounded-lg pb-5"
      style={{
        listStyle: "none",
        boxShadow: "5px 10px 8px #888888",
        display: "inline-block",
        margin: "10px",
      }}
    >
      <img src={item.imgSrc} className=" h-52 w-60" alt="img" />
      <div className="flex flex-col place-items-start ml-4">
        <h3 className="font-semibold text-lg ">{item.name}</h3>
        <p className=" text-gray">Price:${item.price}.00</p>
        <p className=" text-gray">{resname}</p>
      </div>
    </div>
  );
}

export default MenuCard;
