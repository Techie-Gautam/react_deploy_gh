import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../context/DataContext";

function Nav() {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="bg-gray-700 w-full p-3 flex items-center justify-between">
      <form
        className="w-[90%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 rounded w-[80%]"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex text-white">
        <li key="home">
          <NavLink
            to="/"
            className={({ isActive }) => `py-3 px-3 duration-200 ${isActive ? "text-blue-400" : "text-white"}`}
          >
            Home
          </NavLink>
        </li>
        <li key="new-post">
          <NavLink
            to="/post"
            className={({ isActive }) => `py-3 px-3 duration-200 ${isActive ? "text-blue-400" : "text-white"}`}
          >
            Post
          </NavLink>
        </li>
        <li key="about">
          <NavLink
            to="/about"
            className={({ isActive }) => `py-3 px-3 duration-200 ${isActive ? "text-blue-400" : "text-white"}`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
