import React from 'react';
import PropTypes from 'prop-types';
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
    passwordPlaceholder, passwordRepeatPlaceholder, register,
  } = dictionary[locale];

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (password === passwordRepeat) {
      handleRegister({ name, email, password });
      // TODO: add alert success register
    } else {
      // TODO: tambah custom alert?
      // bisa pakai
      // https://www.npmjs.com/package/react-alert
      // https://github.com/gusrb3164/react-custom-alert
      // https://rc-toastr.vercel.app/
      // eslint-disable-next-line no-alert
      alert('Your password does not match');
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
      <h2 className={`text-gray-text-color text-center dark:text-white-text-color ${isRegistering && 'animate-pulse'}`}>
        {isRegistering ? registering : registerHere}
      </h2>
      {/* TODO: translate this title */}
      <input
        title={nameTitle}
        type="text"
        placeholder={yourNameHere}
        value={name}
        onChange={setName}
        className="lowercase"
      />
      <input
        title={emailTitle}
        type="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={setEmail}
      />
      <input
        minLength={6}
        title={passwordTitle}
        type="password"
        placeholder={passwordPlaceholder}
        value={password}
        onChange={setPassword}
        className="lowercase"
      />
      <input
        minLength={6}
        title={passwordRepeatPlaceholder}
        type="password"
        placeholder={passwordRepeatPlaceholder}
        value={passwordRepeat}
        onChange={setPasswordRepeat}
        className="lowercase"
      />
      {/* TODO: translate this */}
      <button title="Register" className="px-4 py-2 bg-orange-300" type="submit">{register}</button>
    </form>
  );
}

RegistrationForm.propTypes = {
  isRegistering: PropTypes.bool.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
