import React from 'react';
import PropTypes from 'prop-types';
import { User, At, Key } from 'phosphor-react';
import { toast } from 'react-toastify';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';

function RegistrationForm({ handleRegister, isRegistering }) {
  const { locale } = React.useContext(LocaleContext);
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordRepeat, setPasswordRepeat] = useInput('');
  const {
    registerHere, registering, yourNameHere, name: nameTitle,
    email: emailTitle, emailPlaceholder, passwordTitle,
    passwordPlaceholder, passwordRepeatPlaceholder, register, passwordDontMatch,
  } = dictionary[locale];

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (password === passwordRepeat) {
      handleRegister({ name, email, password });
    } else {
      toast.error(`${passwordDontMatch}`);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col my-4 gap-4">
      <h2 className={`text-gray-text-color text-center dark:text-white-text-color ${isRegistering && 'animate-pulse'}`}>
        {isRegistering ? registering : registerHere}
      </h2>
      <div className="flex items-center bg-white-background-color dark:bg-gray-600 px-1 rounded-lg shadow">
        <User className="shrink-0 mx-1 text-gray-text-color dark:text-white-text-color opacity-50" />
        <input
          title={nameTitle}
          type="text"
          placeholder={yourNameHere}
          value={name}
          onChange={setName}
          className="grow py-3 px-2 bg-transparent text-gray-text-color dark:text-white-text-color lowercase"
        />
      </div>
      <div className="flex items-center bg-white-background-color dark:bg-gray-600 px-1 rounded-lg shadow">
        <At className="shrink-0 mx-1 text-gray-text-color dark:text-white-text-color opacity-50" />
        <input
          title={emailTitle}
          type="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={setEmail}
          className="grow py-3 px-2 bg-transparent text-gray-text-color dark:text-white-text-color"
        />
      </div>
      <div className="flex items-center bg-white-background-color dark:bg-gray-600 px-1 rounded-lg shadow">
        <Key className="shrink-0 mx-1 text-gray-text-color dark:text-white-text-color opacity-50" />
        <input
          minLength={6}
          title={passwordTitle}
          type="password"
          placeholder={passwordPlaceholder}
          value={password}
          onChange={setPassword}
          className="grow py-3 px-2 bg-transparent text-gray-text-color dark:text-white-text-color lowercase"
        />
      </div>
      <div className="flex items-center bg-white-background-color dark:bg-gray-600 px-1 rounded-lg shadow">
        <Key className="shrink-0 mx-1 text-gray-text-color dark:text-white-text-color opacity-50" />
        <input
          minLength={6}
          title={passwordRepeatPlaceholder}
          type="password"
          placeholder={passwordRepeatPlaceholder}
          value={passwordRepeat}
          onChange={setPasswordRepeat}
          className="grow py-3 px-2 bg-transparent text-gray-text-color dark:text-white-text-color lowercase"
        />
      </div>
      <button className="p-3 bg-orange-note-color dark:bg-orange-dark-note-color text-gray-text-color dark:text-white-text-color rounded-lg font-bold shadow active:shadow-sm active:translate-y-[1px]" type="submit">{register}</button>
    </form>
  );
}

RegistrationForm.propTypes = {
  isRegistering: PropTypes.bool.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
