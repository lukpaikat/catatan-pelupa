import React from 'react';
import PropTypes from 'prop-types';
import { Envelope, Key } from 'phosphor-react';
import useInput from '../hooks/useInput';
import dictionary from '../languages/dictionary';
import LocaleContext from '../contexts/LocaleContext';

function LoginForm({ handleLogin, isLoggingIn }) {
  const { locale } = React.useContext(LocaleContext);
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const {
    logInHere, logIn, loggingIn, password: passwordTitle, email: emailTitle,
  } = dictionary[locale];

  const handleOnSubmit = (event) => {
    event.preventDefault();

    handleLogin({ email, password });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col my-4 gap-4">
      <h2
        className={`text-gray-text-color text-center dark:text-white-text-color ${isLoggingIn && 'animate-pulse'}`}
      >
        {isLoggingIn ? loggingIn : logInHere}
      </h2>
      <div className="flex items-center bg-white-background-color dark:bg-gray-600 px-1 rounded-lg shadow">
        <Envelope className="shrink-0 mx-1 text-gray-text-color dark:text-white-text-color opacity-50" />
        <input
          title={emailTitle}
          placeholder={emailTitle}
          type="email"
          value={email}
          onChange={setEmail}
          className="grow py-3 px-2 bg-transparent text-gray-text-color dark:text-white-text-color lowercase"
        />
      </div>
      <div className="flex items-center bg-white-background-color dark:bg-gray-600 px-1 rounded-lg shadow">
        <Key className="shrink-0 mx-1 text-gray-text-color dark:text-white-text-color opacity-50" />
        <input
          autoComplete="on"
          title={passwordTitle}
          placeholder={passwordTitle}
          type="password"
          value={password}
          onChange={setPassword}
          className="grow py-3 px-2 bg-transparent text-gray-text-color dark:text-white-text-color lowercase"
        />
      </div>
      <button className="p-3 bg-orange-note-color dark:bg-orange-dark-note-color text-gray-text-color dark:text-white-text-color rounded-lg font-bold shadow active:shadow-sm active:translate-y-[1px]" type="submit">{logIn}</button>
    </form>
  );
}

LoginForm.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
