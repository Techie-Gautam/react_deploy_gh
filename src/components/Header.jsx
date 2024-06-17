import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from "../hooks/useWindowSize";

function Header({ title }) {
  const { width } = useWindowSize()
  return (
    <header className="bg-blue-400 w-full p-3 font-semibold text-3xl flex justify-between items-center">
      {title}
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
          : <FaLaptop />}
    </header>
  )
}

export default Header;
