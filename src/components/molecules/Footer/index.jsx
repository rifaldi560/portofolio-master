import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../../assets';

export const Footer = () => {
  return (
    <footer className="container mx-auto max-width pb-10 pt-10 mt-20">
      <div className="flex justify-between items-center py-2">
        <NavLink to="/">
          <img className="w-12" src={logo} alt="logo" />
        </NavLink>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <hr className="my-4" />
    </footer>
  );
};
