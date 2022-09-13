import React from 'react';
import cat404 from '../assets/cat404.svg';

function Page404() {
  return (
    <>
      <img className="w-full max-w-sm md:max-w-md mx-auto mt-[10vh]" src={cat404} alt="404 cat" />
      <h1 className="text-white-text-color font-extrabold text-6xl text-center">404</h1>
      <p className="text-white-text-color text-xl text-center mb-[20vh]">Halaman yang kamu cari tidak ditemukan</p>
    </>
  );
}

export default Page404;
