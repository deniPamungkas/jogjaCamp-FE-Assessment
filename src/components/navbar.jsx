import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[50px] border-b-2 px-5 py-2 xl:px-52">
      <span className="text-2xl font-bold">
        <Link to={"/"}>Frontend.</Link>
      </span>
    </nav>
  );
};

export default Navbar;
