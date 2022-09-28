import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pageNotFoundIllustratioGreen from '../assets/undraw_page_not_found_green.svg';
import pageNotFoundIllustrationBlack from '../assets/undraw_page_not_found_black.svg';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';
import { HOME } from '../config/paths';

function Page404({ message }) {
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);

  const pageDescription = message || dictionary[locale].message404;
  const pageNotFoundIllustration = theme === 'light' ? pageNotFoundIllustrationBlack : pageNotFoundIllustratioGreen;

  return (
    <>
      <img className="w-[80%] max-w-sm md:max-w-md mx-auto mt-[10vh] animate__animated animate__fadeIn" src={pageNotFoundIllustration} alt="404" />
      <p
        className="text-gray-text-color semi-and-dark:text-white-text-color text-xl text-center mt-7
        lg:text-xl 2xl:text-2xl"
      >
        {pageDescription}

      </p>
      {/* TODO: ganti warna oren */}
      <Link
        to={HOME}
        className="text-orange-600 semi-and-dark:text-orange-400 text-xl text-center mt-7
        lg:text-xl 2xl:text-2xl mb-[10vh] block mx-auto"
      >
        {dictionary[locale].backToHomePage}
        <br />
        (^-^*)
      </Link>
    </>
  );
}

Page404.propTypes = {
  message: PropTypes.string,
};

Page404.defaultProps = {
  message: null,
};

export default Page404;
