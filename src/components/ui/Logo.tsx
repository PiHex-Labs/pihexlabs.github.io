import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white" className="dark:fill-black"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white" className="dark:fill-black"/>
          <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white" className="dark:fill-black"/>
        </svg>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-black dark:text-white">PIHEX</span>
        <span className="text-2xl font-bold text-black dark:text-white flex items-center">
          L
          <svg className="inline-block mx-0.5" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L11.1962 10.5H0.803848L6 0Z" />
          </svg>
          BS
        </span>
      </div>
    </div>
  );
}