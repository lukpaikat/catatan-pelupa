import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

// TODO: fix width responsiveness
// THE BUG: it stays the same size when resizing

function LoginForm({ handleLogin }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    handleLogin({ email, password });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
      <h2 className="text-gray-text-color text-center text-2xl semi-and-dark:text-white-text-color">Halaman Login</h2>
      {/* TODO: translateable placeholder ? */}
      {/* TODO: style input box */}
      <input title="email" placeholder="email" type="email" value={email} onChange={setEmail} />
      {/* TODO: translate password jd kata kunci */}
      <input title="password" placeholder="password" type="password" value={password} onChange={setPassword} />
      {/* TODO: style button */}
      <button title="Log in" className="px-4 py-2 bg-orange-300" type="submit">Masuk</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
