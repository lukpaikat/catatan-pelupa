import React from 'react';
import PropTypes from 'prop-types';
import {
  PushPin, Archive, Translate, SignOut,
} from 'phosphor-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HamItemNavLink from './buttons/HamItemNavLink';
import { HOME, ARCHIVE } from '../config/paths';
import HamItemButton from './buttons/HamItemButton';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';

function HamMenu({ isDisplayed, hamMenuHider }) {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const menuOutsideClickHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        hamMenuHider();
      }
    };
    document.addEventListener('click', menuOutsideClickHandler);
    return () => {
      document.removeEventListener('click', menuOutsideClickHandler);
    };
  }, [isDisplayed]);

  return (
    <TransitionGroup className="absolute top-full right-0 mt-2">
      { isDisplayed
      && (
      <CSSTransition
        nodeRef={ref}
        in={isDisplayed}
        timeout={150}
        classNames="fade-in-slide"
      >
        <div
          ref={ref}
          className="bg-white-background-color semi-and-dark:bg-gray-700
        shadow-md rounded-lg lg:hidden transition-all"
        >
          <h1 className="p-2 text-gray-text-color text-center semi-and-dark:text-white-text-color">
            Catatan
            <br />
            User name
          </h1>
          <ul className="flex gap-1 flex-col transition-all p-1">
            <li>
              <HamItemNavLink
                to={HOME}
                aria-label={dictionary[locale].activeNotes}
                end
                title={dictionary[locale].activeNotes}
                icon={<PushPin />}
              />
            </li>
            <li>
              <HamItemNavLink
                to={ARCHIVE}
                aria-label={dictionary[locale].archiveNotes}
                end
                title={dictionary[locale].archiveNotes}
                icon={<Archive />}
              />
            </li>
            <div className="h-px bg-gray-text-color opacity-20 mx-4" />
            <li>
              <HamItemButton
                icon={<Translate />}
                title={dictionary[locale].toggleLanguage}
                onClick={localeToggle}
              />
            </li>
            <div className="h-px bg-gray-text-color opacity-20 mx-4" />
            <li>
              <HamItemButton
                icon={<SignOut />}
                title={dictionary[locale].logOut}
                onClick={() => {
                  console.log('test');
                  hamMenuHider();
                }}
              />
            </li>
          </ul>
        </div>
      </CSSTransition>
      )}
    </TransitionGroup>
  );
}

HamMenu.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  hamMenuHider: PropTypes.func.isRequired,
};

export default HamMenu;
