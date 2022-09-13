import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <AppBar />
      <main className="px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
