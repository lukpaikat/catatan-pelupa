import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import { toast } from 'react-toastify';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/network-data';
import getFormattedDate from '../utils/getFormattedDate';
import FloatingContainer from '../components/FloatingContainer';
import ActionButtonArchive from '../components/buttons/ActionButtonArchive';
import ActionLinkBack from '../components/buttons/ActionLinkBack';
import ActionButtonUnarchive from '../components/buttons/ActionButtonUnarchive';
import ActionButtonDelete from '../components/buttons/ActionButtonDelete';
import NotePaper from '../components/NotePaper';
import { HOME, ARCHIVE } from '../config/paths';
import LocaleContext from '../contexts/LocaleContext';
import Page404 from './Page404';
import NotePaperSkeleton from '../components/NotePaperSkeleton';
import dictionary from '../languages/dictionary';
import { failedToastConfig, successToastConfig } from '../config/toastConfig';

function NoteDetailPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState(null);
  const [isInitializing, setIsInitializing] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const getNoteData = async () => {
    const { error, data, message } = await getNote(id);
    if (error) {
      toast.error(`${dictionary[locale].gettingNoteDetailsFailed}
      ${message}`);
      return;
    }
    setNote(() => data);
  };

  const handleInitiation = async () => {
    await getNoteData();
    setIsInitializing(false);
  };

  React.useEffect(() => {
    handleInitiation();
  }, []);

  const deleteNoteHandler = async () => {
    const { deleting, deletingSuccess, deletingFailed } = dictionary[locale];
    const progress = toast.loading(`${deleting}`);
    const { error, message } = await deleteNote(note.id);
    if (error) {
      toast.update(progress, {
        render: `${deletingFailed}: ${message}`,
        ...failedToastConfig,
      });
    } else {
      toast.update(progress, {
        render: `${deletingSuccess}`,
        ...successToastConfig,
      });
      navigate(HOME);
    }
  };

  const archiveNoteHandler = async () => {
    const { archiving, archivingSuccess, archivingFailed } = dictionary[locale];
    const progress = toast.loading(`${archiving}`);
    const { error, message } = await archiveNote(note.id);
    if (error) {
      toast.update(progress, {
        render: `${archivingFailed}: ${message}`,
        ...failedToastConfig,
      });
    } else {
      toast.update(progress, {
        render: `${archivingSuccess}`,
        ...successToastConfig,
      });
      navigate(ARCHIVE);
    }
  };

  const unarchiveNoteHandler = async () => {
    const { activating, activatingSuccess, activatingFailed } = dictionary[locale];
    const progress = toast.loading(`${activating}`);
    const { error, message } = await unarchiveNote(note.id);
    if (error) {
      toast.update(progress, {
        render: `${activatingFailed}: ${message}`,
        ...failedToastConfig,
      });
    } else {
      toast.update(progress, {
        render: `${activatingSuccess}`,
        ...successToastConfig,
      });
      navigate(HOME);
    }
  };

  if (isInitializing) {
    return <NotePaperSkeleton />;
  }

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
          {note.archived
            ? <ActionButtonUnarchive onClick={unarchiveNoteHandler} />
            : <ActionButtonArchive onClick={archiveNoteHandler} />}
          <ActionButtonDelete onClick={deleteNoteHandler} />
          <ActionLinkBack to={note.archived ? ARCHIVE : HOME} />
        </FloatingContainer>
      </>
    );
  }
  return <Page404 message={dictionary[locale].notes404} />;
}

export default NoteDetailPage;
