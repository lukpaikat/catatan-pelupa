import React from 'react';

// NOTE: pakai aria-live:"polite" dan aria-busy:"true"
function NoteCardSkeleton() {
  return (
    <div
      className="flex flex-col rounded-lg px-4 py-5 my-2 md:my-0
    text-black-text-color bg-gray-200 semi-and-dark:bg-gray-700 animate-pulse"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-6 mb-2 w-5/6 bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
      />
      <div
        className="h-3 mb-4 w-1/2 bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
      />
      <div className="flex mb-4 justify-between mt-auto flex-wrap gap-2">
        <div
          className="h-4 w-full bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
        />
        <div
          className="h-4 w-full bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
        />
        <div
          className="h-4 w-1/2 bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-auto flex-wrap gap-2">
        <div
          className="h-11 w-20 bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
        />
        <div
          className="h-11 w-20 bg-gray-300 semi-and-dark:bg-gray-500 rounded-lg"
        />
      </div>
    </div>
  );
}

export default NoteCardSkeleton;
