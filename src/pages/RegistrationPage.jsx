import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegistrationForm from '../components/RegistrationForm';
import { register } from '../utils/network-data';
import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';
import { LOGIN } from '../config/paths';
import { ReactComponent as CatsDark } from '../assets/happy_cat_dark.svg';
import { ReactComponent as CatsLight } from '../assets/happy_cat_light.svg';

function RegistrationPage() {
  const [isRegistering, setIsRegistering] = React.useState(false);
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);
  const {
    welcome, haveAccount, logInHere, registrationFailed, registrationSuccess,
  } = dictionary[locale];
  const navigate = useNavigate();
  const handleRegister = async (user) => {
    setIsRegistering(() => true);
    const { error, message } = await register(user);
    if (!error) {
      toast.success(`${registrationSuccess}`);
      navigate('/');
    } else {
      toast.error(`${registrationFailed}: ${message}`);
      setIsRegistering(() => false);
    }
  };

  return (
    <div className="h-[80vh] min-h-fit flex flex-col my-8">
      <div className={`flex flex-col gap-4 bg-sky-200 dark:bg-gray-700
        m-auto rounded-lg w-[90vw] max-w-3xl shadow-md pause animate-cat ${isRegistering && 'play'}`}
      >
        <div className="p-4 mx-auto my-16">
          { theme === 'dark'
            ? <CatsLight className="w-[80%] mx-auto px-5 h-fit overflow-visible" />
            : <CatsDark className="w-[80%] mx-auto px-5 h-fit overflow-visible" />}
          <h1
            className="uppercase font-lato text-3xl sm:text-6xl drop-shadow-md mt-4
          text-center text-gray-text-color dark:text-white-text-color"
          >
            {welcome}
          </h1>
          <RegistrationForm handleRegister={handleRegister} isRegistering={isRegistering} />
          <p className="text-gray-text-color dark:text-white-text-color text-center my-4">
            {haveAccount}
            {' '}
            <Link className="text-orange-600 dark:text-orange-400 underline" to={LOGIN}>{logInHere}</Link>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default RegistrationPage;
