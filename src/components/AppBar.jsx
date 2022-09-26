import React from 'react';
import PropTypes from 'prop-types';
import { HOME, ARCHIVE } from '../config/paths';
import ThemeMenuButton from './buttons/ThemeMenuButton';
import ThemeMenu from './ThemeMenu';
import NavLinkArchive from './buttons/NavLinkArchive';
import LocaleToggleButton from './buttons/LocaleToggleButton';
import LocaleContext from '../contexts/LocaleContext';
import NavLinkPushPin from './buttons/NavLinkPushPin';
import HamMenu from './HamMenu';
import dictionary from '../languages/dictionary';
import HamMenuButton from './buttons/HamMenuButton';

function AppBar({ authedUserName, authedUserEmail }) {
  // TODO: sembunyikan navigasi dan locale di atas 1024px
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
    <header className="bg-white-background-color dark:bg-black-background-color semi-dark:bg-black-background-color px-3 py-1 w-full flex items-center justify-between min-h-[44px] sticky z-10 top-0">
      <h1 className="my-2 text-lg 2xl:text-4xl font-bold text-gray-text-color semi-and-dark:text-white-text-color block">{dictionary[locale].appTitle}</h1>
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
        <HamMenuButton onClick={hamMenuToggler} isHamMenuDisplayed={isHamMenuDisplayed} />
        <HamMenu
          isDisplayed={isHamMenuDisplayed}
          hamMenuHider={hamMenuHider}
          authedUserEmail={authedUserEmail}
          authedUserName={authedUserName}
        />
      </div>
    </header>
  );
}

AppBar.propTypes = {
  authedUserName: PropTypes.string,
  authedUserEmail: PropTypes.string,
};

AppBar.defaultProps = {
  authedUserName: null,
  authedUserEmail: null,
};

export default AppBar;
