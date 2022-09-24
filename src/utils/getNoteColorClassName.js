const getNoteColorClassName = (title = 'Placeholder') => {
  let firstCharacterCharCode = title.charCodeAt(0);
  if (firstCharacterCharCode > 4) {
    firstCharacterCharCode %= 5;
  }
  const lastDigitStr = String(firstCharacterCharCode).slice(-1);
  const lastDigitNum = Number(lastDigitStr);

  const noteColorClassName = [
    'bg-orange-note-color dark:bg-orange-dark-note-color',
    'bg-red-note-color dark:bg-red-dark-note-color',
    'bg-green-note-color dark:bg-green-dark-note-color',
    'bg-blue-note-color dark:bg-blue-dark-note-color',
    'bg-purple-note-color dark:bg-purple-dark-note-color',
  ];

  return noteColorClassName[lastDigitNum];
};

export default getNoteColorClassName;
