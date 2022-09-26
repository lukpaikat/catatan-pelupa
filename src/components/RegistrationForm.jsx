import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegistrationForm({ handleRegister }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordRepeat, setPasswordRepeat] = useInput('');

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
      <h1 className="semi-and-dark:text-white-text-color">Halaman Registrasi</h1>
      {/* TODO: translate this title */}
      <input
        title="name"
        type="text"
        placeholder="your name here"
        value={name}
        onChange={setName}
      />
      <input
        title="email"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={setEmail}
      />
      <input
        minLength={6}
        title="password min. 6 characters"
        type="password"
        placeholder="min. 6 characters"
        value={password}
        onChange={setPassword}
      />
      <input
        minLength={6}
        title="repeat your pasword"
        type="password"
        placeholder="repeat your password"
        value={passwordRepeat}
        onChange={setPasswordRepeat}
      />
      {/* TODO: translate this */}
      <button title="Register" className="px-4 py-2 bg-orange-300" type="submit">Register</button>
    </form>
  );
}

RegistrationForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
