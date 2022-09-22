import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data';
import getFormattedDate from '../utils/getFormattedDate';
import FloatingContainer from '../components/FloatingContainer';
import ActionButtonArchive from '../components/buttons/ActionButtonArchive';
import ActionButtonUnarchive from '../components/buttons/ActionButtonUnarchive';
import ActionButtonDelete from '../components/buttons/ActionButtonDelete';
import NotePaper from '../components/NotePaper';
import { HOME, ARCHIVE, PAGE404 } from '../config/paths';

function NoteDetailPage() {
  const { id } = useParams();
  const note = getNote(id) || 'noData';
  const navigate = useNavigate();
  const deleteNoteHandler = () => {
    deleteNote(note.id);
    navigate(HOME);
  };
  const archiveNoteHandler = () => {
    archiveNote(note.id);
    navigate(ARCHIVE);
  };
  const unarchiveNoteHandler = () => {
    unarchiveNote(note.id);
    navigate(HOME);
  };
  if (note !== 'noData') {
    return (
      <>
        <NotePaper noteTitle={note.title}>
          <h1 className="block placeholder-black placeholder-opacity-50 bg-transparent my-2 w-full rounded-lg  text-black-text-color text-2xl lg:text-4xl 2xl:text-6xl font-bold">{note.title}</h1>
          <p className="lg:text-xl 2xl:text-2xl opacity-80">{getFormattedDate(note.createdAt)}</p>
          <div className="new-note-body block w-full h-fit my-2 rounded-lg text-xl lg:text-3xl 2xl:text-4xl">
            {parser(note.body)}
          </div>
        </NotePaper>
        <FloatingContainer>
          {note.archived
            ? <ActionButtonUnarchive onClick={unarchiveNoteHandler} />
            : <ActionButtonArchive onClick={archiveNoteHandler} />}
          <ActionButtonDelete onClick={deleteNoteHandler} />
        </FloatingContainer>
      </>
    );
  }
  return <Navigate to={PAGE404} replace />;
}

export default NoteDetailPage;
