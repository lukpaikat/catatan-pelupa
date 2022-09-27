import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';
import { ReactComponent as CatsDark } from '../assets/happy_cat_dark.svg';
import { ReactComponent as CatsLight } from '../assets/happy_cat_light.svg';

function LoginPage({ onloginSuccess }) {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const { theme } = React.useContext(ThemeContext);
  const handleLogin = async (user) => {
    setIsLoggingIn(() => true);
    const { error, data } = await login(user);

    if (!error) {
      onloginSuccess(data.accessToken);
    }
    setIsLoggingIn(() => false);
  };
  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className={`center-blue-container ${isLoggingIn && 'animate-cat'}`}>
        { theme === 'dark' ? <CatsLight className="w-full px-5 h-fit overflow-visible" /> : <CatsDark className="w-full px-5 h-fit overflow-visible" />}
        <h1 className="uppercase font-lato text-3xl drop-shadow-md text-center text-gray-text-color dark:text-white-text-color">Welcome</h1>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  onloginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
