import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import Page404 from './pages/Page404';
import NewNotePage from './pages/NewNotePage';
import NoteDetailPage from './pages/NoteDetailPage';

function App() {
  return (
    <>
      <AppBar />
      <main className="px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes/new" element={<NewNotePage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="/404page" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404page" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
