import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import getFormattedDate from '../utils/getFormattedDate';
import getNoteColorClassName from '../utils/getNoteColorClassName';
import { NOTES_DETAIL } from '../config/paths';
import NoteButtonTransparent from './buttons/NoteButtonTransparent';
import NoteButtonRed from './buttons/NoteButtonRed';
import LocaleContext from '../contexts/LocaleContext';

function NoteCard({
  title, body, createdAt, id, onMoveNote, archived, onDeleteNote, style, forwardedRef,
}) {
  const { locale } = React.useContext(LocaleContext);
  const archiveText = locale === 'id' ? 'Arsipkan' : 'Archive';
  const activeText = locale === 'id' ? 'Aktifkan' : 'Activate';
  const deleteText = locale === 'id' ? 'Hapus' : 'Delete';
  const formattedDate = getFormattedDate(createdAt);
  const noteColorClassName = getNoteColorClassName(title);
  return (
    <article
      className={`flex flex-col rounded-lg px-4 py-5 my-2 md:my-0 text-black-text-color dark:text-gray-200 ${noteColorClassName}`}
      style={style}
      ref={forwardedRef}
    >
      <h1 className="font-bold text-xl 2xl:text-2xl mb-1">
        <Link className="underline underline-offset-4" to={NOTES_DETAIL + id}>{title}</Link>
      </h1>
      <small className="2xl:text-lg">{formattedDate}</small>
      <div className="mb-4 mt-1 2xl:text-lg line-clamp-6">
        {parser(body)}
      </div>
      <div className="flex justify-between mt-auto">
        <NoteButtonTransparent
          text={archived ? activeText : archiveText}
          onClick={() => onMoveNote(id)}
        />
        <NoteButtonRed text={deleteText} onClick={() => onDeleteNote(id)} />
      </div>
    </article>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onMoveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  style: PropTypes.shape({
    transition: PropTypes.string,
    opacity: PropTypes.number,
  }).isRequired,
  forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

NoteCard.defaultProps = {
  body: '',
};

export default NoteCard;
