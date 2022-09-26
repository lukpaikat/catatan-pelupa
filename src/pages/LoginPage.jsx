import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/network-data';
import BlueContainer from '../components/BlueContainer';

function LoginPage({ onloginSuccess }) {
  const handleLogin = async (user) => {
    const { error, data } = await login(user);

    if (!error) {
      onloginSuccess(data.accessToken);
    }
  };
  return (
    <BlueContainer>
      <LoginForm handleLogin={handleLogin} />
    </BlueContainer>
  );
}

LoginPage.propTypes = {
  onloginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
