import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import { register } from '../utils/network-data';

function RegistrationPage() {
  const [isRegistering, setIsRegistering] = React.useState(false);
  const navigate = useNavigate();
  const handleRegister = async (user) => {
    setIsRegistering(() => true);
    const { error } = await register(user);
    if (!error) {
      navigate('/');
      // TODO: add custom alert
      // TODO: add translations
      // eslint-disable-next-line no-alert
      alert('Registration success, please try to login');
    }
    setIsRegistering(() => false);
  };

  return (
    <div className="flex flex-col gap-4 bg-sky-200 semi-dark:bg-blue-note-color dark:bg-gray-700
    p-10 m-auto rounded-lg w-[90vw] max-w-3xl shadow-md"
    >
      <RegistrationForm handleRegister={handleRegister} isRegistering={isRegistering} />
    </div>
  );
}

export default RegistrationPage;
