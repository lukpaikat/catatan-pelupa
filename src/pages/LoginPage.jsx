import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/network-data';

function LoginPage({ onloginSuccess }) {
  const handleLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      onloginSuccess(data.accessToken);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

LoginPage.propTypes = {
  onloginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
