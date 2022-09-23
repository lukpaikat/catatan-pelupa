import React from 'react';
import pageNotFoundIllustration from '../assets/undraw_page_not_found_green.svg';

function Page404() {
  return (
    <>
      <img className="w-[80%] max-w-sm md:max-w-md mx-auto mt-[10vh] animate__animated animate__fadeIn" src={pageNotFoundIllustration} alt="404 mountain" />
      <p className="text-white-text-color text-xl text-center mt-7 mb-[20vh]">Halaman yang kamu cari tidak ditemukan</p>
    </>
  );
}

export default Page404;
