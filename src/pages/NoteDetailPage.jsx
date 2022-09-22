import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data';
import getFormattedDate from '../utils/getFormattedDate';
import getNoteColorClassName from '../utils/getNoteColorClassName';
import FloatingContainer from '../components/FloatingContainer';
import ActionButtonArchive from '../components/buttons/ActionButtonArchive';
import ActionButtonUnarchive from '../components/buttons/ActionButtonUnarchive';
import ActionButtonDelete from '../components/buttons/ActionButtonDelete';
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
        <article className={`py-2 px-6 w-full max-w-[700px] lg:max-w-[1000px] 2xl:max-w-[1300px]
          ${getNoteColorClassName(note.title) || 'bg-orange-note-color'} 
          mx-auto rounded-lg transition-all duration-150 min-h-[92vh] h-fit`}
        >
          <h1 className="block placeholder-black placeholder-opacity-50 bg-transparent my-2 w-full rounded-lg  text-black-text-color text-2xl lg:text-4xl 2xl:text-6xl font-bold">{note.title}</h1>
          <p className="lg:text-xl 2xl:text-2xl opacity-80">{getFormattedDate(note.createdAt)}</p>
          <div className="new-note-body block w-full h-fit my-2 rounded-lg text-xl lg:text-3xl 2xl:text-4xl">
            {parser(note.body)}
          </div>
        </article>
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
