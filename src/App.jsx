import React from 'react';
import {
  Navigate,
  Route, Routes,
} from 'react-router-dom';
import {
  HOME, ARCHIVE, NOTES_NEW, NOTES_DETAIL, REGISTER, LOGIN,
} from './config/paths';
// API
import { getUserLogged, putAccessToken } from './utils/network-data';
// Pages
import LoginPage from './pages/LoginPage';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import Page404 from './pages/Page404';
import NewNotePage from './pages/NewNotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import RegisterPage from './pages/RegistrationPage';
// Contexts
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';
// css
import 'animate.css';

// TODO(priority): add get data from API feature

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [authedUser, setAuthedUser] = React.useState(null);
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'semiDark');

  React.useEffect(() => {
    const initiateUser = async () => {
      const { data } = await getUserLogged('app executed this');
      setAuthedUser(() => data);
      setInitializing(() => false);
    };
    initiateUser();
  }, []);

  const localeToggle = () => {
    setLocale((prevState) => {
      const newLocale = prevState === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const changeTheme = (newTheme) => {
    // opsi tema: dark; semiDark; light
    setTheme(() => newTheme);
    localStorage.setItem('theme', newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const localeContextValue = React.useMemo(() => ({
    locale,
    localeToggle,
  }), [locale]);

  const themeContextValue = React.useMemo(() => ({
    theme,
    changeTheme,
  }), [theme]);

  const onLoginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(() => data);
  };

  const onLogOut = () => {
    setAuthedUser(() => null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContextValue}>
        <ThemeProvider value={themeContextValue}>
          <AppBar />
          <main>
            <Routes>
              <Route
                path="*"
                element={<LoginPage onloginSuccess={onLoginSuccess} />}
              />
              <Route path={REGISTER} element={<RegisterPage />} />
            </Routes>
          </main>
        </ThemeProvider>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <AppBar authedUserName={authedUser.name} onLogOut={onLogOut} />
        <main className="px-2">
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            <Route path={ARCHIVE} element={<ArchivePage />} />
            <Route path={NOTES_NEW} element={<NewNotePage />} />
            <Route path={`${NOTES_DETAIL}:id`} element={<NoteDetailPage />} />
            <Route path={LOGIN} element={<Navigate to={HOME} />} />
            <Route path={REGISTER} element={<Navigate to={HOME} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
