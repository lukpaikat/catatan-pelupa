import React from 'react';
import { PushPin, Archive } from 'phosphor-react';
import { HOME, ARCHIVE } from '../config/paths';
import ThemeMenuButton from './buttons/ThemeMenuButton';
import ThemeMenuContainer from './ThemeMenuContainer';
import NavLinkButton from './buttons/NavLinkButton';

function AppBar() {
  const [isThemeMenuDisplayed, setIsThemeMenuDisplayed] = React.useState(false);

  const themeMenuToggler = () => {
    setIsThemeMenuDisplayed((prevState) => !prevState);
  };

  const menuOutsideClick = () => {
    setIsThemeMenuDisplayed(() => false);
  };

  return (
    <header className="bg-white-background-color dark:bg-black-background-color semi-dark:bg-black-background-color px-3 py-1 w-full flex items-center justify-between min-h-[44px] sticky z-10 top-0">
      <h1 className="my-2 text-xl 2xl:text-4xl font-bold text-gray-text-color semi-and-dark:text-white-text-color block">Catatan Pelupa</h1>
      <div className="flex gap-3 relative">
        <nav className="flex gap-3">
          <NavLinkButton to={HOME} end>
            <PushPin className="text-3xl block m-auto" weight="light" />
          </NavLinkButton>
          <NavLinkButton to={ARCHIVE}>
            <Archive className="text-3xl block m-auto" weight="light" />
          </NavLinkButton>
        </nav>
        <ThemeMenuButton onClick={themeMenuToggler} />
        <ThemeMenuContainer
          menuOutsideClick={() => menuOutsideClick()}
          themeMenuToggler={themeMenuToggler}
          isThemeMenuDisplayed={isThemeMenuDisplayed}
        />
      </div>
    </header>
  );
}

export default AppBar;
