import React from 'react';
import PropTypes from 'prop-types';
import { UserList, List } from 'phosphor-react';
import { HOME, ARCHIVE } from '../config/paths';
import dictionary from '../languages/dictionary';
// components
import ThemeMenu from './ThemeMenu';
import HamMenu from './HamMenu';
// button components
import ThemeMenuButton from './buttons/ThemeMenuButton';
import MenuButton from './buttons/MenuButton';
import NavLinkArchive from './buttons/NavLinkArchive';
import LocaleContext from '../contexts/LocaleContext';
import LocaleToggleButton from './buttons/LocaleToggleButton';
import NavLinkPushPin from './buttons/NavLinkPushPin';

function AppBar({ authedUserName, onLogOut }) {
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

  return (
    <header className="bg-white-background-color dark:bg-black-background-color
    semi-dark:bg-black-background-color px-3 py-1 w-full flex
    items-center justify-between min-h-[44px] sticky z-10 top-0"
    >
      <h1 className="my-2 text-lg 2xl:text-4xl font-bold text-gray-text-color
       semi-and-dark:text-white-text-color block"
      >
        {dictionary[locale].appTitle}
      </h1>
      <div className="flex gap-1 relative">
        { authedUserName
        && (
        <nav className="gap-1 hidden lg:flex">
          <NavLinkPushPin to={HOME} end />
          <NavLinkArchive to={ARCHIVE} />
          <div className="w-px rounded-md bg-gray-text-color semi-and-dark:bg-white-text-color my-1 opacity-30" />
        </nav>
        )}
        <LocaleToggleButton />
        <ThemeMenuButton
          onClick={themeMenuToggler}
          isThemeMenuDisplayed={isThemeMenuDisplayed}
        />
        <ThemeMenu
          themeMenuHider={() => themeMenuHider()}
          themeMenuToggler={themeMenuToggler}
          isThemeMenuDisplayed={isThemeMenuDisplayed}
        />
        <MenuButton
          // elemen ini tidak bisa pakai class hidden
          title={dictionary[locale].userMenu}
          onClick={hamMenuToggler}
          className="fixed invisible -top-[200%] lg:static lg:visible"
          icon={(
            <UserList
              weight="light"
              className="text-3xl 2xl:text-5xl text-gray-text-color
          hover:text-black-text-color semi-and-dark:text-white-text-color m-auto"
            />
          )}
          isMenuDisplayed={isHamMenuDisplayed}
        />
        <MenuButton
          title={dictionary[locale].menu}
          onClick={hamMenuToggler}
          className="lg:fixed lg:invisible lg:-top-[200%]"
          icon={(
            <List
              weight="light"
              className="text-3xl 2xl:text-5xl text-gray-text-color
          hover:text-black-text-color semi-and-dark:text-white-text-color m-auto"
            />
          )}
          isMenuDisplayed={isHamMenuDisplayed}
        />
        <HamMenu
          isDisplayed={isHamMenuDisplayed}
          hamMenuHider={hamMenuHider}
          authedUserName={authedUserName}
          onLogOut={onLogOut}
        />
      </div>
    </header>
  );
}

AppBar.propTypes = {
  authedUserName: PropTypes.string,
  onLogOut: PropTypes.func,
};

AppBar.defaultProps = {
  authedUserName: null,
  onLogOut: null,
};

export default AppBar;
