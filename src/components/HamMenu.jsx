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

function HamMenu({
  isDisplayed, hamMenuHider, authedUserEmail, authedUserName,
}) {
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
        shadow-md rounded-lg lg:hidden transition-all w-[90vw] max-w-[220px]"
        >
          {authedUserName && (
          <h1 className="p-2 text-gray-text-color text-center semi-and-dark:text-white-text-color">
            Catatan
            <br />
            {authedUserName}
            <br />
            {authedUserEmail}
          </h1>
          )}
          <ul className="flex gap-1 flex-col transition-all p-1 w-full">
            {authedUserName && (
              <>
                <div className="h-px bg-gray-text-color semi-and-dark:bg-white-text-color opacity-20 mx-4" />
                <li>
                  <HamItemNavLink
                    to={HOME}
                    title={dictionary[locale].activeNotesPageSR}
                    end
                    displayTitle={dictionary[locale].activeNotes}
                    icon={<PushPin />}
                  />
                </li>
                <li>
                  <HamItemNavLink
                    to={ARCHIVE}
                    title={dictionary[locale].archiveSR}
                    displayTitle={dictionary[locale].archivedNotes}
                    icon={<Archive />}
                  />
                </li>
                <div className="h-px bg-gray-text-color semi-and-dark:bg-white-text-color opacity-20 mx-4" />
              </>
            )}
            <li>
              <HamItemButton
                icon={<Translate />}
                title={dictionary[locale].toggleLanguage}
                onClick={localeToggle}
              />
            </li>
            <div className="h-px bg-gray-text-color semi-and-dark:bg-white-text-color opacity-20 mx-4" />
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
  authedUserEmail: PropTypes.string,
  authedUserName: PropTypes.string,
  isDisplayed: PropTypes.bool.isRequired,
  hamMenuHider: PropTypes.func.isRequired,
};

HamMenu.defaultProps = {
  authedUserEmail: null,
  authedUserName: null,
};

export default HamMenu;
