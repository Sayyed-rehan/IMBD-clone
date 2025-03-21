import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

  let path = '../../imdbLogo.png'
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to="/" className="">
        <img src={path} alt="imdb-logo"  className="w-[70px]"/>
      </Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/">Movies</Link>
      <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
