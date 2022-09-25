import React from 'react';
import { HOME, ARCHIVE } from '../config/paths';
import ThemeMenuButton from './buttons/ThemeMenuButton';
import ThemeMenuContainer from './ThemeMenuContainer';
import NavLinkArchive from './buttons/NavLinkArchive';
import LocaleToggleButton from './buttons/LocaleToggleButton';
import LocaleContext from '../contexts/LocaleContext';
import NavLinkPushPin from './buttons/NavLinkPushPin';
import HamMenu from './HamMenu';
import dictionary from '../languages/dictionary';
import HamMenuButton from './buttons/HamMenuButton';

function AppBar() {
  // TODO: tambahkan drawer menu untuk mobile sampai 1024px
  const [isThemeMenuDisplayed, setIsThemeMenuDisplayed] = React.useState(false);
  const [isHamMenuDisplayed, setIsHamMenuDisplayed] = React.useState(false);

  const { locale } = React.useContext(LocaleContext);

  const themeMenuHider = () => {
    setIsThemeMenuDisplayed(() => false);
  };

  const hamMenuHider = () => {
    setIsHamMenuDisplayed(() => false);
  };

  const themeMenuToggler = () => {
    setIsThemeMenuDisplayed((prevState) => !prevState);
    hamMenuHider();
  };

  const hamMenuToggler = () => {
    setIsHamMenuDisplayed((prevState) => !prevState);
    themeMenuHider();
  };

  // TODO: buat tombol hamburger

  return (
    <header className="bg-white-background-color dark:bg-black-background-color semi-dark:bg-black-background-color px-3 py-1 w-full flex items-center justify-between min-h-[44px] sticky z-10 top-0">
      <h1 className="my-2 text-lg 2xl:text-4xl font-bold text-gray-text-color semi-and-dark:text-white-text-color block">{dictionary[locale].appTitle}</h1>
      <div className="flex gap-1 relative">
        <nav className="flex gap-1">
          <NavLinkPushPin to={HOME} end />
          <NavLinkArchive to={ARCHIVE} />
        </nav>
        <div className="w-px rounded-md bg-gray-text-color semi-and-dark:bg-white-text-color my-1 opacity-30" />
        <LocaleToggleButton />
        <ThemeMenuButton onClick={themeMenuToggler} />
        <ThemeMenuContainer
          themeMenuHider={() => themeMenuHider()}
          themeMenuToggler={themeMenuToggler}
          isThemeMenuDisplayed={isThemeMenuDisplayed}
        />
        <HamMenuButton onClick={hamMenuToggler} />
        <HamMenu isDisplayed={isHamMenuDisplayed} hamMenuHider={hamMenuHider} />
      </div>
    </header>
  );
}

export default AppBar;
