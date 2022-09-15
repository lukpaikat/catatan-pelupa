import React from 'react';
import { NavLink } from 'react-router-dom';
import { House, Archive } from 'phosphor-react';

function AppBar() {
  const NavLinkActiveClass = (isActive) => {
    const defaultNavLinkClass = 'hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-400 rounded-md min-h-[44px] min-w-[44px] flex transition-colors duration-300';
    const activeClass = isActive ? 'bg-gray-600' : 'bg-transparent';

    return `${activeClass} ${defaultNavLinkClass}`;
  };

  return (
    <header className="bg-black-background-color px-3 py-1 w-full flex items-center justify-between min-h-[44px] sticky z-10 top-0">
      <h1 className="my-2 text-xl 2xl:text-4xl font-bold text-white-text-color block">Catatan Pelupa</h1>
      <nav className="flex gap-3">
        <NavLink className={({ isActive }) => NavLinkActiveClass(isActive)} to="/">
          <House className="text-3xl text-white-text-color m-auto" weight="light" />
        </NavLink>
        <NavLink className={({ isActive }) => NavLinkActiveClass(isActive)} to="/archive">
          <Archive className="text-3xl text-white-text-color m-auto" />
        </NavLink>
      </nav>
    </header>
  );
}

export default AppBar;
