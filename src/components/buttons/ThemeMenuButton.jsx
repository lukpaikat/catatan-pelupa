import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import ThemeContext from '../../contexts/ThemeContext';
import camelCaseStr from '../../utils/camelCaseStr';

function ThemeMenuButton({ title, themeMenuHandler }) {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  const camelCasedTitle = camelCaseStr(title);

  const setCurrentTheme = () => {
    changeTheme(camelCasedTitle);
    themeMenuHandler();
  };

  const opacityClass = theme === camelCasedTitle ? 'opacity-100' : 'opacity-25 hover:opacity-90 focus:opacity-90';

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
  themeMenuHandler: PropTypes.func.isRequired,
};

export default ThemeMenuButton;
