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
// TODO: simpan nama path dengan constant (nanti cek sarannya lagi, di folder apa)
function App() {
  return (
    <>
      <AppBar />
      <main className="px-2">
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={ARCHIVE} element={<ArchivePage />} />
          <Route path={NOTES_NEW} element={<NewNotePage />} />
          <Route path={NOTES_DETAIL} element={<NoteDetailPage />} />
          <Route path={PAGE404} element={<Page404 />} />
          <Route path="*" element={<Navigate to={PAGE404} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
