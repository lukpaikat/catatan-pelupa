const getNoteColorClassName = (title = 'Placeholder') => {
  let firstCharacterCharCode = title.charCodeAt(0);
  if (firstCharacterCharCode > 4) {
    firstCharacterCharCode %= 5;
  }
  const lastDigitStr = String(firstCharacterCharCode).slice(-1);
  const lastDigitNum = Number(lastDigitStr);

  const noteColorClassName = [
    'bg-orange-note-color',
    'bg-red-note-color',
    'bg-green-note-color',
    'bg-blue-note-color',
    'bg-purple-note-color',
  ];

  return noteColorClassName[lastDigitNum];
};

export default getNoteColorClassName;
