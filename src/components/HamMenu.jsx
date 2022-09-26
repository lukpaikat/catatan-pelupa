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
  isDisplayed, hamMenuHider, authedUserName,
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
        shadow-md rounded-lg lg:hidden transition-all"
        >
          {authedUserName && (
          <h1 className="p-2 text-gray-text-color text-center semi-and-dark:text-white-text-color break-words">
            Catatan
            <br />
            {authedUserName}
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
            { authedUserName
              ? (
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
              )
              : (
                <>
                  <li>
                    <HamItemNavLink
                      to={HOME}
                      title="Log In"
                      displayTitle="Log In"
                      end
                      icon={<SignIn />}
                    />
                  </li>
                  <li>
                    <HamItemNavLink
                      to={REGISTER}
                      title="Register"
                      displayTitle="Register"
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
};

HamMenu.defaultProps = {
  authedUserName: null,
};

export default HamMenu;
