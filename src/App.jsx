import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  HOME, ARCHIVE, NOTES_NEW, NOTES_DETAIL, PAGE404,
} from './config/paths';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import Page404 from './pages/Page404';
import NewNotePage from './pages/NewNotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';
import 'animate.css';
// TODO: buat app bisa berganti bahasa
function App() {
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'semiDark');

  const localeToggle = () => {
    setLocale((prevState) => {
      const newLocale = prevState === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
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

  return (
    <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <AppBar />
        <main className="px-2">
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            <Route path={ARCHIVE} element={<ArchivePage />} />
            <Route path={NOTES_NEW} element={<NewNotePage />} />
            <Route path={`${NOTES_DETAIL}:id`} element={<NoteDetailPage />} />
            <Route path={PAGE404} element={<Page404 />} />
            <Route path="*" element={<Navigate to={PAGE404} />} />
          </Routes>
        </main>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
