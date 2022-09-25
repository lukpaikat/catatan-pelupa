import React from 'react';
import pageNotFoundIllustratioGreen from '../assets/undraw_page_not_found_green.svg';
import pageNotFoundIllustrationBlack from '../assets/undraw_page_not_found_black.svg';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';

function Page404() {
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);

  const pageDescription = locale === 'id' ? 'Eeeeits! Halaman yang kamu cari tidak ditemukan.' : 'Oops! We couldn\'t find The page that you are looking for.';
  const pageNotFoundIllustration = theme === 'light' ? pageNotFoundIllustrationBlack : pageNotFoundIllustratioGreen;

  return (
    <>
      <img className="w-[80%] max-w-sm md:max-w-md mx-auto mt-[10vh] animate__animated animate__fadeIn" src={pageNotFoundIllustration} alt="404" />
      <p className="text-gray-text-color semi-and-dark:text-white-text-color text-xl text-center mt-7 mb-[20vh]">{pageDescription}</p>
      {/* TODO: tambah tombol untuk kembali ke halaman catatan aktif/utama */}
    </>
  );
}

export default Page404;
