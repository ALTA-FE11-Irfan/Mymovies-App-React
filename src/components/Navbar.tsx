import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-neutral font-bold text-third drop-shadow-2xl py-4 px-4 md:px-8">
        {/* Mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Now Playing</a>
              </li>
              <li>
                <a>Favorites</a>
              </li>
            </ul>
          </div>
          <a className="text-xl flex items-center">
            <img src="src/assets/cuthless-icon.png" alt="cuthless-icon" className="h-10" /> CUTHLESS
          </a>
        </div>
        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>Now Playing</a>
            </li>
            <li>
              <a>Favorites</a>
            </li>
          </ul>
        </div>
        {/* Login Button */}
        <div className="navbar-end">
          <a className="btn bg-third hover:btn-outline text-white">LOGIN</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
