const filterNotes = (notes, keyword) => {
  const upperCaseKeyword = keyword.toUpperCase();
  const filteredNotes = notes.filter((note) => (
    note.title.toUpperCase().indexOf(upperCaseKeyword) > -1
    || note.body.toUpperCase().indexOf(upperCaseKeyword) > -1));

  return filteredNotes;
};

export default filterNotes;
