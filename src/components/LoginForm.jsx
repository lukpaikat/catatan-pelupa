import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginForm({ handleLogin }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    handleLogin({ email, password });
  };

  return (
    <form className="flex flex-col gap-4 bg-sky-500 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" onSubmit={handleOnSubmit}>
      <h1 className="semi-and-dark:text-white-text-color">Halaman Login</h1>
      <input title="email" type="email" value={email} onChange={setEmail} />
      <input title="password" type="password" value={password} onChange={setPassword} />
      <button className="px-4 py-2 bg-orange-300" type="submit">Masuk</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
