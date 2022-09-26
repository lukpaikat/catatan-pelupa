import React from 'react';
import useInput from '../hooks/useInput';

function LoginForm() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(`email: ${email}\npassword:${password}`);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <h1 className="semi-and-dark:text-white-text-color">Halaman Login</h1>
      <input title="email" type="email" value={email} onChange={setEmail} />
      <input title="password" type="password" value={password} onChange={setPassword} />
      <button type="submit">Masuk</button>
    </form>
  );
}

export default LoginForm;
