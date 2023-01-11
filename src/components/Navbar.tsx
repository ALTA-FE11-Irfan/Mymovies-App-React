import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../utils/themeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar bg-slate-200 dark:bg-neutral font-bold text-black dark:text-third drop-shadow-2xl py-4 px-4 md:px-8">
      {/* Mobile */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu bg-slate-200 dark:bg-neutral menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Now Playing</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center">
          <img src="https://i.ibb.co/HtQcbVm/cuthless-icon.png" alt="cuthless-icon" className="h-10" /> CUTHLESS
        </Link>
      </div>
      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/">Now Playing</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
      {/* Login Button */}
      <div className="navbar-end">
        <span className="btn border-0 bg-forth hover:btn-outline text-white" onClick={() => handleTheme()}>
          Theme
        </span>
      </div>
    </div>
  );
};

export default Navbar;
