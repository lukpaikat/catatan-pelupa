import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt, BiArchive } from 'react-icons/bi';

function AppBar() {
  return (
    <header className="bg-black-background-color px-3 py-1 w-full flex items-center justify-between min-h-[44px] sticky z-10 top-0">
      <h1 className="my-2 text-xl 2xl:text-4xl font-bold text-white-text-color block">Catatan Pelupa</h1>
      <nav className="flex gap-3">
        <Link to="/"><BiHomeAlt className="text-4xl text-white-text-color" /></Link>
        <Link to="/archive"><BiArchive className="text-4xl text-white-text-color" /></Link>
      </nav>
    </header>
  );
}

export default AppBar;
