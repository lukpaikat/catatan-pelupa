import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';
import { ReactComponent as CatsDark } from '../assets/happy_cat_dark.svg';
import { ReactComponent as CatsLight } from '../assets/happy_cat_light.svg';
import { REGISTER } from '../config/paths';
import dictionary from '../languages/dictionary';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ onloginSuccess }) {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const { theme } = React.useContext(ThemeContext);
  const { locale } = React.useContext(LocaleContext);
  const { welcome, registerHere, logInFailed } = dictionary[locale];

  const handleLogin = async (user) => {
    setIsLoggingIn(() => true);
    const { error, data, message } = await login(user);

    if (!error) {
      onloginSuccess(data.accessToken);
    } else {
      toast.error(`${logInFailed}: ${message}`);
      setIsLoggingIn(() => false);
    }
  };
  return (
    <div className="h-[80vh] min-h-fit flex flex-col my-8">
      <div
        className={`flex flex-col gap-4 bg-sky-200 dark:bg-gray-700
        m-auto rounded-lg w-[90vw] max-w-3xl shadow-md pause animate-cat ${isLoggingIn && 'play'}`}
      >
        <div className="p-4 mx-auto my-16">
          { theme === 'dark'
            ? <CatsLight className="w-[80%] mx-auto px-5 h-fit overflow-visible" />
            : <CatsDark className="w-[80%] mx-auto px-5 h-fit overflow-visible" />}
          <h1
            className="uppercase font-lato text-3xl sm:text-6xl drop-shadow-md mt-4
          text-center text-gray-text-color dark:text-white-text-color"
          >
            {welcome}
          </h1>
          <LoginForm handleLogin={handleLogin} isLoggingIn={isLoggingIn} />
          <p className="text-gray-text-color dark:text-white-text-color text-center my-4">
            {dictionary[locale].dontHaveAccount}
            {' '}
            <Link className="text-orange-600 dark:text-orange-400 underline" to={REGISTER}>{registerHere}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  onloginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
