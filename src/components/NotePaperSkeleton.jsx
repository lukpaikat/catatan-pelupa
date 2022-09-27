import React from 'react';

function NotePaperSkeleton() {
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className="py-2 px-6 w-full max-w-[700px]
      lg:max-w-[1000px] 2xl:max-w-[1300px]
      bg-gray-200 semi-and-dark:bg-gray-700
      mx-auto my-4 rounded-lg duration-150 min-h-[88vh] h-fit animate-pulse"
    >
      <div
        className="w-4/5 h-6 lg:h-9 2xl:h-14 bg-gray-300 semi-and-dark:bg-gray-500 my-4 rounded-lg"
      />
      <div
        className="w-3/5 h-4 lg:h-7 2xl:h-9 bg-gray-300 semi-and-dark:bg-gray-500 my-4 rounded-lg"
      />
      <div
        className="w-full h-5 lg:h-7 2xl:h-9 bg-gray-300 semi-and-dark:bg-gray-500 my-4 rounded-lg"
      />
      <div
        className="w-full h-5 lg:h-7 2xl:h-9 bg-gray-300 semi-and-dark:bg-gray-500 my-4 rounded-lg"
      />
      <div
        className="w-full h-5 lg:h-7 2xl:h-9 bg-gray-300 semi-and-dark:bg-gray-500 my-4 rounded-lg"
      />
      <div
        className="w-4/5 h-5 lg:h-7 2xl:h-9 bg-gray-300 semi-and-dark:bg-gray-500 my-4 rounded-lg"
      />
    </div>
  );
}

export default NotePaperSkeleton;
