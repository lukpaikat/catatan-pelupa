import React from 'react';
import pageNotFoundIllustratioGreen from '../assets/undraw_page_not_found_green.svg';
import pageNotFoundIllustrationBlack from '../assets/undraw_page_not_found_black.svg';
import ThemeContext from '../contexts/ThemeContext';

function Page404() {
  const { theme } = React.useContext(ThemeContext);

  const pageNotFoundIllustration = theme === 'light' ? pageNotFoundIllustrationBlack : pageNotFoundIllustratioGreen;

  return (
    <>
      <img className="w-[80%] max-w-sm md:max-w-md mx-auto mt-[10vh] animate__animated animate__fadeIn" src={pageNotFoundIllustration} alt="404" />
      {/* TODO: translate ini */}
      <p className="text-gray-text-color semi-and-dark:text-white-text-color text-xl text-center mt-7 mb-[20vh]">Halaman yang kamu cari tidak ditemukan</p>
    </>
  );
}

export default Page404;
