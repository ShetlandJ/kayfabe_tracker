import React, { useState } from 'react';
import useDarkMode from '../context/useDarkMode';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar () {
  // const [colorTheme] = useDarkMode();
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="w-full px-6 mx-auto flex dark:bg-black items-center justify-between">
      <ul className="list-reset flex pt-4">
        <li className="px-2">
          <Link to=""
            className="no-underline text-gray-700 dark:text-white uppercase font-thin"
          >
            Kayfabe tracker 2
          </Link>
        </li>
      </ul>

      <ul className="list-reset flex pt-4 text-gray-700 dark:text-white">
        <li className="px-4 py-2">
          <Link to="/login"
            className="no-underline font-medium text-grey-darker"
          >
            Login
          </Link>
        </li>

        <li className="px-4 py-2">
          <button onClick={() => setTheme(colorTheme)}>
            {colorTheme === 'dark' && (
              <FontAwesomeIcon icon={faMoon} />
            )}

            {colorTheme === 'light' && (
              <FontAwesomeIcon icon={faSun} />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
