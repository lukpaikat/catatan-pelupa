import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import camelCaseStr from '../../utils/camelCaseStr';

function ThemeMenuButton({ title, currentTheme, setCurrentTheme }) {
  // TODO: mungkin pindah ke container supaya tidak memanggil use context
  // berkali-kali
  const camelCasedTitle = camelCaseStr(title);

  const opacityClass = currentTheme === camelCasedTitle ? 'opacity-100' : 'opacity-25 hover:opacity-90 focus:opacity-90';

  return (
    <button onClick={setCurrentTheme} type="button" className={`flex gap-2 p-2 min-w-[150px] hover:bg-gray-600 rounded-lg ${opacityClass}`}>
      {title === 'Dark' && <Moon className="text-3xl text-white-text-color" />}
      {title === 'Light' && <Sun className="text-3xl text-white-text-color" />}
      {title === 'Semi Dark' && <SunHorizon className="text-3xl text-white-text-color" />}
      <span className="text-white-text-color">{title}</span>
    </button>
  );
}

ThemeMenuButton.propTypes = {
  title: PropTypes.oneOf(['Dark', 'Light', 'Semi Dark']).isRequired,
  setCurrentTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default ThemeMenuButton;
