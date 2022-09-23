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
import 'animate.css';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'semiDark');

  const changeTheme = (newTheme) => {
    // opsi tema: dark; semiDark
    setTheme(() => newTheme);
  };

  const themeContextValue = React.useMemo(() => ({
    theme,
    changeTheme,
  }), [theme]);

  return (
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
  );
}

export default App;
