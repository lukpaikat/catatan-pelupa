import React from 'react';
import PropTypes from 'prop-types';
import {
  PushPin, Archive, Translate, SignOut, SignIn, UserCirclePlus,
} from 'phosphor-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HamItemNavLink from './buttons/HamItemNavLink';
import { HOME, ARCHIVE, REGISTER } from '../config/paths';
import HamItemButton from './buttons/HamItemButton';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';

function HamMenu({
  isDisplayed, hamMenuHider, authedUserName, onLogOut,
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
    <TransitionGroup className="absolute top-full w-[80vw] max-w-[220px] right-0 mt-2">
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
        shadow-md rounded-lg transition-all"
        >
          {authedUserName && (
            <>
              <h1 className="p-2 text-gray-text-color text-center semi-and-dark:text-white-text-color break-words">
                {dictionary[locale].notesOf}
                <br />
                {authedUserName}
              </h1>
              <div className="h-px bg-gray-text-color semi-and-dark:bg-white-text-color opacity-20 mx-4" />
            </>
          )}
          <ul className="flex gap-1 flex-col transition-all p-1 w-full">
            {authedUserName && (
              <>
                <li className="lg:hidden">
                  <HamItemNavLink
                    onClick={hamMenuHider}
                    to={HOME}
                    title={dictionary[locale].activeNotesPageSR}
                    end
                    displayTitle={dictionary[locale].activeNotes}
                    icon={<PushPin />}
                  />
                </li>
                <li className="lg:hidden">
                  <HamItemNavLink
                    onClick={hamMenuHider}
                    to={ARCHIVE}
                    title={dictionary[locale].archiveSR}
                    displayTitle={dictionary[locale].archivedNotes}
                    icon={<Archive />}
                  />
                </li>
                <div className="h-px bg-gray-text-color semi-and-dark:bg-white-text-color opacity-20 mx-4 lg:hidden" />
              </>
            )}
            <li className="lg:hidden">
              <HamItemButton
                icon={<Translate />}
                title={dictionary[locale].toggleLanguage}
                onClick={() => {
                  hamMenuHider();
                  localeToggle();
                }}
              />
            </li>
            <div className="h-px bg-gray-text-color semi-and-dark:bg-white-text-color opacity-20 mx-4 lg:hidden" />
            { authedUserName
              ? (
                <li>
                  <HamItemButton
                    icon={<SignOut />}
                    title={dictionary[locale].logOut}
                    onClick={() => {
                      onLogOut();
                      hamMenuHider();
                    }}
                  />
                </li>
              )
              : (
                <>
                  <li>
                    <HamItemNavLink
                      onClick={hamMenuHider}
                      to={HOME}
                      title={dictionary[locale].logIn}
                      displayTitle={dictionary[locale].logIn}
                      end
                      icon={<SignIn />}
                    />
                  </li>
                  <li>
                    <HamItemNavLink
                      onClick={hamMenuHider}
                      to={REGISTER}
                      title={dictionary[locale].register}
                      displayTitle={dictionary[locale].register}
                      icon={<UserCirclePlus />}
                    />
                  </li>
                </>
              )}
          </ul>
        </div>
      </CSSTransition>
      )}
    </TransitionGroup>
  );
}

HamMenu.propTypes = {
  authedUserName: PropTypes.string,
  isDisplayed: PropTypes.bool.isRequired,
  hamMenuHider: PropTypes.func.isRequired,
  onLogOut: PropTypes.func,
};

HamMenu.defaultProps = {
  authedUserName: null,
  onLogOut: null,
};

export default HamMenu;
