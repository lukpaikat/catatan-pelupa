import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlueContainer from '../components/BlueContainer';
import RegistrationForm from '../components/RegistrationForm';
import { register } from '../utils/network-data';

function RegistrationPage() {
  const navigate = useNavigate();
  const handleRegister = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
      // TODO: add custom alert
      // TODO: add translations
      // eslint-disable-next-line no-alert
      alert('Registration success, please try to login');
    }
  };

  return (
    <BlueContainer>
      <RegistrationForm handleRegister={handleRegister} />
    </BlueContainer>
  );
}

export default RegistrationPage;
