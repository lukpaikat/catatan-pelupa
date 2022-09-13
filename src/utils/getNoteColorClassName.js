const getNoteColorClassName = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  const noteColorClassName = [
    'bg-orange-note-color',
    'bg-red-note-color',
    'bg-green-note-color',
    'bg-blue-note-color',
    'bg-purple-note-color',
  ];

  return noteColorClassName[randomNumber];
};

export default getNoteColorClassName;
