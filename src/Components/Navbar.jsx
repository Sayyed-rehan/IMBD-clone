import React from "react";
import { Link } from "react-router-dom";
import imdb_logo from "../../public/imdblogo.png"

const Navbar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to="/" className="">
        <img src={imdb_logo} alt="imdb-logo"  className="w-[70px]"/>
      </Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/">Movies</Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
