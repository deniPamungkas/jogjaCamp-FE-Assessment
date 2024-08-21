import React from "react";

const Card = () => {
  return (
    <div className="h-[200px] rounded-xl border-2 p-5 flex flex-col justify-between">
      <div className="text-base">
        <p>Frontend</p>
      </div>
      <div className="text-sm font-normal">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad delectus
          iusto labore cum praesentium eos quos ab,
        </p>
      </div>
      <div className="text-sm">
        <p>Last updated 5 mins ago</p>
      </div>
    </div>
  );
};

export default Card;
