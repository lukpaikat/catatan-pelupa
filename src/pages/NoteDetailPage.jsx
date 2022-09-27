import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/network-data';
import getFormattedDate from '../utils/getFormattedDate';
import FloatingContainer from '../components/FloatingContainer';
import ActionButtonArchive from '../components/buttons/ActionButtonArchive';
import ActionButtonUnarchive from '../components/buttons/ActionButtonUnarchive';
import ActionButtonDelete from '../components/buttons/ActionButtonDelete';
import NotePaper from '../components/NotePaper';
import { HOME, ARCHIVE } from '../config/paths';
import LocaleContext from '../contexts/LocaleContext';
import Page404 from './Page404';

function NoteDetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);
  // const note = getNote(id) || 'noData';
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const getNoteData = async () => {
    const { error, data } = await getNote(id);
    if (error) {
      // FIXME: use custom alert
      // eslint-disable-next-line no-alert
      alert('failed to retrieve note data');
      return;
    }
    setNote(() => data);
  };

  React.useEffect(() => {
    getNoteData();
  }, []);

  const deleteNoteHandler = async () => {
    const { error } = await deleteNote(note.id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert('failed to delete note');
      return;
    }
    if (note.archived) {
      navigate(ARCHIVE);
      return;
    }
    navigate(HOME);
  };
  const archiveNoteHandler = async () => {
    const { error } = await archiveNote(note.id);
    if (error) {
      // FIXME: pakai custom alert
      // eslint-disable-next-line no-alert
      alert('failed to archive note');
      return;
    }
    navigate(ARCHIVE);
  };
  const unarchiveNoteHandler = async () => {
    const { error } = await unarchiveNote(note.id);
    if (error) {
      // FIXME: pakai custom alert
      // eslint-disable-next-line no-alert
      alert('failed to activate note');
      return;
    }
    navigate(HOME);
  };
  if (note !== null) {
    return (
      <>
        {/* TODO: tambah tombol kembali disini */}
        <NotePaper noteTitle={note.title}>
          <h1 className="block placeholder-black placeholder-opacity-50 bg-transparent my-2 w-full rounded-lg  text-black-text-color dark:text-gray-200 text-2xl lg:text-4xl 2xl:text-6xl font-bold break-words">{note.title}</h1>
          <p className="lg:text-xl 2xl:text-2xl dark:text-gray-200 opacity-80">{getFormattedDate(note.createdAt, locale)}</p>
          <div className="new-note-body block w-full h-fit my-2 rounded-lg text-xl lg:text-3xl 2xl:text-4xl dark:text-gray-200 break-words">
            {parser(note.body)}
          </div>
        </NotePaper>
        <FloatingContainer>
          {/* TODO: Atau tambah tombol kembali disini */}
          {note.archived
            ? <ActionButtonUnarchive onClick={unarchiveNoteHandler} />
            : <ActionButtonArchive onClick={archiveNoteHandler} />}
          <ActionButtonDelete onClick={deleteNoteHandler} />
        </FloatingContainer>
      </>
    );
  }
  // BUG: muncul 404 page pas loading
  // TODO: add note initialization page
  return <Page404 />;
}

export default NoteDetailPage;
