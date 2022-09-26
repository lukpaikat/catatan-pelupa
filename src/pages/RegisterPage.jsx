import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlueContainer from '../components/BlueContainer';
import RegistrationForm from '../components/RegistrationForm';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();
  const handleRegister = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <BlueContainer>
      <RegistrationForm handleRegister={handleRegister} />
    </BlueContainer>
  );
}

export default RegisterPage;
